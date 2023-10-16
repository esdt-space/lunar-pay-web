import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"
import { AgreementsService } from "@/features/subscription/subscriptions.service"
import { useEffect, useState } from "react"

export const AgreementDetailsWidget = () => {
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [benefits, setBenefits] = useState<string[]>([])

  useEffect(() => {
    setBenefits(["", ""])
  }, [])

  const missingName = name === ""
  const missingDescription = description === ""

  const handleChange = (input: string, index: number) => {
    const newBenefits = [...benefits]
    newBenefits[index] = input

    setBenefits(newBenefits)
  }

  const updateAgreementDetails = () => {
    const filteredBenefits = benefits.filter((item) => item !== "")

    const input = {
      name: name,
      description: description,
      benefits: filteredBenefits
    }

    // TO DO: Replace the hardcoded id with the proper id
    return AgreementsService.updateAgreement("652d1c04148139683bc35c32", input)
  }

  return <div className="space-y-4 pt-6">
    <div>
      <Input 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        placeholder="Subscription Name"/>
    </div>
    <div>
      <Textarea
        value={description} 
        onChange={(e) => setDescription(e.target.value)} 
        placeholder="Description" />
    </div>
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
        disabled={missingName || missingDescription}
        className="flex-1"
        onClick={updateAgreementDetails} >Save Details</Button>
    </div>
  </div>
}