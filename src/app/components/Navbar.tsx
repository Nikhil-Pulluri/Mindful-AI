"use client"
import Avatarshow from './Avatar'

import * as React from "react"
import Link from "next/link"





export default function Navbar() {
  return (
    <nav className="dark py-7">
      <div className="flex justify-between px-[60px]">
        <Link className="text-white ml-[30px]" href='/'>Logo</Link>
        <Link className="text-white" href='/profile'>
          <Avatarshow/>
        </Link>
      </div>
    </nav>
  )
}

