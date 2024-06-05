import { PropsWithChildren } from "react";

import { AppIcon } from "@/components/shared/app-icon"
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type Props = {
  donationReceiver: string;
  description?: string;
  donationAmount: string;
  donationCurrency: string;
  disableVaultButton: boolean;
  disableWalletButton: boolean;
  vaultDonationMethod: () => void;
  walletDonationMethod: () => void;
}

export const DonationWidgetWrapper = (props: PropsWithChildren<Props>) => {
  const { 
    donationReceiver, 
    description, 
    donationAmount, 
    donationCurrency, 
    disableVaultButton,
    disableWalletButton, 
    vaultDonationMethod, 
    walletDonationMethod, 
    children 
  } = props;

  return (
    <div className="flex flex-1 justify-center items-center">
      <Card className="flex flex-col space-y-6 p-16 min-w-[500px] max-w-[501px]">
        <p className={'text-xl font-bold'}>Donate to {donationReceiver}</p>

        <div>
          <p>{description}</p>
        </div>

        {children}

        <div className={'flex flex-col w-full space-y-2'}>
          <Button 
            disabled={disableVaultButton} 
            onClick={vaultDonationMethod} 
            className="bg-gradient-to-r from-primary to-secondary text-white hover:text-slate-200"
          >
            Donate {donationAmount} {donationCurrency} with vault balance
          </Button>

          <Button 
            disabled={disableWalletButton} 
            onClick={walletDonationMethod} 
            className="bg-gradient-to-r from-primary to-secondary text-white hover:text-slate-200"
          >
            Donate {donationAmount} {donationCurrency} with wallet balance
          </Button>
        </div>

        <div className="flex justify-center items-center w-full space-x-4"><p className={'text-medium font-bold'}>Powered by</p> <AppIcon /></div>
      </Card>
    </div>
  )
}
