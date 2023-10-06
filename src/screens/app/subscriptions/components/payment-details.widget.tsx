import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { EsdtToken } from "@/features/tokens";
import { EsdtTokenSelector } from "@/features/tokens/components"
import { useTokensList } from "@/features/tokens/hooks/use-tokens";
import { useState } from "react";
import { ScreenTabs } from "../agreement.screen";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { createRecurringAgreementToReceive } from "@/features/vault/contract/interactions/agreement";
import { useGetSuccessfulTransactions } from "@multiversx/sdk-dapp/hooks";

type Props = {
  setSelectedTab: React.Dispatch<React.SetStateAction<ScreenTabs>>
}

const frequencyList = ["SS", "MM", "HH", "D", "W", "M", "Y"]

export const PaymentDetailsWidget = ({setSelectedTab}: Props) => {
  // const [paymentType, setPaymentType] = useState(PaymentType.FixedAmount)
  // const [address, setAddress] = useState('')
  const [selectedToken, setSelectedToken] = useState<EsdtToken | undefined>(undefined);
  const [amount, setAmount] = useState('')
  const [frequency, setFrequency] = useState('M')

  const tokens = useTokensList();

  const currentTransaction = useGetSuccessfulTransactions()
  
  if (currentTransaction.hasSuccessfulTransactions) {
    setSelectedTab(ScreenTabs.AgreementDetails)
  }

  const missingToken = selectedToken === undefined
  const missingAmount = amount === ""

  const saveAgreement = () => {
    if (selectedToken !== undefined) {
      return createRecurringAgreementToReceive(selectedToken, Number(amount), frequency)
    }
  }
  
  return <div className="space-y-4 pt-6">
    <EsdtTokenSelector
      tokens={tokens}
      value={selectedToken}
      onChange={(token) => setSelectedToken(token)}
    />
    <div>
      <div className="flex">
        <Input 
          placeholder="Insert amount"
          type={"number"}
          className={"w-9/12"}
          value={amount}
          onChange={(e) => setAmount(e.target.value)} />
        <div className="w-3/12">
          <Select onValueChange={(item) => setFrequency(item)} defaultValue={frequency}>
            <SelectTrigger id="framework">
              <SelectValue placeholder="Frequency" />
            </SelectTrigger>
            <SelectContent position="popper">
              {frequencyList.map((item, index) => {
                return <div key={index}>
                  <SelectItem value={item}>/{item}</SelectItem>
                </div>
              })}
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
    <div className="flex w-full">
      <Button 
        disabled={missingToken || missingAmount}
        className="flex-1"
        onClick={saveAgreement}>Create Payment Agreement</Button>
    </div>
  </div>
}

{/* <div>
      <div className={cn([addressInputStyle, "flex w-full justify-between items-center border pr-2 rounded-md"])}>
        <Input 
          placeholder="Beneficiary address" 
          className={'border-none'}
          value={address}
          onChange={(e) => setAddress(e.target.value)} />
        <Wallet />
      </div>
    </div> */}
{/* <div>
  <PaymentTypeSelector
    value={paymentType}
    onChange={setPaymentType} />
</div> */}
