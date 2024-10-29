'use client'
import React from 'react'
import { useState } from 'react'
import Navbar from './components/Navbar'
import { Login } from './components/components-login-01'
import { Signup } from '@/components/signup'

export default function page() {
  const [mode, setMode] = useState('login')
  const toggle = () => {
    setMode((prev) => (prev === 'login' ? 'signup' : 'login'))
  }
  return (
    <>
      <Navbar />

      {/* <div className="grid grid-cols-5 grid-rows-5 gap-2 p-2">
        <div className="col-span-4 row-span-5 bg-muted/50"></div>
        <div className="col-start-5 row-span-5 bg-muted/50 p-1">{mode === 'login' ? <Login toggleMode={toggle} /> : <Signup toggleMode={toggle} />}</div>

      </div> */}

      <div className="grid grid-cols-5 grid-rows-5 gap-4 p-2">
        <div className="col-span-3 row-span-5 bg-muted/50"></div>
        <div className="col-span-2 row-span-5 col-start-4 bg-muted/50">{mode === 'login' ? <Login toggleMode={toggle} /> : <Signup toggleMode={toggle} />}</div>
      </div>
    </>
  )
}
