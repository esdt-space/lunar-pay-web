import { PropsWithChildren } from 'react'
import { NotificationModal, SignTransactionsModals, TransactionsToastList } from '@multiversx/sdk-dapp/UI'
import { AxiosInterceptorContext, DappProvider } from '@multiversx/sdk-dapp/wrappers'

import { AppEnvironment } from '@/environment'

export default function MvxDappContext(props: PropsWithChildren) {
  const { children } = props

  return (
    <DappProvider
      environment={AppEnvironment.type}
      customNetworkConfig={{
        name: 'customConfig',
        apiTimeout: AppEnvironment.mvx.apiTimeout,
        walletConnectV2ProjectId: AppEnvironment.walletConnect.projectId,
      }}
      dappConfig={{
        shouldUseWebViewProvider: true,
      }}
    >
      <AxiosInterceptorContext.Listener />
      <TransactionsToastList />
      <NotificationModal />
      <SignTransactionsModals className="custom-class-for-modals" />

      {children}
    </DappProvider>
  )
}
