'use client'

import React from 'react'
import ProfileSection from './components/ProfileSection'
import Chats from './components/Chats'
import { useUser } from '@/context/userContext'

export default function Page() {
  const { user } = useUser()
  const data = {
    profile: {
      Name: user?.name,
      Profilepic: user?.image,
      Email: user?.email,
    },
    chats: [
      {
        id: 1,
        Title: 'Chat 1',
        chaturl: 'www.test.com',
      },
      {
        id: 2,
        Title: 'Chat 2',
        chaturl: 'www.test.com',
      },
    ],
  }

  return (
    <div className="min-h-[90.5vh] p-2 sm:p-4 flex flex-col mt-2 sm:mt-6 gap-2 bg-gradient-to-r bg-[#1a1a1a] rounded-md">
      {/* Use flex on smaller screens and grid only on large screens */}
      <div className="h-full flex flex-col lg:grid lg:grid-cols-5 lg:grid-rows-5 gap-4 p-2">
        {/* Profile section */}
        <div className="w-full bg-muted/50 p-2 sm:p-4 rounded-md shadow-sm order-2 lg:order-1 lg:col-span-3 lg:row-span-5">
          <ProfileSection profile={data.profile} />
        </div>

        {/* Chats section */}
        <div className="w-full bg-muted/50 rounded-md shadow-sm p-2 sm:p-4 order-1 lg:order-2 lg:col-start-4 lg:col-span-2 lg:row-span-5">
          <Chats chats={data.chats} />
        </div>
      </div>
    </div>
  )
}
