'use client'

import { motion } from 'framer-motion'
import { Star, Clock, ArrowLeft } from 'lucide-react'
import { ScrollArea } from '@/components/ui/scroll-area'
import Link from 'next/link'

// for committing things

interface StarredMessage {
  id: string
  message: string
  timestamp: string
  isAI: boolean
}

export default function StarredChats() {
  const starredChats: StarredMessage[] = [
    {
      id: '1',
      message: "I've been feeling anxious lately...",
      timestamp: '2024-03-20 14:30',
      isAI: false,
    },
    {
      id: '2',
      message: "I understand. Let's explore what's causing your anxiety. Can you tell me more about when these feelings typically occur?",
      timestamp: '2024-03-20 14:31',
      isAI: true,
    },
    // Add more starred chats as needed
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl mx-auto p-6">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Link href="/chat-history" className="text-muted-foreground hover:text-primary transition-colors">
              <ArrowLeft className="w-6 h-6" />
            </Link>
            <motion.h1 initial={{ x: -20 }} animate={{ x: 0 }} className="text-3xl font-bold text-primary flex items-center gap-2">
              <Star className="w-8 h-8 text-yellow-500" />
              Starred Conversations
            </motion.h1>
          </div>
        </div>

        <ScrollArea className="h-[calc(100vh-200px)] pr-4">
          {starredChats.map((chat, index) => (
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
                  <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
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
