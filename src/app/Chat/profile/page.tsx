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
    <div className="h-[90.5vh] p-4 flex flex-col mt-6 gap-2 bg-gradient-to-r bg-[#1a1a1a] rounded-md">
      <div className="h-full grid grid-cols-5 grid-rows-5 gap-2 p-2">
        <div className="col-span-3 row-span-5 bg-muted/50 p-4 rounded-md shadow-sm">
          <ProfileSection profile={data.profile} />
        </div>
        <div className="col-start-4 col-span-2 row-span-5 bg-muted/50 rounded-md shadow-sm p-4">
          <Chats chats={data.chats} />
        </div>
      </div>
    </div>
  )
}
