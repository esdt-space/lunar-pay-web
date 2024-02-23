import { useEffect, useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

import { Token } from "@/core/tokens";
import { useAccountVaultTokens } from "@/features/vault/hooks";

import { RoutesConfig } from "@/navigation";
import { TokenSelectorWithAmount } from "@/core/tokens/components";
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button";
import { AppIcon } from "@/components/shared/app-icon";

import IllustrationImage from '@/assets/media/illustration.svg?react';

type DonationType = 'single' | 'monthly';
type PredeterminedAmount = '5' | '10' | '20' | null;

export const Donation = () => {
  const [amount, setAmount] = useState('');
  const [selectedToken, setSelectedToken] = useState<Token | undefined>(undefined);
  const [selectedDonationType, setSelectedDonationType] = useState<DonationType>('single')
  const [selectedPredeterminedAmount, setSelectedPredeterminedAmount] = useState<PredeterminedAmount>(null)

  useEffect(() => {
    console.log(selectedDonationType)
    console.log(selectedPredeterminedAmount)
  }, [selectedDonationType, selectedPredeterminedAmount])

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

  const donationTypeStyling = "flex justify-center items-center border rounded-md h-12 w-full cursor-pointer space-x-4"
  const donationAmountStyling = donationTypeStyling
  const singleDonationStyling = `${selectedDonationType === 'single' ? 'bg-gradient-to-r from-primary to-secondary text-white hover:text-slate-200' : ''}`
  const monthlyDonationStyling = `${selectedDonationType === 'monthly' ? 'bg-gradient-to-r from-primary to-secondary text-white hover:text-slate-200' : ''}`
  
  return (
    <div className={'flex flex-1 h-screen'}>
      <div className={'flex-1 relative hidden isolate lg:flex max-w-lg bg-[#F5F6FA] border-r p-12'}>
        <Link to={RoutesConfig.home}>
          <AppIcon />
        </Link>

        <IllustrationImage className={"absolute inset-0 z-0 w-full h-full object-cover"} />
      </div>
      <div className="flex flex-1 items-center justify-center">
        <Card className="flex flex-1 flex-col space-y-6 p-16 max-w-xl">
          <p className={'text-xl font-bold'}>Donate to Someone</p>

          <div>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </div>

          <div className="flex">
            <div 
              className={`${donationTypeStyling} ${singleDonationStyling}`}
              onClick={() => selectDonationType('single')}
            >
              <p className="text-center">Single</p>
            </div>
            <div 
              className={`${donationTypeStyling} ${monthlyDonationStyling}`}
              onClick={() => selectDonationType('monthly')}
            >
              <p className="text-center">Monthly</p>
            </div>
          </div>

          <div className="flex space-x-4">
            <div className={`${donationAmountStyling}`} onClick={() => selectPredeterminedAmount('5')}>
              <p className="text-center">5 EGLD</p>{selectedPredeterminedAmount === '5' && <CheckCircle2 />}
            </div>
            <div className={`${donationAmountStyling}`} onClick={() => selectPredeterminedAmount('10')}>
              <p className="text-center">10 EGLD</p>{selectedPredeterminedAmount === '10' && <CheckCircle2 />}
            </div>
            <div className={`${donationAmountStyling}`} onClick={() => selectPredeterminedAmount('20')}>
              <p className="text-center">20 EGLD</p>{selectedPredeterminedAmount === '20' && <CheckCircle2 />}
            </div>
          </div>

          <TokenSelectorWithAmount
            token={selectedToken}
            tokens={vaultTokens}
            onTokenChange={(token) => setSelectedToken(token)}
            amount={amount}
            onAmountChange={(amount) => setAmount(amount)}
          />

          <div>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
          </div>

          <Button className="bg-gradient-to-r from-primary to-secondary text-white hover:text-slate-200">Donate</Button>

          <div className="flex justify-center items-center w-full space-x-4"><p className={'text-medium font-bold'}>Powered by</p> <AppIcon /></div>
        </Card >
      </div>
    </div>
  )
}
