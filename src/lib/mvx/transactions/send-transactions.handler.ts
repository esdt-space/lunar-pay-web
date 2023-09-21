import { sendTransactions } from '@multiversx/sdk-dapp/services'
import type { SendTransactionsPropsType, TransactionsDisplayInfoType } from '@multiversx/sdk-dapp/types'
import { refreshAccount } from '@multiversx/sdk-dapp/utils'

export async function sendTransactionsHandler(
  transactions: SendTransactionsPropsType['transactions'],
  displayInfo: TransactionsDisplayInfoType
) {
  await refreshAccount()

  return sendTransactions({
    transactions: transactions,
    transactionsDisplayInfo: displayInfo,
    redirectAfterSign: false,
  })
}
