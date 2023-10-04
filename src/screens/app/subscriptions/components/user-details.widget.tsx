import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"
import { SubscriptionsService } from "@/features/subscription/subscriptions.service"
import { useEffect, useState } from "react"
import { ScreenTabs } from "../subscription.screen"

type Props = {
  setSelectedTab: React.Dispatch<React.SetStateAction<ScreenTabs>>
}

export const UserDetailsWidget = ({setSelectedTab}: Props) => {
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [benefits, setBenefits] = useState<string[]>(["", ""])
  const [isMandatoryField, setIsMandatoryField] = useState(false)

  const missingName = isMandatoryField && name === ""
  const missingDescription = isMandatoryField && description === ""
  
  const inputStyle = missingName ? "border-red-500" : ""
  const textAreaStyle = missingDescription ? "border-red-500" : ""

  const handleChange = (input: string, index: number) => {
    const newBenefits = [...benefits]
    newBenefits[index] = input

    setBenefits(newBenefits)
  }

  const saveDetails = () => {
    const filteredBenefits = benefits.filter((item) => item !== "")

    const input = {
      name: name,
      description: description,
      benefits: filteredBenefits
    }

    if (name === "" || description === "") {
      return setIsMandatoryField(true)
    }

    setSelectedTab(ScreenTabs.PaymentDetails)

    return SubscriptionsService.createSubscription(input)
  }

  useEffect(() => {
    SubscriptionsService.fetchSubscriptions()
  }, [])

  return <div className="space-y-4 pt-6">
    <div>
      <Input 
        className={inputStyle}
        value={name} 
        onChange={(e) => {
          setIsMandatoryField(false)
          setName(e.target.value)
        }} 
        placeholder="Subscription Name"/>
      {missingName && <p className='text-red-500 text-xs ml-2'>Mandatory Field</p>}
    </div>
    <div>
      <Textarea
        className={textAreaStyle}
        value={description} 
        onChange={(e) => {
          setIsMandatoryField(false)
          setDescription(e.target.value)
        }} 
        placeholder="Description" />
      {missingDescription && <p className="text-red-500 text-xs ml-2">Mandatory Field</p>}
    </div>
    <Separator />
    <div className="flex mb-6 w-full justify-between">
      <div>Benefits</div>
      <Button className="bg-black hover:bg-black" onClick={() => {
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
        onClick={saveDetails} >Save Draft & Continue</Button>
    </div>
  </div>
}