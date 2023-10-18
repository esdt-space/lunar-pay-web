import {ChangeEvent, useState} from "react";

import { Input } from "@/components/ui/input.tsx";
import { Button } from "@/components/ui/button.tsx";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card.tsx";

import { EsdtToken } from "@/features/tokens";
import { EsdtTokenSelector } from "@/features/tokens/components";
import { useWhitelistedVaultTokens } from "@/features/vault/hooks";
import { useCreatePaymentAgreementMutation } from "@/features/payment-agreements/hooks";

import {AgreementAmountType, AgreementType} from "@/contracts/lunar-pay/agreements/enums";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FrequencyType } from "@/features/subscription/models/agreement-types.model";
import { getPaymentFrequency } from "@/utils";
import { PaymentAgreementsService } from "@/features/payment-agreements/payment-agreements.service";
import { useNavigate } from "react-router-dom";
import { RoutesConfig } from "@/navigation";

const frequencyList = ["Per Minute", "Per Hour", "Daily", "Weekly", "Monthly", "Per Year"]

export function CreatePaymentAgreementScreen() {
  const [frequency, setFrequency] = useState('Monthly');
  const [selectedToken, setSelectedToken] = useState<EsdtToken | undefined>(undefined);

  const navigate = useNavigate()

  const tokens = useWhitelistedVaultTokens();
  const [amount, setAmount] = useState('')

  const { mutate} = useCreatePaymentAgreementMutation();

  const missingToken = selectedToken === undefined
  const missingAmount = amount === ""

  const changeAmountHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if(selectedToken !== undefined) {
      // setTokenValueError(getTokenErrorForValue(selectedToken, e.target.value));
    }

    setAmount(e.target.value)
  }

  const buttonHandler = () => {
    if(!selectedToken || !amount) return;

    mutate({
      frequency: getPaymentFrequency(frequency),
      token: selectedToken,
      type: AgreementType.RecurringPayoutToReceive,
      amountType: AgreementAmountType.FixedAmount,
      amount: { fixedAmount: amount },
    }, { onSuccess: () => {
      PaymentAgreementsService.fetchAgreementsCreated().then(() => {
        const currentAgreementId = "652d53d6148139683bc3612b" // get the id from the latest agreement created

        navigate(RoutesConfig.updatePaymentAgreement, { state: { currentAgreementId } })
      })
    }})
  }

  return (
    <div className={'container mx-auto sm:p-12 xl:p-16'}>
      <Card className={'shadow'}>
        <CardHeader>
          <CardTitle>
            Create Subscription
          </CardTitle>
        </CardHeader>

        <CardContent>
          <div className="space-y-4 pt-6">
            <EsdtTokenSelector
              tokens={tokens}
              value={selectedToken}
              onChange={(token) => setSelectedToken(token)}
            />

            <div>
              <div className="flex space-x-4">
                <div className="w-9/12">
                  <Input
                    type={"number"}
                    value={amount}
                    onChange={changeAmountHandler}
                    placeholder="Payment agreement value"
                  />
                  {/*{tokenValueError && <p className={'text-red-500 text-xs ml-2'}>{tokenErrorToText(tokenValueError)}</p>}*/}
                </div>
                <div className="w-3/12">
                  <Select onValueChange={(item: FrequencyType) => setFrequency(item)} defaultValue={frequency}>
                    <SelectTrigger id="framework">
                      <SelectValue placeholder="Frequency" />
                    </SelectTrigger>
                    <SelectContent position="popper">
                      {frequencyList.map((item, index) => {
                        return <div key={index}>
                            <SelectItem value={item}>{item}</SelectItem>
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
                onClick={buttonHandler}>Create Payment Agreement</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}