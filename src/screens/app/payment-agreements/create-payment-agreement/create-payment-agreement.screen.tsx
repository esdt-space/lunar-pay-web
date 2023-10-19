import { useNavigate } from "react-router-dom";
import React, { ChangeEvent, useState } from "react";

import { Button } from "@/components/ui/button.tsx";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card.tsx";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

import { RoutesConfig } from "@/navigation";
import { getPaymentFrequency } from "@/utils";
import { EsdtToken } from "@/features/tokens";
import { TokenSelectorWithAmount } from "@/features/tokens/components";
import { useWhitelistedVaultTokens } from "@/features/vault/hooks";
import { FrequencyType } from "@/features/subscription/models/agreement-types.model";
import { useCreatePaymentAgreementMutation } from "@/features/payment-agreements/hooks";
import { AgreementAmountType, AgreementType } from "@/contracts/lunar-pay/agreements/enums";

import { AgreementCallbacksPartial } from "./partials/agreement-callbacks-partial.tsx";

const frequencyList = ["Per Minute", "Per Hour", "Daily", "Weekly", "Monthly", "Per Year"]

export function CreatePaymentAgreementScreen() {
  const navigate = useNavigate();
  const [frequency, setFrequency] = useState('Monthly');
  const [selectedToken, setSelectedToken] = useState<EsdtToken | undefined>(undefined);

  const tokens = useWhitelistedVaultTokens();
  const [amount, setAmount] = useState('')

  const { mutate} = useCreatePaymentAgreementMutation();

  const missingToken = selectedToken === undefined
  const missingAmount = amount === ""

  const agreementCreatedHandler = () => {
    PaymentAgreementsService
      .fetchLatestAgreementCreatedByAccount()
      .then(agreement => {
        navigate(RoutesConfig.updatePaymentAgreement.replace(":id", agreement.id))
    });
  }

  const changeAmountHandler = (value: string) => {
    if(selectedToken !== undefined) {
      // setTokenValueError(getTokenErrorForValue(selectedToken, e.target.value));
    }

    setAmount(value)
  }

  const buttonHandler = () => {
    if(!selectedToken || !amount) return;

    mutate({
      frequency: getPaymentFrequency(frequency),
      token: selectedToken,
      type: AgreementType.RecurringPayoutToReceive,
      amountType: AgreementAmountType.FixedAmount,
      amount: { fixedAmount: amount },
    }, { onSuccess: agreementCreatedHandler})
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
            <div className={'flex gap-4'}>
              <div className={'flex-1'}>
                <TokenSelectorWithAmount
                  tokens={tokens}
                  token={selectedToken}
                  onTokenChange={setSelectedToken}
                  amount={amount}
                  onAmountChange={changeAmountHandler}
                  hasMaxButton={false}
                  showBalances={false}
                />
              </div>

              <div className={'flex-1'}>
                <Select onValueChange={(item: FrequencyType) => setFrequency(item)} defaultValue={frequency}>
                  <SelectTrigger id="frequency">
                    <SelectValue placeholder="Frequency"/>
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

            <AgreementCallbacksPartial />

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