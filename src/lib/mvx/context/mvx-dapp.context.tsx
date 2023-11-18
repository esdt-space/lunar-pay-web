import { PropsWithChildren } from 'react'
import { AxiosInterceptorContext, DappProvider } from '@multiversx/sdk-dapp/wrappers'
import { SignTransactionsModals, TransactionsToastList } from '@multiversx/sdk-dapp/UI'

import { AppEnvironment } from '@/environment'
import {
  NotificationDialog,
  ExtensionConfirmationScreen
} from "@/components/dapp/transaction-confirmation-screens";

export default function MvxDappContext(props: PropsWithChildren) {
  const { children } = props

  return (
    <DappProvider
      environment={AppEnvironment.type}
      customNetworkConfig={{
        name: 'customConfig',
        apiTimeout: AppEnvironment.mvx.apiTimeout,
        walletConnectV2ProjectId: AppEnvironment.auth.walletConnectProjectId,
      }}
      dappConfig={{
        shouldUseWebViewProvider: true,
      }}
    >
      <AxiosInterceptorContext.Listener />
      <TransactionsToastList transactionToastClassName={'transaction-toast-override'} />
      <NotificationDialog />
      <SignTransactionsModals
        CustomConfirmScreens={{
          Extension: ExtensionConfirmationScreen,
        }}
      />

      {children}
    </DappProvider>
  )
}
