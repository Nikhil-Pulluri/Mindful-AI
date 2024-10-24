import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select"

type Props = {
  Title : string,
  chaturl : string,
}

export default function ChatCard({Title, chaturl} : Props) {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Chat Detail</CardTitle>
        {/* <CardDescription>Deploy your new project in one-click.</CardDescription> */}
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Chat</Label>
              <Input 
              id="name"
              value={Title}
              readOnly/>
            </div>

            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">URL</Label>
              <Input 
              id="name" 
              value={chaturl}
              readOnly />
            </div>
            
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-center">
        {/* <Button variant="outline">Cancel</Button> */}
        <Button>Visit Chat</Button>
      </CardFooter>
    </Card>
  )
}
