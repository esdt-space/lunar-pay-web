import { AppIcon } from "@/components/shared/app-icon";
import { Illustration } from "@/components/shared/illustration";
import {AuthForm} from "@/features/auth/components";
import { RoutesConfig } from "@/navigation";
import { Link } from "react-router-dom";

export function AuthenticationScreen() {
  return (
    <div className={'grid flex-1 h-screen grid-cols-1 lg:grid-cols-12'}>
      <div className={'flex-1 hidden relative lg:flex lg:col-span-5 bg-[#F5F6FA] border-r'}>
        <div className={"m-10 absolute"}>
        <Link to={RoutesConfig.home}>
          <AppIcon />
        </Link>
        </div>

        <Illustration />
      </div>
      <div className={'flex flex-1 lg:col-span-7 p-24 items-center justify-center'}>
        <div className={'flex-1 max-w-[500px]'}>
          <AuthForm callbackRoute={''} />
        </div>
      </div>
    </div>
  )
}