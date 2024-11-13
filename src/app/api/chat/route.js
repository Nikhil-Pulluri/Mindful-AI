import { NextResponse } from "next/server";
import { GoogleGenerativeAI} from '@google/generative-ai';


export async function POST(req) {

  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
  const model = genAI.getGenerativeModel({ 
    model: "gemini-1.5-flash",
    systemInstruction: `You are Mindful AI, a warm and friendly virtual therapist here to support users in their emotional well-being. Focus on listening, responding with empathy, and offering gentle guidance that helps users feel understood and valued. Do not give longer responses and try to medium short and simple in terminology. Do the roleplay of a mental therapist and make the user calm by reading your responses. Let the user lead each conversation, keeping your responses clear, positive, and encouraging. If a user asks questions unrelated to emotional support, gracefully bring the conversation back to themes of well-being. Your goal is to create a safe space where users feel heard, uplifted, and supported. Thank you!`
   });

  try {
    /* 'data' is the basically the messages array from the page.js
     * file. This array contains the entire chat history:
     * it contains objects, and each object has a role and content
     * property. The role is either 'user' or 'assistant', and the
     * content is the text that the user or the assistant has typed.
     */
    const data = await req.json();

    /* Construct the conversation history: */
    const conversationHistory = data.map(message => {
      return `${message.content}`;
    }).join("\n\n");

    /* Combine the system instruction with the conversation history */
    const prompt = `${model.systemInstruction}\n\nHere's what has been discussed so far:${conversationHistory}\n`;

    /* Send user's prompt and then get assistant's response: */
    const result = await model.generateContentStream(prompt);
    const response = await result.response;
    const text = response.text();

    /* Return the assistant's response: */
    return new Response(text);


  } catch (error) {
    console.error("Error in API Call:", error.message);
    console.error("Full Error Details:", error);
    return NextResponse.json({ error: "Error generating response" }, { status: 500 });
  }
}
