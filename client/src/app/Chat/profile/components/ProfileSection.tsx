'use client'

import React from 'react'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card } from '@/components/ui/card'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { UserCircle2 } from 'lucide-react'

type Props = {
  profile: {
    Name: string | undefined
    Profilepic: string | undefined
    Email: string | undefined
  }
}

export default function ProfileSection({ profile }: Props) {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  }

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
        duration: 0.6,
      },
    },
  }

  return (
    <motion.div initial="hidden" animate="visible" variants={containerVariants} className="min-h-[50vh] lg:min-h-[80vh] flex items-center justify-center p-2 sm:p-4">
      <Card className="w-full max-w-4xl p-4 sm:p-8 backdrop-blur-sm bg-white/10 shadow-2xl rounded-2xl">
        <motion.h1 variants={itemVariants} className="text-2xl sm:text-4xl font-bold text-center bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text mb-6 sm:mb-12">
          Profile Section
        </motion.h1>

        <div className="flex flex-col md:flex-row items-center justify-around gap-6 sm:gap-12">
          <motion.div variants={imageVariants} className="relative group">
            <div className="relative w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] rounded-full overflow-hidden ring-4 ring-purple-500/30 shadow-xl">
              {profile.Profilepic ? (
                <Image
                  src={profile.Profilepic}
                  alt="Profile Picture"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  sizes="(max-width: 640px) 150px, 200px"
                  priority
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
                  <UserCircle2 className="w-24 h-24 sm:w-32 sm:h-32 text-gray-400" />
                </div>
              )}
            </div>
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              whileHover={{ scale: 1.05 }}
            />
          </motion.div>

          <motion.div variants={containerVariants} className="flex flex-col gap-4 sm:gap-6 w-full max-w-md">
            {Object.entries(profile).map(
              ([key, value]) =>
                key !== 'Profilepic' && (
                  <motion.div key={key} variants={itemVariants} className="group">
                    <Label className="text-sm font-semibold text-gray-600 dark:text-gray-300 mb-1 block" htmlFor={key.toLowerCase()}>
                      {key}
                    </Label>
                    <div className="relative">
                      <Input
                        id={key.toLowerCase()}
                        type="text"
                        readOnly
                        value={value || ''}
                        className="w-full bg-white/5 border-gray-200/20 focus:border-purple-500 focus:ring-purple-500 transition-all duration-300 backdrop-blur-sm text-sm sm:text-base"
                      />
                      <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-300 group-hover:w-full" />
                    </div>
                  </motion.div>
                )
            )}
          </motion.div>
        </div>
      </Card>
    </motion.div>
  )
}
