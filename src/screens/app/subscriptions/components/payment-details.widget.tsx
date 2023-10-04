import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { EsdtToken } from "@/features/tokens";
import { EsdtTokenSelector } from "@/features/tokens/components"
import { useTokensList } from "@/features/tokens/hooks/use-tokens";
import { Wallet } from "lucide-react";
import { useState } from "react";
import { PaymentType, PaymentTypeSelector } from "./payment-type-selector";
import { cn } from "@/theme/utils";

export const PaymentDetailsWidget = () => {
  const [selectedToken, setSelectedToken] = useState<EsdtToken | undefined>(undefined);
  const [paymentType, setPaymentType] = useState(PaymentType.FixedAmount)
  const [address, setAddress] = useState('')
  const [amount, setAmount] = useState('')
  const [isMandatoryField, setIsMandatoryField] = useState(false)

  const tokens = useTokensList();

  const missingAddress = isMandatoryField && address === ""
  const missingAmount = isMandatoryField && amount === ""

  const addressInputStyle = missingAddress ? "border-red-500" : ""
  const amountInputStyle = missingAmount ? "border-red-500" : ""

  const saveAgreement = () => {
    if (address === "" || amount === "") {
      return setIsMandatoryField(true)
    }

    return
  }
  
  return <div className="space-y-4 pt-6">
    <div>
      <div className={cn([addressInputStyle, "flex w-full justify-between items-center border pr-2 rounded-md"])}>
        <Input 
          placeholder="Beneficiary address" 
          className={'border-none'}
          value={address}
          onChange={(e) => {
            setAddress(e.target.value)
            setIsMandatoryField(false)
          }} />
        <Wallet />
      </div>
      {missingAddress && <p className='text-red-500 text-xs ml-2'>Mandatory Field</p>}
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
    <div>
      <Input 
        placeholder="Insert amount"
        className={amountInputStyle}
        value={amount}
        onChange={(e) => {
          setAmount(e.target.value)
          setIsMandatoryField(false)
        }} />
      {missingAmount && <p className='text-red-500 text-xs ml-2'>Mandatory Field</p>}
    </div>
    <div className="flex w-full">
      <Button 
        className="flex-1"
        onClick={saveAgreement}>Create Payment Agreement</Button>
    </div>
  </div>
}