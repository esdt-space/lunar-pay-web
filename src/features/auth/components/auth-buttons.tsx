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
          'bg-gradient-to-r from-primary to-secondary',
          'justify-center'
        ])}
        onClick={mobileAppButtonClickHandler}
      >
        xPortal
      </Button>

      <Button
        className={cn([
          'justify-between',
          'bg-gradient-to-r from-primary to-secondary',
          'justify-center'
        ])}
        onClick={initiateExtensionLogin}
      >
        MultiversX DeFi Wallet
      </Button>

      <Button
        className={cn([
          'justify-between',
          'bg-gradient-to-r from-primary to-secondary',
          'justify-center'
        ])}
        onClick={initiateWebWalletLogin}
      >
        Web Wallet
      </Button>
    </div>
  )
}
