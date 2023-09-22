import {AuthForm} from "@/features/auth/components";

export function AuthenticationScreen() {
  return (
    <div className={'grid flex-1 h-screen grid-cols-1 lg:grid-cols-12'}>
      <div className={'flex-1 hidden lg:flex lg:col-span-5 bg-[#F5F6FA] border-r'}></div>
      <div className={'flex flex-1 lg:col-span-7 p-24 items-center justify-center'}>
        <div className={'flex-1 max-w-[500px]'}>
          <AuthForm callbackRoute={''} />
        </div>
      </div>
    </div>
  )
}