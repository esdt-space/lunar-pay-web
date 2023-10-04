import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { EsdtToken } from "@/features/tokens";
import { EsdtTokenSelector } from "@/features/tokens/components"
import { useTokensList } from "@/features/tokens/hooks/use-tokens";
import { Wallet } from "lucide-react";
import { useState } from "react";
import { PaymentType, PaymentTypeSelector } from "./payment-type-selector";

export const PaymentDetailsWidget = () => {
  const tokens = useTokensList();
  const [selectedToken, setSelectedToken] = useState<EsdtToken | undefined>(undefined);
  const [paymentType, setPaymentType] = useState(PaymentType.FixedAmount)
  
  return <div className="space-y-4 pt-6">
    <div className="flex w-full justify-between items-center border pr-2 rounded-md">
      <Input placeholder="Beneficiary Address" className="border-none" />
      <Wallet />
    </div>
    <EsdtTokenSelector
      tokens={tokens}
      value={selectedToken}
      onChange={(token) => setSelectedToken(token)}
    />
    <div>
      <PaymentTypeSelector
        value={paymentType}
        onChange={setPaymentType} />
    </div>
    <Input 
      placeholder=""
      onChange={(e) => e.target.value} />
    <div className="flex w-full">
      <Button className="flex-1 bg-black hover:bg-black">Create Payment Agreement</Button>
    </div>
  </div>
}