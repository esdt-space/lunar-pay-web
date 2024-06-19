import { useEffect, useState } from "react";
import BigNumber from "bignumber.js";
import { useParams } from "react-router-dom";

import { Token } from "@/core/tokens";
import { useAccountVaultTokens } from "@/features/vault/hooks";
import { useCreatedDonation } from "@/features/donations/hooks";

import { TokenSelectorWithAmount } from "@/core/tokens/components";
import { useSingleVaultDonationMutation, useSingleWalletDonationMutation } from "@/features/donations/hooks/mutations";
import { DonationWidgetWrapper } from "./donation-widget-wrapper";
import { DonationAmountSelect } from "../components";
import { useEnoughAssets } from "../../../../utils/hooks";
import { useAccountTokensAvailableToDeposit } from "@/features/account-tokens/hooks";

export type PredeterminedAmount = '5' | '10' | '20' | null;

export const SingleDonationWidget = () => {
  const [amount, setAmount] = useState('');
  const [selectedToken, setSelectedToken] = useState<Token | undefined>(undefined);
  const [selectedPredeterminedAmount, setSelectedPredeterminedAmount] = useState<PredeterminedAmount>(null);

  const { id } = useParams();

  const { data: donation } = useCreatedDonation(id);

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
  const depositTokensList = useAccountTokensAvailableToDeposit();
  
  const { mutate: vaultDonationMutation } = useSingleVaultDonationMutation();
  const { mutate: walletDonationMutation } = useSingleWalletDonationMutation();

  const enoughVaultAssets = useEnoughAssets(amount, selectedToken, vaultTokens);
  const enoughWalletAssets = useEnoughAssets(amount, selectedToken, depositTokensList);

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

  const vaultDonation = () => {
    const donationAmount = selectedPredeterminedAmount === null ? amount : selectedPredeterminedAmount;

    if (!selectedToken || !donationAmount) return;
    
    vaultDonationMutation({
      token: selectedToken,
      amount: new BigNumber(donationAmount),
      receiver: donation.owner,
      donationId: donation.id
    }, { onSuccess: () => {
      if(donation.payDonationRedirectUrl === null) return

      redirect(donation.payDonationRedirectUrl)
    }})
  }

  const walletDonation = () => {
    const donationAmount = selectedPredeterminedAmount === null ? amount : selectedPredeterminedAmount;

    if (!selectedToken || !donationAmount) return;
    
    walletDonationMutation({
      token: selectedToken,
      amount: new BigNumber(donationAmount),
      receiver: donation.owner,
      donationId: donation.id
    }, { onSuccess: () => {
      if(donation.payDonationRedirectUrl === null) return

      redirect(donation.payDonationRedirectUrl)
    }})
  }

  const onAmountChange = (amount: string) => {
    setAmount(amount)
    setSelectedPredeterminedAmount(null)
  }
  
  return (
    <DonationWidgetWrapper
      donationAmount={amount}
      donationCurrency={selectedToken?.identifier || ''}
      donationReceiver={donation.beneficiaryName ?? ''}
      description={donation.description}
      vaultDonationMethod={vaultDonation}
      walletDonationMethod={walletDonation}
      disableVaultButton={selectedToken === undefined || !enoughVaultAssets} 
      disableWalletButton={selectedToken === undefined || !enoughWalletAssets} 
    >
      <DonationAmountSelect selectedPredeterminedAmount={selectedPredeterminedAmount}  selectPredeterminedAmount={selectPredeterminedAmount}/>

      <TokenSelectorWithAmount
        token={selectedToken}
        tokens={vaultTokens}
        onTokenChange={(token) => setSelectedToken(token)}
        amount={amount}
        onAmountChange={onAmountChange}
        hasMaxButton={false}
        showBalances={false}
      />
    </DonationWidgetWrapper>
  )
}
