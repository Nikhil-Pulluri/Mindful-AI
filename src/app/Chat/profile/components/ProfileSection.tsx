import React from 'react'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'

type Props = {
  profile: {
    Name: string | undefined
    Profilepic: string | undefined
    Email: string | undefined
  }
}

export default function ProfileSection({ profile }: Props) {
  return (
    <>
      <div className="text-3xl text-center font-bold">Profile Section</div>
      <div className="w-full h-full items-center justify-center rounded-md flex flex-col gap-5">
        <div>
          <img className="h-[25vh] w-[25vh] rounded-full" src={profile.Profilepic} alt="" />
        </div>
        <div>
          <div className="flex flex-col gap-2">
            {Object.entries(profile).map(
              ([key, value]) =>
                key !== 'Profilepic' && (
                  <div key={key} className="flex items-center justify-center gap-4">
                    <div className="mt-2">
                      <Label className="font-bold" htmlFor="email">
                        {key}
                      </Label>
                    </div>
                    <div>
                      <Input id="email" type="text" readOnly value={value} className="w-[25vh]" />
                    </div>
                  </div>
                )
            )}
          </div>
        </div>

        <div>
          <Button>Edit Profile</Button>
        </div>
      </div>
    </>
  )
}
