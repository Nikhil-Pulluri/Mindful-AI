'use client'
import './globals.css'
// import { useState } from 'react'
// import Providers from './components/Providers';
import React from 'react'
import { SessionProvider } from 'next-auth/react'
import { UserProvider } from '@/context/userContext'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  // const [theme, setTheme] = useState('dark')

  // const toggle = () => {
  //   setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))
  // }

  return (
    <html lang="en">
      <body>
        <UserProvider>
          <SessionProvider>
            {children}
            {/* <div className={`fixed top-[3%] left-[85%] cursor-pointer ${theme === 'dark' ? 'text-white' : 'text-black'}`} onClick={toggle}>
              {theme === 'dark' ? 'light' : 'dark'}
            </div> */}
          </SessionProvider>
        </UserProvider>
      </body>
    </html>
  )
}
