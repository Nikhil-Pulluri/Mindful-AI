'use client'

import Link from 'next/link'
import React from 'react'
import { signIn, signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useUser } from '@/context/userContext'

interface LoginProps {
  toggleMode: () => void
}

export function Login({ toggleMode }: LoginProps) {
  const { data: session } = useSession()
  // const router = useRouter()
  const { user, setUser } = useUser()

  useEffect(() => {
    if (session && session.user) {
      const userData = {
        name: session.user.name ?? '',
        email: session.user.email ?? '',
      }

      console.log(userData)

      setUser(userData)
    }
  }, [session, setUser])

  return (
    <div className="flex h-[auto] w-full justify-center px-4">
      <Card className="mx-auto max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>Enter your email below to login to your account</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="m@example.com" required />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <Link href="#" className="ml-auto inline-block text-sm underline">
                  Forgot your password?
                </Link>
              </div>
              <Input id="password" type="password" required />
            </div>
            {session && session.user ? (
              <div>
                <Link href="/Chat">Go to the Chat section</Link>
              </div>
            ) : (
              <Button type="button" className="w-full" onClick={() => signIn()}>
                Login
              </Button>
            )}
            {session && session.user ? (
              <Button onClick={() => signOut()} variant="outline" className="w-full">
                Log Out
              </Button>
            ) : (
              <Button onClick={() => signIn('google')} variant="outline" className="w-full">
                Login with Google
              </Button>
            )}
          </div>
          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{' '}
            <a onClick={toggleMode} className="underline cursor-pointer">
              Sign Up
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
