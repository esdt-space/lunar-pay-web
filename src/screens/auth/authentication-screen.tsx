import { Link } from "react-router-dom";

import { RoutesConfig } from "@/navigation";

import { AuthForm } from "@/features/auth/components";
import { useLoginRedirectLocation } from "@/features/auth";

import { AppIcon } from "@/components/shared/app-icon";

import IllustrationImage from '@/assets/media/illustration.svg?react';

export function AuthenticationScreen() {
  const redirectTo = useLoginRedirectLocation();

  return (
    <div className={'flex flex-1 h-screen'}>
      <div className={'flex-1 relative hidden isolate lg:flex max-w-lg bg-[#F5F6FA] border-r p-12'}>
        <Link to={RoutesConfig.home}>
          <AppIcon />
        </Link>

        <IllustrationImage className={"absolute inset-0 z-0 w-full h-full object-cover"} />
      </div>
      <div className={'flex flex-1 flex-col gap-16 p-16 lg:p-24 items-center justify-center'}>
        <Link to={RoutesConfig.home} className={'hidden'}>
          <AppIcon />
        </Link>

        <div className={'max-w-[500px] space-y-2'}>
          <p className='text-lg font-bold'>Connect Wallet</p>

          <AuthForm callbackRoute={redirectTo} />
        </div>
      </div>
    </div>
  )
}