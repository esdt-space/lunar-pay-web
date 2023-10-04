import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"
import { SubscriptionsService } from "@/features/subscription/subscriptions.service"
import { useEffect, useState } from "react"

export const CreateSubscriptionWidget = () => {
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [benefits, setBenefits] = useState<string[]>(["", ""])

  const handleChange = (input: string, index: number) => {
    const newBenefits = [...benefits]
    newBenefits[index] = input

    setBenefits(newBenefits)
  }

  const saveSub = () => {
    const input = {
      name: name,
      description: description,
      benefits: benefits
    }

    return SubscriptionsService.createSubscription(input)
  }

  useEffect(() => {
    SubscriptionsService.fetchSubscriptions()
  }, [])

  return <div className="space-y-4 p-8 pt-6">
    <Card>
      <CardHeader>
        Create Subscription
      </CardHeader>
      <CardContent className={'space-y-3'}>
        <Input 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          placeholder="Subscription Name"/>
        <Textarea 
          value={description} 
          onChange={(e) => setDescription(e.target.value)} 
          placeholder="Description" />
        <Separator />
        <div className="flex mb-6 w-full justify-between">
          <div>Benefits</div>
          <Button onClick={() => {
            if(benefits.length <= 8) {
              setBenefits(["", ...benefits])
            }
          }}>Add Benefit</Button>
        </div>
        {benefits.map((_item, index) => {
          return <div key={index} className="flex gap-4">   
            <Input 
              placeholder="Enter benefit text..."
              onChange={(e) => handleChange(e.target.value, index)} />
            <Button 
              className="bg-red-500 hover:bg-red-500" 
              onClick={() => setBenefits(benefits.filter((_el, elIndex) => {
                return elIndex !== index
              }))}
            >Remove</Button>
          </div>
        })}
        <div className="flex w-full">
          <Button 
            className="flex-1 bg-black hover:bg-black"
            onClick={saveSub} >Save Draft & Continue</Button>
        </div>
      </CardContent>
    </Card>
  </div>
}