import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { MessageCircle, Sparkles, Shield } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { LoginDialog } from './GoogleLogin'

export default function Landing() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary md:p-6">
      <nav className="container mx-auto p-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold">MindfulAI</span>
        </div>

        <LoginDialog />
      </nav>

      <main className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div className="flex-1 space-y-6" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">Your Compassionate AI Therapy Companion</h1>
            <p className="text-xl text-muted-foreground">Experience supportive conversations and emotional guidance through our advanced AI therapy assistant, available 24/7.</p>
            <div className="flex gap-4">
              <Button size="lg" className="gap-2">
                <MessageCircle className="w-4 h-4" />
                Start Chatting
              </Button>
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </div>
          </motion.div>

          <motion.div className="flex-1" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.2 }}>
            <Image
              src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&q=80&w=1200"
              alt="Peaceful meditation scene"
              width={600}
              height={400}
              className="rounded-lg shadow-2xl"
            />
          </motion.div>
        </div>

        <motion.div className="grid md:grid-cols-3 gap-8 mt-24" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }}>
          <Card className="p-6 space-y-4">
            <Sparkles className="w-12 h-12 text-primary" />
            <h3 className="text-xl font-semibold">AI-Powered Insights</h3>
            <p className="text-muted-foreground">Advanced natural language processing to understand and respond to your emotional needs.</p>
          </Card>

          <Card className="p-6 space-y-4">
            <Shield className="w-12 h-12 text-primary" />
            <h3 className="text-xl font-semibold">Private & Secure</h3>
            <p className="text-muted-foreground">Your conversations are encrypted and completely confidential.</p>
          </Card>

          <Card className="p-6 space-y-4">
            <MessageCircle className="w-12 h-12 text-primary" />
            <h3 className="text-xl font-semibold">24/7 Availability</h3>
            <p className="text-muted-foreground">Get support whenever you need it, day or night.</p>
          </Card>
        </motion.div>
      </main>
    </div>
  )
}
