import { Button } from '@/components/ui/button'
import { signIn, useSession } from 'next-auth/react'
import { useUser } from '@/context/userContext'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { LogIn } from 'lucide-react'

type User = {
  name: string
  email: string
  image: string
}

export function LoginDialog() {
  const { data: session } = useSession()
  const router = useRouter()
  const { setUser } = useUser()
  const backendURL = process.env.NEXT_PUBLIC_BACKEND_URL

  useEffect(() => {
    if (session && session.user) {
      const userData: User = {
        name: session.user.name ?? '',
        email: session.user.email ?? '',
        image: session.user.image ?? '',
      }

      // Save user data in the context
      setUser(userData)

      // Sync with the backend
      syncUserWithBackend(userData).then(() => {
        router.push('/Chat')
      })
    }
  }, [session, setUser, router])

  async function syncUserWithBackend(userData: User): Promise<void> {
    try {
      console.log(backendURL, userData)
      const response = await fetch(`${backendURL}/user/find-create`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      })

      if (!response.ok) {
        throw new Error(`Backend error: ${response.statusText}`)
      }

      const backendUser = await response.json()
      console.log('User synced with backend:', backendUser)
    } catch (error) {
      console.error('Error syncing user with backend:', error)
    }
  }

  async function handleSignIn(provider: string) {
    try {
      // Trigger the sign-in flow
      await signIn(provider)
    } catch (error) {
      console.error('Error during sign-in:', error)
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="gap-2">
          <LogIn className="w-4 h-4" />
          Sign In
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Welcome Back</DialogTitle>
          <DialogDescription>Sign in to continue your therapy journey</DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-4 py-4">
          <Button onClick={() => handleSignIn('google')} className="gap-2" variant="outline">
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
            </svg>
            Continue with Google
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
