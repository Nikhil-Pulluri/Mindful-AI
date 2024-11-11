'use client'

import * as React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ExternalLink, MessageCircle } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

type Props = {
  Title: string
  chaturl: string
}

export default function ChatCard({ Title, chaturl }: Props) {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} whileHover={{ scale: 1.02 }} className="w-full sm:w-[350px]">
      <Card className="group relative overflow-hidden border-2 transition-colors hover:border-primary/50 dark:hover:border-primary/30">
        <motion.div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-primary/10 opacity-0 transition-opacity group-hover:opacity-100" initial={false} transition={{ duration: 0.3 }} />

        <CardHeader className="space-y-1">
          <div className="flex items-center gap-2">
            <MessageCircle className="h-5 w-5 text-primary/80" />
            <CardTitle className="text-xl font-semibold">Chat Detail</CardTitle>
          </div>
        </CardHeader>

        <CardContent>
          <div className="grid w-full gap-4">
            <div className="space-y-2">
              <Label htmlFor="title" className="text-sm font-medium">
                Chat Name
              </Label>
              <Input id="title" value={Title} readOnly className="bg-secondary/50 font-medium" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="url" className="text-sm font-medium">
                Chat URL
              </Label>
              <Input id="url" value={chaturl} readOnly className="bg-secondary/50 font-mono text-sm" />
            </div>
          </div>
        </CardContent>

        <CardFooter className="flex justify-center pb-6">
          <Link href={chaturl} target="_blank" rel="noopener noreferrer" className="w-full">
            <Button className="group relative w-full overflow-hidden" size="lg">
              <span className="relative z-10 flex items-center justify-center gap-2">
                Visit Chat
                <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
              <motion.div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary" initial={{ x: '100%' }} whileHover={{ x: '0%' }} transition={{ duration: 0.3 }} />
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </motion.div>
  )
}
