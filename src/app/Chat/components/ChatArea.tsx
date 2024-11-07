'use client'
import { useState } from 'react'

function ChatArea() {
  // const [isMobile, setIsMobile] = useState(false);
  const [messages, setMessages] = useState([{ sender: 'bot', msg: 'hi there! how can i help you today?' }])
  const [input, setInput] = useState('')

  // const chatbox = useRef(null)

  // useEffect(()=>{
  //   const element = document.getElementById("chatarea");
  //   const width = element.offsetWidth;

  //   if(width<768) setIsMobile(true);

  //   else setIsMobile(false);

  //   return () => {

  //   }
  // },[])

  // useEffect(()=> { // for scroll down automatically when a new message added
  //   if(chatbox.current)
  //   {
  //     chatbox.current.scrollTop = chatbox.current.scrollHeight;
  //   }
  // }, [messages])

  const sendMessage = async () => {
    // have to make this async when connected with backend for fetching the response fro the ai end point.
    if (input.trim() === '') return

    const userMessage = { sender: 'user', msg: `${input}` }

    setMessages((prev) => [...prev, userMessage])

    setInput('')

    const botMessage = { sender: 'bot', msg: 'how are you today?' }
    setMessages((prev) => [...prev, botMessage])
  }

  const handlekey = (e: { key: string }) => {
    if (e.key === 'Enter') {
      sendMessage()
    }
  }

  return (
    <div className="h-[90.5vh] p-4 flex flex-col gap-2 bg-gradient-to-r bg-[#1a1a1a] rounded-md">
      <div id="chatarea" className="h-[90%] bg-black/10 backdrop-blur-md shadow-lg rounded-md overflow-y-auto custom-scroll">
        {/* chat area is here */}

        <div className="flex flex-col p-3 gap-2">
          {/*className={`p-2 rounded-lg ${message.sender == 'user' ? "bg-blue-500 self-end" : "bg-gray-400 self-start"}`}*/}
          {messages.map((message, index) => (
            <div key={index} className={`p-2 rounded-lg bg-[#676464] ${message.sender == 'user' ? 'self-end' : 'self-start'}`}>
              {message.msg}
            </div>
          ))}
        </div>
      </div>

      <div id="input" className="h-[10%] flex items-center bg-transparent p-2 rounded-lg shadow-md">
        <input
          type="text"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handlekey}
          className="flex-grow p-3 bg-white-200 rounded-full  focus:ring-2 bg-gray-800"
        />
        <button onClick={() => sendMessage()} className="ml-3 px-4 py-2 text-white font-bold bg-gray-600 hover:bg-gray-800 rounded-xl">
          Send
        </button>
      </div>
    </div>
  )
}

export default ChatArea
