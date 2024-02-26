import { useEffect, useState } from "react";

import { Token } from "@/core/tokens";
import { useAccountVaultTokens } from "@/features/vault/hooks";

import { TokenSelectorWithAmount } from "@/core/tokens/components";
import { DonationPageTemplate } from "./template";
import { DonationAmountSelect, DonationTypeSelect } from "./components";

export type DonationType = 'single' | 'monthly';
export type PredeterminedAmount = '5' | '10' | '20' | null;

export const Donation = () => {
  const [amount, setAmount] = useState('');
  const [selectedToken, setSelectedToken] = useState<Token | undefined>(undefined);
  const [selectedDonationType, setSelectedDonationType] = useState<DonationType>('single')
  const [selectedPredeterminedAmount, setSelectedPredeterminedAmount] = useState<PredeterminedAmount>(null)

  useEffect(() => {
    setAmount("");
    setSelectedToken(undefined);
  }, [])

  const { vaultTokens} = useAccountVaultTokens();

  const selectDonationType = (donation: DonationType) => {
    setSelectedDonationType(donation)
  }

  const selectPredeterminedAmount = (amount: PredeterminedAmount) => {
    if (amount === selectedPredeterminedAmount) {
      setSelectedPredeterminedAmount(null)
      return
    }

    setSelectedPredeterminedAmount(amount)
  }
  
  return (
    <DonationPageTemplate 
      donationReceiver="Streamer"
      subtitle="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
      description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
      donateMethod={() => {}}
    >
      <DonationTypeSelect selectedDonationType={selectedDonationType} selectDonationType={selectDonationType} />

      <DonationAmountSelect selectedPredeterminedAmount={selectedPredeterminedAmount}  selectPredeterminedAmount={selectPredeterminedAmount}/>

      <TokenSelectorWithAmount
        token={selectedToken}
        tokens={vaultTokens}
        onTokenChange={(token) => setSelectedToken(token)}
        amount={amount}
        onAmountChange={(amount) => setAmount(amount)}
      />
    </DonationPageTemplate>
  )
}
