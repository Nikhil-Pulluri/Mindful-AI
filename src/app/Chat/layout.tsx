import type { Metadata } from "next";
import localFont from "next/font/local";
// import "./globals.css";
// import Navbar from './components/Navbar'
import Sidebar_07 from '@/components/components-sidebar-07'

// const geistSans = localFont({
//   src: "/src/app/fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "/src/app/fonts/GeistVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  title: "ChatBot",
  description: "Generated by create next app",
};

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import AppSidebar from './components/Sidebar'

export default function ChatLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

       <main>
         <SidebarProvider>
         <Sidebar_07 children={children} />
             </SidebarProvider>
       </main>


  );
}