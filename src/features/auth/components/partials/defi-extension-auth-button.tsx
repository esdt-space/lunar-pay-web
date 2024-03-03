import { ChevronRight } from "lucide-react";
import { useExtensionLogin } from "@multiversx/sdk-dapp/hooks";

import { defaultAuthButtonConfig } from "@/lib/mvx";
import { Button } from "@/components/ui/button.tsx";

type Props = {
  className: string
  callbackRoute: string
}

export function DeFiExtensionAuthButton(props: Props) {
  const defaultOptions = {
    callbackRoute: props.callbackRoute,
    ...defaultAuthButtonConfig,
  };

  const [initiateExtensionLogin] = useExtensionLogin(defaultOptions)

  return (
    <Button
      className={props.className}
      onClick={initiateExtensionLogin}
    >
      MultiversX Browser Extension
      <ChevronRight />
    </Button>
  )
}
