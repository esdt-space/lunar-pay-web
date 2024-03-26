import { Plus } from "lucide-react"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { useGetAccount } from "@multiversx/sdk-dapp/hooks"

import { RoutesConfig } from "@/navigation";

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card.tsx"
import { Textarea } from "@/components/ui/textarea"
import { Separator } from "@/components/ui/separator"
import { ContainedScreen } from "@/components/prefab/contained-screen.tsx";

import { useCreatedSubscription, useUpdateSubscriptionMutation } from "@/features/subscriptions/hooks"

export function UpdateSubscriptionScreen() {
  const { address } = useGetAccount()
  const { id } = useParams()
  const navigate = useNavigate()

  const [name, setName] = useState("")
  const [itemName, setItemName] = useState("")
  const [description, setDescription] = useState("")
  const [benefits, setBenefits] = useState<string[]>([""])
  const [formInitialized, setFormInitialized] = useState(false);

  const { data: subscription } = useCreatedSubscription(id);
  const { mutate: editSubscription } = useUpdateSubscriptionMutation(id as string);

  useEffect(() => {
    if(subscription === undefined || formInitialized) return;

    setName(subscription.ownerName ?? "");
    setItemName(subscription.itemName ?? "");
    setDescription(subscription.description ?? "");
    setBenefits(subscription.benefits ?? [""]);

    setFormInitialized(true);
  }, [subscription]);

  if(!subscription) return;

  if(subscription && subscription.owner !== address) {
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

  const updateSubscriptionDetails = () => {
    const filteredBenefits = benefits.filter((item) => item !== "")

    if (!id) return
    
    const input = {
      ownerName: name,
      itemName: itemName,
      description: description,
      benefits: filteredBenefits,
    }

    editSubscription(
      { id: id, input: input },
      {
        onSuccess: () => navigate(RoutesConfig.subscriptions)
      }
    )
  }
  
  return (
    <ContainedScreen>
      <Card className={'p-6 shadow-sm space-y-4'}>
        <div className={'space-y-1'}>
          <h2 className={'font-semibold'}>Update Subscription Details</h2>
          <div className={'text-muted-foreground text-sm'}>These details will be shown when someone wants to sign this subscription</div>
        </div>

        <Input
          value={name ?? subscription.ownerName}
          placeholder="Name e.g.: MultiversX"
          onChange={(e) => setName(e.target.value)}
        />

        <Input
          value={itemName ?? subscription.itemName}
          placeholder="Product or service name"
          onChange={(e) => setItemName(e.target.value)}
        />

        <Textarea
          value={description ?? subscription.description}
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
            disabled={missingName}
            className="flex-1"
            onClick={updateSubscriptionDetails}>Save Details</Button>
        </div>
      </Card>
    </ContainedScreen>
  );
}
