import {useEffect, useState} from "react"
import { Plus } from "lucide-react"
import { useNavigate, useParams } from "react-router-dom"
import { useGetAccount } from "@multiversx/sdk-dapp/hooks"

import { RoutesConfig } from "@/navigation";

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card.tsx"
import { Textarea } from "@/components/ui/textarea"
import { Separator } from "@/components/ui/separator"

import { useCreatedPaymentAgreement } from "@/features/payment-agreements/hooks"
import { PaymentAgreementsService } from "@/features/payment-agreements/payment-agreements.service"

export function UpdatePaymentAgreementScreen() {
  const { address } = useGetAccount()
  const { id } = useParams()
  const navigate = useNavigate()

  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [benefits, setBenefits] = useState<string[]>([])
  const [formInitialized, setFormInitialized] = useState(false);

  const { data: agreement } = useCreatedPaymentAgreement(id);

  useEffect(() => {
    if(agreement === undefined || formInitialized) return;

    setName(agreement.name);
    setDescription(agreement.description);
    setBenefits(agreement.benefits);

    setFormInitialized(true);
  }, [agreement]);

  if(!agreement) return;

  if(agreement && agreement.owner !== address) {
    navigate(RoutesConfig.dashboard, { replace: true });
  }

  const missingName = name === ""
  const missingDescription = description === ""

  const handleChange = (input: string, index: number) => {
    const newBenefits = [...benefits]
    newBenefits[index] = input

    setBenefits(newBenefits)
  }

  const removeBenefitAtIndex = (index: number) => {
    setBenefits(benefits =>
      benefits.filter((item, _index) => _index !== index)
    );
  }

  const updateAgreementDetails = () => {
    const filteredBenefits = benefits.filter((item) => item !== "")

    const input = {
      name: name,
      description: description,
      benefits: filteredBenefits
    }

    if(id !== undefined) {
      return PaymentAgreementsService.updateAgreement(id, input)
    }
  }
  
  return (
    <div className="container mx-auto sm:p-12 xl:p-16">
      <Card className={'p-6 shadow-sm space-y-4'}>
        <Input
          value={name ?? agreement.name}
          placeholder="Agreement name"
          onChange={(e) => setName(e.target.value)}
        />

        <Textarea
          value={description ?? agreement.description}
          placeholder="Description"
          onChange={(e) => setDescription(e.target.value)}
        />

        <Separator />

        <div className="flex mb-6 w-full justify-between">
          <div>Benefits</div>
          <Button
            disabled={benefits.length >= 6}
            onClick={() => setBenefits([...benefits, ""])}
          >
            Add Benefit
            <Plus className={'ml-2 w-4 h-4'} />
          </Button>
        </div>

        {benefits.map((item, index) => (
          <div key={index} className="flex gap-4">
            <Input
              value={item}
              placeholder="Enter benefit text..."
              onChange={(e) => handleChange(e.target.value, index)}
            />

            <Button
              variant={'destructive'}
              onClick={() => removeBenefitAtIndex(index)}
            >Remove</Button>
          </div>
        ))}

        <div className="flex w-full">
          <Button
            disabled={missingName || missingDescription}
            className="flex-1"
            onClick={updateAgreementDetails}>Save Details</Button>
        </div>
      </Card>
    </div>
  );
}
