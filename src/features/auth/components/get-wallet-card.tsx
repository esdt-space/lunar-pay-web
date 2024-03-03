import { ArrowUpRight } from "lucide-react";

export function GetWalletCard() {
  return (
    <div className={'bg-muted/60 p-8 rounded-lg'}>
      <h3 className={'font-semibold'}>Don’t have a wallet?</h3>
      <div className={'mb-6 text-sm text-muted-foreground'}>
        Get a wallet and start using Lunar Pay.
      </div>

      <div className={'flex flex-wrap gap-x-3 gap-y-1 text-sm'}>
        <a href={''} className={'flex gap-1 text-primary'}>Get Web Wallet <ArrowUpRight className={'size-5'}/></a>
        <a href={''} className={'flex gap-1 text-primary'}>Get Browser Extension <ArrowUpRight className={'size-5'}/></a>
      </div>
    </div>
  )
}