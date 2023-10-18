import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { EsdtToken } from "@/features/tokens";
import { EsdtTokenSelector } from "@/features/tokens/components"
import { ChangeEvent, useState } from "react";
import { ScreenTabs } from "../agreement.screen";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {TokenValueError} from "@/features/tokens/enums";
import {getTokenErrorForValue} from "@/features/tokens/validation";
import {tokenErrorToText} from "@/features/tokens/utils";
import { useAccountTokensList } from "@/features/account-tokens/hooks";
import { FrequencyType } from "@/features/subscription/models/agreement-types.model";
import { AgreementsService } from "@/features/subscription/subscriptions.service";

type Props = {
  setSelectedTab: React.Dispatch<React.SetStateAction<ScreenTabs>>
}

const frequencyList = ["SS", "MM", "HH", "D", "W", "M", "Y"]

export const PaymentDetailsWidget = ({setSelectedTab}: Props) => {
  // const [paymentType, setPaymentType] = useState(PaymentType.FixedAmount)
  // const [address, setAddress] = useState('')
  const [selectedToken, setSelectedToken] = useState<EsdtToken | undefined>(undefined);
  const [amount, setAmount] = useState('')
  const [frequency, setFrequency] = useState<FrequencyType>('M')
  const [tokenValueError, setTokenValueError] = useState<null | TokenValueError>(null)

  const tokens = useAccountTokensList();

  const missingToken = selectedToken === undefined
  const missingAmount = amount === ""

  // TO DO: Remove saveAgreement function after SC functionality implementation
  const saveAgreement = () => {
    if ( selectedToken === undefined ) {
      return;
    }

    const input = {
      tokenIdentifier: selectedToken.identifier,
      agreementType: {
        receiver: 'owner-address',
        senders: ['sender-one', 'sender-two', 'sender-three', 'sender-four'],
        frequency: frequency,
        amountType: { amount: Number(amount) },
      }
    }

    AgreementsService.createAgreement(input).then(() => {
      setSelectedTab(ScreenTabs.AgreementDetails)
    })
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
      showBalances
    />
    <div>
      <div className="flex space-x-4">
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
          <Select onValueChange={(item: FrequencyType) => setFrequency(item)} defaultValue={frequency}>
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
