import { Mistral } from '@mistralai/mistralai';

const apiKey = process.env.MISTRAL_API_KEY;

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

interface RequestBody {
  messages: Message[];
}

export async function POST(req: Request): Promise<Response> {
  try {
    const body: RequestBody = await req.json(); // Parse the request body with proper typing
    const { messages } = body; // Extract messages from the request body

    console.log('Messages:', body);
    const client = new Mistral({ apiKey });

    const chatResponse = await client.chat.complete({
      model: "mistral-large-latest",
      messages, // Pass the parsed messages
    });

    const chatContent = chatResponse.choices && chatResponse.choices[0]?.message?.content;


    // Return the chat response back to the frontend
    return new Response(
      JSON.stringify({
        success: true,
        message: chatContent,
      }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error in POST handler:', error);

    return new Response(
      JSON.stringify({
        success: false,
        error: 'Something went wrong',
        details: error instanceof Error ? error.message : String(error),
      }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
