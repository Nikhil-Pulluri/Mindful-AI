"use client";
import localFont from 'next/font/local';
import './globals.css';
import { useState } from "react";

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});




export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {

  const [theme, setTheme] = useState('dark')

  const toggle = () => {

    setTheme((prev) => (prev==='dark' ? 'light' : 'dark'))
  }

  return (
    <html lang="en">
      <body className={`${theme}`}>
        {children}

        <div className={`fixed top-[3%] left-[85%] cursor-pointer ${theme === 'dark' ? 'text-white' : 'text-black'}`} onClick={toggle}>
          {theme === 'dark' ? 'light' : 'dark'}
        </div>
      </body>
    </html>
  );
}
