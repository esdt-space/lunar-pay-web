import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"

export const CreateSubscriptionWidget = () => {
  const [benefits, setBenefits] = useState<string[]>([])

  return <div className="space-y-4 p-8 pt-6">
    <Card>
      <CardHeader>
        Create Subscription
      </CardHeader>
      <CardContent className={'space-y-3'}>
        <Input placeholder="Subscription Name"/>
        <Textarea placeholder="Description" />
        <Separator />
        <div className="flex mb-6 w-full justify-between">
          <div>Benefits</div>
          <Button onClick={() => setBenefits(["", ...benefits])}>Add Benefit</Button>
        </div>
        {benefits.map((item, index) => {
          return <div key={index} className="flex gap-4">   
            <Input 
              placeholder="Enter benefit text..."
              onChange={(e) => e.target.value} />
            <Button 
              className="bg-red-500 hover:bg-red-500" 
              onClick={() => setBenefits(benefits.filter((el, elIndex) => elIndex !== index))}
            >Remove</Button>
          </div>
        })}
        <div className="flex w-full">
          <Button className="flex-1 bg-black hover:bg-black">Save Draft & Continue</Button>
        </div>
      </CardContent>
    </Card>
  </div>
}