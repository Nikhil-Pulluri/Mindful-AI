// contexts/chatContext.tsx
'use client'

import { createContext, useContext, useState, ReactNode, useEffect } from 'react'
import { useUser } from '@/context/userContext'

type ChatContextType = {
  chatId: string
  setChatId: (id: string) => void
}

const ChatContext = createContext<ChatContextType>({
  chatId: '',
  setChatId: () => {},
})

export function ChatProvider({ children }: { children: ReactNode }) {
  const [chatId, setChatId] = useState<string>('')
  const { user } = useUser()
  const backendURL = process.env.NEXT_PUBLIC_BACKEND_URL

  useEffect(() => {
    const fetchChatId = async () => {
      try {
        if (!user?.email) return

        // First get user data
        const userResponse = await fetch(`${backendURL}/user/email/${user.email}`)
        const userData = await userResponse.json()

        // Then get chat ID for this user
        const chatResponse = await fetch(`${backendURL}/chat/${userData.id}`)
        const chatData = await chatResponse.json()

        if (chatData.length > 0) {
          setChatId(chatData[0].id) // Assuming first chat is the active one
        }
      } catch (error) {
        console.error('Error fetching chat ID:', error)
      }
    }

    fetchChatId()
  }, [user?.email])

  return <ChatContext.Provider value={{ chatId, setChatId }}>{children}</ChatContext.Provider>
}

export const useChat = () => {
  const context = useContext(ChatContext)
  if (!context) {
    throw new Error('useChat must be used within a ChatProvider')
  }
  return context
}
