import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { EsdtToken } from "@/features/tokens";
import { EsdtTokenSelector } from "@/features/tokens/components"
import { ChangeEvent, useState } from "react";
import { ScreenTabs } from "../agreement.screen";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useWhitelistedVaultTokens } from "@/features/vault/hooks";
import {TokenValueError} from "@/features/tokens/enums";
import {getTokenErrorForValue} from "@/features/tokens/validation";
import {tokenErrorToText} from "@/features/tokens/utils";

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
  const [tokenValueError, setTokenValueError] = useState<null | TokenValueError>(null)

  const tokens = useWhitelistedVaultTokens();

  const missingToken = selectedToken === undefined
  const missingAmount = amount === ""

  const saveAgreement = () => {
    setSelectedTab(ScreenTabs.AgreementDetails)
  }

  const changeAmountHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if(selectedToken !== undefined) {
      setTokenValueError(getTokenErrorForValue(selectedToken, e.target.value));
    }

    setAmount(e.target.value)
  }

  const invalidAmountStyle = tokenValueError ? "border-red-500" : ""
  
  return <div className="space-y-4 pt-6">
    <EsdtTokenSelector
      tokens={tokens}
      value={selectedToken}
      onChange={(token) => setSelectedToken(token)}
    />
    <div>
      <div className="flex">
        <div className="w-9/12">
          <Input 
            placeholder="Insert amount"
            type={"number"}
            className={invalidAmountStyle}
            value={amount}
            onChange={changeAmountHandler} />

          {tokenValueError && <p className={'text-red-500 text-xs ml-2'}>{tokenErrorToText(tokenValueError)}</p>}
        </div>
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
