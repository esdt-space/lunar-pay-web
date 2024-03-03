import {DeFiExtensionAuthButton} from "@/features/auth/components/partials";

export function BrowserExtension() {
  return <DeFiExtensionAuthButton
    callbackRoute={''}
    className={"justify-between p-6 border-muted bg-muted/60 hover:bg-muted"}
  />
}