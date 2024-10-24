"use client"
import Avatarshow from './Avatar'

import * as React from "react"
import Link from "next/link"





export default function Navbar() {
  return (
    <nav className="dark py-4 bg-[#1a1a1a] shadow-md">
      <div className="flex justify-between px-[60px]">
        <Link className="text-white ml-[30px]" href='/'>Logo</Link>
        <Link className="text-white" href='Chat/profile'>
          <Avatarshow/>
        </Link>
      </div>
    </nav>
  )
}

