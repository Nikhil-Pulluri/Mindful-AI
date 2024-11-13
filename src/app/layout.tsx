'use client'
import './globals.css'
// import { useState } from 'react'
// import Providers from './components/Providers';
import React from 'react'
// import { SessionProvider } from 'next-auth/react'
import { UserProvider } from '@/context/userContext'
import SessionWrapper from '@/components/SessionWrapper'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  // const [theme, setTheme] = useState('dark')

  // const toggle = () => {
  //   setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))
  // }

  // last hope

  return (
    <SessionWrapper>
      <html lang="en">
        <body className="dark">
          <UserProvider>
            {/* <SessionProvider> */}
            {children}
            {/* <div className={`fixed top-[3%] left-[85%] cursor-pointer ${theme === 'dark' ? 'text-white' : 'text-black'}`} onClick={toggle}>
                {theme === 'dark' ? 'light' : 'dark'}
              </div> */}
            {/* </SessionProvider> */}
          </UserProvider>
        </body>
      </html>
    </SessionWrapper>
  )
}
