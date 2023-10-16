import { ChevronRight } from "lucide-react";
import { useExtensionLogin, useWebWalletLogin } from '@multiversx/sdk-dapp/hooks'

import { cn } from "@/theme/utils.ts";
import { defaultAuthButtonConfig } from '@/lib/mvx'

import { Button } from '@/components/ui/button'

type Props = {
  callbackRoute: string
  mobileAppButtonClickHandler: () => void
}

export function AuthButtons(props: Props) {
  const { mobileAppButtonClickHandler, callbackRoute } = props

  const [initiateWebWalletLogin] = useWebWalletLogin({
    callbackRoute: callbackRoute,
    ...defaultAuthButtonConfig,
  })

  const [initiateExtensionLogin] = useExtensionLogin({
    callbackRoute: callbackRoute,
    ...defaultAuthButtonConfig,
  })

  return (
    <div className={'grid gap-2'}>
      <Button
        className={cn([
          'justify-between',
          'bg-gradient-to-r from-primary to-secondary text-white hover:text-slate-200'
        ])}
        onClick={mobileAppButtonClickHandler}
      >
        xPortal
        <ChevronRight />
      </Button>

      <Button
        className={cn([
          'justify-between',
          'bg-gradient-to-r from-primary to-secondary text-white hover:text-slate-200'
        ])}
        onClick={initiateExtensionLogin}
      >
        MultiversX DeFi Wallet
        <ChevronRight />
      </Button>

      <Button
        className={cn([
          'justify-between',
          'bg-gradient-to-r from-primary to-secondary text-white hover:text-slate-200'
        ])}
        onClick={initiateWebWalletLogin}
      >
        Web Wallet
        <ChevronRight />
      </Button>
    </div>
  )
}
