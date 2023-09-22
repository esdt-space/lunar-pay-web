import { Link } from "react-router-dom";

import { RoutesConfig } from "@/navigation";

import { AuthForm } from "@/features/auth/components";
import { AppIcon } from "@/components/shared/app-icon";

import {ReactComponent as IllustrationImage} from '@/assets/media/illustration.svg';

export function AuthenticationScreen() {
  return (
    <div className={'flex flex-1 h-screen'}>
      <div className={'flex-1 relative hidden isolate lg:flex max-w-lg bg-[#F5F6FA] border-r p-12'}>
        <Link to={RoutesConfig.home}>
          <AppIcon />
        </Link>

        <IllustrationImage className={"absolute inset-0 z-0 w-full h-full object-cover"} />
      </div>
      <div className={'flex flex-1 p-24 items-center justify-center'}>
        <div className={'flex-1 max-w-[500px] space-y-2'}>
          <p className='text-lg font-bold'>Connect Wallet</p>

          <AuthForm callbackRoute={''} />
        </div>
      </div>
    </div>
  )
}