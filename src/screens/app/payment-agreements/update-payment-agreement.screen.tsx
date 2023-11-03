import { Plus } from "lucide-react"
import { useEffect, useState } from "react"
import { useLocation, useNavigate, useParams } from "react-router-dom"
import { useGetAccount } from "@multiversx/sdk-dapp/hooks"

import { RoutesConfig } from "@/navigation";

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card.tsx"
import { Textarea } from "@/components/ui/textarea"
import { Separator } from "@/components/ui/separator"

import { useCreatedPaymentAgreement, useUpdatePaymentAgreementMutation } from "@/features/payment-agreements/hooks"
import { PaymentAgreementsService } from "@/features/payment-agreements/payment-agreements.service"
import { AgreementRedirectPartial } from "./create-payment-agreement/partials/agreement-redirect-partial";

export function UpdatePaymentAgreementScreen() {
  const { address } = useGetAccount()
  const { id } = useParams()
  const navigate = useNavigate()
  const location = useLocation()

  const [name, setName] = useState("")
  const [itemName, setItemName] = useState("")
  const [description, setDescription] = useState("")
  const [benefits, setBenefits] = useState<string[]>([""])
  const [formInitialized, setFormInitialized] = useState(false);
  const [newMemberRedirectUrl, setNewMemberRedirectUrl] = useState("")

  const { data: agreement } = useCreatedPaymentAgreement(id);

  useEffect(() => {
    if(agreement === undefined || formInitialized) return;

    setName(agreement.ownerName ?? "");
    setItemName(agreement.itemName ?? "");
    setDescription(agreement.description ?? "");
    setBenefits(agreement.benefits ?? [""]);

    setFormInitialized(true);
  }, [agreement]);

  if(!agreement) return;

  if(agreement && agreement.owner !== address) {
    navigate(RoutesConfig.dashboard, { replace: true });
  }

  const missingName = name === ""

  const handleChange = (input: string, index: number) => {
    const newBenefits = [...benefits]
    newBenefits[index] = input

    setBenefits(newBenefits)
  }

  const removeBenefitAtIndex = (index: number) => {
    setBenefits(benefits =>
      benefits.filter((_, _index) => _index !== index)
    );
  }

  const { mutate } = useUpdatePaymentAgreementMutation();

  const agreementUpdatedHandler = () => {
    PaymentAgreementsService
      .fetchAgreementsCreated()
      .then(() => {
        navigate(RoutesConfig.paymentAgreements)
    });
  }

  const updateAgreementDetails = () => {
    const filteredBenefits = benefits.filter((item) => item !== "")

    if (!id) return
    
    const input = {
      ownerName: name,
      itemName: itemName,
      description: description,
      benefits: filteredBenefits,
      signAgreementHttpCallbackUrl: location.state.signAgreementHttpCallbackUrl,
      cancelAgreementHttpCallbackUrl: location.state.cancelAgreementHttpCallbackUrl,
      newMemberRedirectUrl: newMemberRedirectUrl,
    }
    
    mutate({
      id: id,
      input: input
    }, { onSuccess: agreementUpdatedHandler})
  }
  
  return (
    <div className="container mx-auto sm:p-12 xl:p-16">
      <Card className={'p-6 shadow-sm space-y-4'}>
        <div className={'space-y-1'}>
          <h2 className={'font-semibold'}>Update Agreement Details</h2>
          <div className={'text-muted-foreground text-sm'}>These details will be shown when someone wants to sign this agreement</div>
        </div>

        <Input
          value={name ?? agreement.ownerName}
          placeholder="Name e.g.: MultiversX"
          onChange={(e) => setName(e.target.value)}
        />

        <Input
          value={itemName ?? agreement.itemName}
          placeholder="Product or service name"
          onChange={(e) => setItemName(e.target.value)}
        />

        <Textarea
          value={description ?? agreement.description}
          placeholder="Description"
          onChange={(e) => setDescription(e.target.value)}
        />

        <AgreementRedirectPartial 
          newMemberRedirectUrl={newMemberRedirectUrl}
          onNewMemberRedirectUrlChange={setNewMemberRedirectUrl}
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
            disabled={missingName}
            className="flex-1"
            onClick={updateAgreementDetails}>Save Details</Button>
        </div>
      </Card>
    </div>
  );
}
