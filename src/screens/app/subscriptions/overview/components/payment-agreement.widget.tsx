import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input";
import { EsdtToken } from "@/features/tokens";
import { EsdtTokenSelector } from "@/features/tokens/components"
import { useTokensList } from "@/features/tokens/hooks/use-tokens";
import { Wallet } from "lucide-react";
import { useState } from "react";
import { SubscriptionType, SubscriptionTypeSelector } from "../../subscription-type-selector";

export const SubscriptionPaymentAgreement = () => {
  const tokens = useTokensList();
  const [selectedToken, setSelectedToken] = useState<EsdtToken | undefined>(undefined);
  const [subscriptionType, setSubscriptionType] = useState(SubscriptionType.FixedAmount)
  
  return <div className="space-y-4 p-8 pt-6">
    <Card>
      <CardHeader>
        Payment Agreement
      </CardHeader>
      <CardContent className={'space-y-3'}>
        <EsdtTokenSelector
          tokens={tokens}
          value={selectedToken}
          onChange={(token) => setSelectedToken(token)}
        />
        <div className="flex w-full justify-between items-center border pr-2 rounded-md">
          <Input placeholder="Beneficiary Address" className="border-none" />
          <Wallet />
        </div>
        <div>
          <SubscriptionTypeSelector
            value={subscriptionType}
            onChange={setSubscriptionType} />
        </div>
        <Input 
          placeholder=""
          onChange={(e) => e.target.value} />
        <div className="flex w-full">
          <Button className="flex-1 bg-black hover:bg-black">Save Draft & Continue</Button>
        </div>
      </CardContent>
    </Card>
  </div>
}