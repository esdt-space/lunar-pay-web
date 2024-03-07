import { useEffect, useState } from "react";
import BigNumber from "bignumber.js";
import { useParams, useSearchParams } from "react-router-dom";

import { Token } from "@/core/tokens";
import { useAccountVaultTokens } from "@/features/vault/hooks";
import { useCreatedDonation } from "@/features/donations/hooks";

import { TokenSelectorWithAmount } from "@/core/tokens/components";
import { useSingleDonationMutation } from "@/features/donations/hooks/mutations/use-single-donation-mutation";
import { DonationWidgetWrapper } from "./donation-widget-wrapper";
import { DonationAmountSelect } from "../components";
import { useEnoughAssets } from "../../../../utils/hooks";

export type PredeterminedAmount = '5' | '10' | '20' | null;

export const SingleDonationWidget = () => {
  const [amount, setAmount] = useState('');
  const [selectedToken, setSelectedToken] = useState<Token | undefined>(undefined);
  const [selectedPredeterminedAmount, setSelectedPredeterminedAmount] = useState<PredeterminedAmount>(null);
  const [searchParams] = useSearchParams();

  const { id } = useParams();

  const { data: donation } = useCreatedDonation(id);

  const receiver = searchParams.get('receiver') || '';
  const metadata = searchParams.get('metadata') || '';

  useEffect(() => {
    setAmount("");
    setSelectedToken(undefined);
  }, [])

  useEffect(() => {
    if (selectedPredeterminedAmount !== null) {
      setAmount(selectedPredeterminedAmount)
    }
  }, [selectedPredeterminedAmount])

  const { vaultTokens } = useAccountVaultTokens();
  const { mutate } = useSingleDonationMutation();
  const { enoughAssets } = useEnoughAssets(amount, selectedToken);

  if(donation === undefined) return;

  const selectPredeterminedAmount = (amount: PredeterminedAmount) => {
    if (amount === selectedPredeterminedAmount) {
      setSelectedPredeterminedAmount(null)
      return
    }

    setSelectedPredeterminedAmount(amount)
  }

  const redirect = (url: string | undefined) => {
    if(url === undefined) return;

    window.location.href = url
  }

  const donate = () => {
    const donationAmount = selectedPredeterminedAmount === null ? amount : selectedPredeterminedAmount;

    if (!selectedToken || !donationAmount) return;
    
    mutate({
      token: selectedToken,
      amount: new BigNumber(donationAmount),
      receiver: receiver,
      metadata: metadata,
    }, { onSuccess: () => redirect(donation.payDonationRedirectUrl)})
  }

  const onAmountChange = (amount: string) => {
    setAmount(amount)
    setSelectedPredeterminedAmount(null)
  }
  
  return (
    <DonationWidgetWrapper
      donationAmount={amount}
      donationCurrency={selectedToken?.identifier || ''}
      donationReceiver="Streamer"
      subtitle="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
      description={donation.description}
      donateMethod={donate}
      disableButton={selectedToken === undefined || !enoughAssets} 
    >
      <DonationAmountSelect selectedPredeterminedAmount={selectedPredeterminedAmount}  selectPredeterminedAmount={selectPredeterminedAmount}/>

      <TokenSelectorWithAmount
        token={selectedToken}
        tokens={vaultTokens}
        onTokenChange={(token) => setSelectedToken(token)}
        amount={amount}
        onAmountChange={onAmountChange}
      />
    </DonationWidgetWrapper>
  )
}
