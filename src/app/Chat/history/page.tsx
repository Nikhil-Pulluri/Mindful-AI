'use client'

import { motion } from 'framer-motion'
import { MessageSquare, Star, Clock, Search } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { ScrollArea } from '@/components/ui/scroll-area'
import { useState } from 'react'
import Link from 'next/link'

interface ChatMessage {
  id: string
  message: string
  timestamp: string
  isAI: boolean
  isStarred: boolean
}

export default function ChatHistory() {
  const [searchTerm, setSearchTerm] = useState('')

  const chatHistory: ChatMessage[] = [
    {
      id: '1',
      message: "I've been feeling anxious lately...",
      timestamp: '2024-03-20 14:30',
      isAI: false,
      isStarred: true,
    },
    {
      id: '2',
      message: "I understand. Let's explore what's causing your anxiety. Can you tell me more about when these feelings typically occur?",
      timestamp: '2024-03-20 14:31',
      isAI: true,
      isStarred: true,
    },
    // Add more chat history items as needed
  ]

  const filteredChats = chatHistory.filter((chat) => chat.message.toLowerCase().includes(searchTerm.toLowerCase()))

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl mx-auto p-6">
        <div className="flex items-center justify-between mb-8">
          <motion.h1 initial={{ x: -20 }} animate={{ x: 0 }} className="text-3xl font-bold text-primary flex items-center gap-2">
            <MessageSquare className="w-8 h-8" />
            Mindful AI Chat History
          </motion.h1>
          <Link href="/starred-chats" className="text-muted-foreground hover:text-primary transition-colors">
            <Star className="w-6 h-6" />
          </Link>
        </div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search conversations..." className="pl-10" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
          </div>
        </motion.div>

        <ScrollArea className="h-[calc(100vh-200px)] pr-4">
          {filteredChats.map((chat, index) => (
            <motion.div
              key={chat.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`mb-4 p-4 rounded-lg ${chat.isAI ? 'bg-secondary ml-8' : 'bg-primary/5'}`}
            >
              <div className="flex justify-between items-start mb-2">
                <span className="font-medium">{chat.isAI ? 'Mindful AI' : 'You'}</span>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  {chat.timestamp}
                  {chat.isStarred && <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />}
                </div>
              </div>
              <p className="text-foreground/80">{chat.message}</p>
            </motion.div>
          ))}
        </ScrollArea>
      </motion.div>
    </div>
  )
}
