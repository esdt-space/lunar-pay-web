import { PropsWithChildren } from "react";
import { Link } from "react-router-dom"

import { AppIcon } from "@/components/shared/app-icon"
import { Card } from "@/components/ui/card";

import { RoutesConfig } from "@/navigation"

import IllustrationImage from '@/assets/media/illustration.svg?react';
import { Button } from "@/components/ui/button";

type Props = {
  donationReceiver: string;
  subtitle?: string;
  description?: string;
  donateMethod: () => void;
}

export const DonationPageTemplate = (props: PropsWithChildren<Props>) => {
  const { donationReceiver, subtitle, description, donateMethod, children } = props;

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
    </div>
  )
}