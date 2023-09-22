import { ArrowLeft } from "lucide-react";

import { cn } from "@/theme/utils.ts";
import { Button } from '@/components/ui/button'
import { SubscriptionDetails } from "@/features/subscription/components/subscription-details.tsx";

export function ApproveSubscriptionScreen() {

  return (
    <div className={'flex flex-1 flex-col'}>
      <div className={'flex h-24 items-center pl-8'}>
        <Button variant={'ghost'} className={'gap-2'}>
          <ArrowLeft />
          Back
        </Button>
      </div>
      <div className={'lg:flex flex-1 w-full'}>
        <div className={cn([
          'overflow-hidden isolate',
          'relative flex flex-col flex-grow p-12 lg:p-24 lg:pb-12 gap-20',
          'bg-slate-50 border border-slate-200 border-b-0 border-l-0 rounded-tr-[4em]',
          'lg:max-w-[800px] lg:h-full lg:justify-between',
        ])}>
          <div aria-hidden="true" className="-z-10 absolute opacity-25 w-[450px] h-[600px] rounded-full top-0 right-0">
            <div className="w-full h-full bg-gradient-to-br from-[#439DFE] to-[#F687FF] blur-[150px]"></div>
          </div>

          <SubscriptionDetails />
          <div className={'self-center'}>Powered by LunarPay</div>
        </div>

        <div className={'flex flex-grow lg:h-full p-16 items-center justify-center'}>
          <div className={'flex flex-col gap-2 w-full max-w-[500px]'}>
            <Button className={'w-full'}>xPortal</Button>
            <Button className={'w-full'}>Browser Extension</Button>
            <Button className={'w-full'}>Web Wallet</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
