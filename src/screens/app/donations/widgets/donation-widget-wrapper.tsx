import { PropsWithChildren } from "react";

import { AppIcon } from "@/components/shared/app-icon"
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type Props = {
  donationReceiver: string;
  subtitle?: string;
  description?: string;
  donateMethod: () => void;
}

export const DonationWidgetWrapper = (props: PropsWithChildren<Props>) => {
  const { donationReceiver, subtitle, description, donateMethod, children } = props;

  return (
    <div className="flex flex-1 justify-center items-center">
      <Card className="flex flex-col space-y-6 p-16 min-w-[500px] max-w-[501]px">
        <p className={'text-xl font-bold'}>Donate to {donationReceiver}</p>

        <div>
          <p>{subtitle}</p>
        </div>

        {children}

        <div>
          <p>{description}</p>
        </div>

        <Button onClick={donateMethod} className="bg-gradient-to-r from-primary to-secondary text-white hover:text-slate-200">Donate</Button>

        <div className="flex justify-center items-center w-full space-x-4"><p className={'text-medium font-bold'}>Powered by</p> <AppIcon /></div>
      </Card>
    </div>
  )
}
