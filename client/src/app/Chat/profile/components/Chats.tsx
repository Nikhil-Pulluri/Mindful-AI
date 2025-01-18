import React from 'react'
import ChatCard from './ChatCard'

type Props = {
  chats: {
    id: number
    Title: string
    chaturl: string
  }[]
}

export default function Chats({ chats }: Props) {
  return (
    <>
      <div className="text-3xl text-center font-bold">Chats</div>
      <div className="w-full h-full items-center justify-center rounded-md flex flex-col gap-5">
        <div className="flex flex-col gap-3">
          {chats.map((chat) => (
            <ChatCard key={chat.id} Title={chat.Title} chaturl={chat.chaturl} />
          ))}
        </div>
      </div>
    </>
  )
}
