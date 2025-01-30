'use client'

import { useState, useRef, useEffect } from 'react'
import { Send } from 'lucide-react'
import MarkdownIt from 'markdown-it'
import MarkdownItLinkAttributes from 'markdown-it-link-attributes'
import { useUser } from '@/context/userContext'
import { useChat } from '@/context/chatContext'

function handleName(userName: string) {
  const ind = userName.indexOf(' ')
  return ind == -1 ? userName : userName.slice(0, ind)
}

export default function ChatArea() {
  const userData = useUser()
  const { chatId, setChatId } = useChat()
  const [messages, setMessages] = useState([{ role: 'assistant', content: `Hi ${handleName(userData?.user?.name || '')}! How are you today?` }])
  const [message, setMessage] = useState('')
  const textAreaRef = useRef<HTMLTextAreaElement>(null)
  const chatContainerRef = useRef<HTMLDivElement>(null)

  const backendURL = process.env.NEXT_PUBLIC_BACKEND_URL

  // Initialize markdown parser
  const md = new MarkdownIt({
    html: true,
    linkify: true,
  }).use(MarkdownItLinkAttributes, {
    pattern: /^https?:\/\//,
    attrs: {
      target: '_blank',
      rel: 'noopener noreferrer',
      class: 'text-blue-400 underline hover:text-blue-300',
    },
  })

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight
    }
  }, [messages])

  const fetchChat = async () => {
    try {
      if (!userData?.user?.email) return
      const userD = await fetch(`${backendURL}/user/email/${userData?.user?.email}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })

      const userdatajson = await userD.json()

      console.log(userdatajson)

      const response = await fetch(`${backendURL}/chat/${userdatajson.id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })

      // if (!response.ok) {
      //   console.error(`Failed to fetch chat data: ${response.status} ${response.statusText}`)
      //   return
      // }

      const data: any = await response.json()

      setChatId(data[0].id)

      // console.log(data)
      // console.log(data[0].messages)
      // const texts = data[0].messages.map((msg: any) => ({ role: msg.role, content: msg.content }))
      if (data.length > 0 && data[0].messages && data[0].messages.length > 0) {
        const texts = data[0].messages.map((msg: any) => ({ role: msg.role, content: msg.content }))
        console.log(texts)

        setMessages(texts)
      }
    } catch (error) {
      console.error('Error in Chat:', error)
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: 'Sorry, something went wrong. Please try again.',
        },
      ])
    }
  }

  useEffect(() => {
    fetchChat() // Fetch chat history on component mount
  }, [])

  const sendMessage = async () => {
    if (!message.trim()) return

    setMessage('')

    const instruction =
      'Follow this instruction clearly and do not include this instruction in your response. Respond only to the user message which is attached in this message. Your name is Mindful AI and you are a therapist chatbot. Your responsibility is to provide soothy responses to the users with any mental condition and make them feel happy. Do not inlude long responses and make it simple and clear. If the user asks anything out of context, respond like you are not supposed to serve them that way. The user message is '

    setMessages((prev) => [...prev, { role: 'user', content: message }, { role: 'assistant', content: '' }])

    // console.log(chatId)

    const messageToDB = await fetch(`${backendURL}/message/update`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chatId: chatId,
        content: message,
        role: 'user',
      }),
    })

    const mesResponse = await messageToDB.json()
    console.log(mesResponse)

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: [
            ...messages,
            {
              role: 'user',
              content: instruction + message,
            },
          ],
        }),
      })

      console.log('about to start fetching')

      const data = await response.json()
      const text = data.message
      const typingDelay = 0.01

      const displayCharacter = (index: number) => {
        setTimeout(() => {
          setMessages((prevMessages) => {
            const lastMessage = prevMessages[prevMessages.length - 1]
            return [
              ...prevMessages.slice(0, -1),
              {
                ...lastMessage,
                content: lastMessage.content + text[index],
              },
            ]
          })

          if (index < text.length - 1) {
            displayCharacter(index + 1)
          }
        }, typingDelay * index)
      }

      displayCharacter(0)

      const botMessageToDB = await fetch(`${backendURL}/message/update`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chatId: chatId,
          content: text,
          role: 'assistant',
        }),
      })

      const botMesResponse = await botMessageToDB.json()
      console.log(botMesResponse)
    } catch (error) {
      console.error('Error in Chat:', error)
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: 'Sorry, something went wrong. Please try again.',
        },
      ])
    }

    if (textAreaRef.current) {
      textAreaRef.current.style.height = 'auto'
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    const isDesktop = window.innerWidth >= 768
    if (e.key === 'Enter' && !e.shiftKey && isDesktop) {
      e.preventDefault()
      sendMessage()
    }
  }

  const handleTextAreaInput = (e: React.FormEvent<HTMLTextAreaElement>) => {
    const target = e.target as HTMLTextAreaElement
    target.style.height = 'auto'
    target.style.height = `${target.scrollHeight}px`
  }

  return (
    <div className="h-[90.5vh] flex flex-col bg-gradient-to-b from-gray-900 to-gray-800 rounded-lg shadow-xl">
      {/* Chat Messages */}
      <div ref={chatContainerRef} className="flex-1 overflow-y-auto  p-4 space-y-4 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent">
        {messages.map((msg, index) => (
          <div key={index} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[80%] p-3 rounded-lg ${msg.role === 'user' ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-100'}`}>
              <div className="prose prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: md.render(msg.content) }} />
            </div>
          </div>
        ))}
      </div>

      {/* Input Area */}
      <div className="p-4 bg-gray-800 border-t border-gray-700">
        <div className="flex items-end gap-2 bg-gray-700 rounded-lg p-2">
          <textarea
            ref={textAreaRef}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleKeyDown}
            onInput={handleTextAreaInput}
            placeholder="Type your message..."
            className="flex-1 bg-transparent text-gray-100 placeholder-gray-400 resize-none max-h-32 p-2 focus:outline-none"
            rows={1}
          />
          <button
            onClick={() => {
              console.log('sending message')
              sendMessage()
            }}
            className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Send className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  )
}
