import { WalletConnectLoginContainer } from '@multiversx/sdk-dapp/UI'

import { defaultWalletConnectButtonConfig } from '@/lib/mvx'

type Props = {
  logoutRoute: string
}

export function MobileConnectContent(props: Props) {
  const { logoutRoute } = props

  return (
    <WalletConnectLoginContainer
      title={''}
      logoutRoute={logoutRoute}
      wrapContentInsideModal={false}
      loginButtonText="xPortal Login"
      lead="Scan the QR code using xPortal"
      {...defaultWalletConnectButtonConfig}
    />
  )
}
