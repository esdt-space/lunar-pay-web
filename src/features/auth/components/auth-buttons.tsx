import { ChevronRight } from "lucide-react";
import { useWebWalletLogin, useXaliasLogin } from '@multiversx/sdk-dapp/hooks'

import { cn } from "@/theme/utils.ts";
import { defaultAuthButtonConfig } from '@/lib/mvx'

import { Button } from '@/components/ui/button'
import { DeFiExtensionAuthButton } from "@/features/auth/components/partials";

type Props = {
  callbackRoute: string
  mobileAppButtonClickHandler: () => void
}

export function AuthButtons(props: Props) {
  const { mobileAppButtonClickHandler, callbackRoute } = props

  const defaultOptions = {
    callbackRoute: callbackRoute,
    ...defaultAuthButtonConfig,
  };

  const [initiateWebWalletLogin] = useWebWalletLogin(defaultOptions)
  const [initiateXAliasLogin] = useXaliasLogin(defaultOptions)

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

      <DeFiExtensionAuthButton
        className={cn([
          'justify-between',
          'bg-gradient-to-r from-primary to-secondary text-white hover:text-slate-200',
        ])}
        callbackRoute={callbackRoute}
      />

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

      <Button
        className={cn([
          'justify-between',
          'bg-gradient-to-r from-primary to-secondary text-white hover:text-slate-200'
        ])}
        onClick={initiateXAliasLogin}
      >
        xAlias
        <ChevronRight />
      </Button>
    </div>
  )
}
