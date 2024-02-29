import { useEffect, useState } from "react";

import { Token } from "@/core/tokens";
import { useAccountVaultTokens } from "@/features/vault/hooks";

import { TokenSelectorWithAmount } from "@/core/tokens/components";
import { useSingleDonationMutation } from "@/features/donations/hooks/mutations/use-single-donation-mutation";
import BigNumber from "bignumber.js";
import { useSearchParams } from "react-router-dom";
import { DonationWidgetWrapper } from "./donation-widget-wrapper";
import { DonationAmountSelect } from "../components";

export type PredeterminedAmount = '5' | '10' | '20' | null;

export const SingleDonationWidget = () => {
  const [amount, setAmount] = useState('');
  const [selectedToken, setSelectedToken] = useState<Token | undefined>(undefined);
  const [selectedPredeterminedAmount, setSelectedPredeterminedAmount] = useState<PredeterminedAmount>(null)
  const [searchParams] = useSearchParams()

  const receiver = searchParams.get('receiver') || '';
  const metadata = searchParams.get('metadata') || '';

  useEffect(() => {
    setAmount("");
    setSelectedToken(undefined);
  }, [])

  const { vaultTokens} = useAccountVaultTokens();
  const { mutate } = useSingleDonationMutation()

  const selectPredeterminedAmount = (amount: PredeterminedAmount) => {
    if (amount === selectedPredeterminedAmount) {
      setSelectedPredeterminedAmount(null)
      return
    }

    setSelectedPredeterminedAmount(amount)
  }

  const donate = () => {
    const donationAmount = selectedPredeterminedAmount === null ? amount : selectedPredeterminedAmount;

    if (!selectedToken || !donationAmount) return;
    
    mutate({
      token: selectedToken,
      amount: new BigNumber(donationAmount),
      receiver: receiver,
      metadata: metadata,
    }, { onSuccess: () => console.log('success')})
  }
  
  return (
    <DonationWidgetWrapper 
      donationReceiver="Streamer"
      subtitle="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
      description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
      donateMethod={donate}
    >
      <DonationAmountSelect selectedPredeterminedAmount={selectedPredeterminedAmount}  selectPredeterminedAmount={selectPredeterminedAmount}/>

      <TokenSelectorWithAmount
        token={selectedToken}
        tokens={vaultTokens}
        onTokenChange={(token) => setSelectedToken(token)}
        amount={amount}
        onAmountChange={(amount) => setAmount(amount)}
      />
    </DonationWidgetWrapper>
  )
}
