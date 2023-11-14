import BinanceLogo from '@/assets/third-party/binance-logo.svg?react';
import { Button } from "@/components/ui/button.tsx";

export function BinancePayButton() {
  return (
    <Button disabled size={'sm'} className={'px-4 text-sm font-bold'}>
      <BinanceLogo className={'w-4 h-4 mr-2 !fill-[#F3BA2F]'} />
      <div className={'flex items-center gap-1'}>
        <div className={'text-black'}>BINANCE</div>
        <div className={'text-[#F3BA2F]'}>PAY</div>
        <div className={'text-xs font-normal opacity-60'}>(coming soon)</div>
      </div>
    </Button>
  );
}