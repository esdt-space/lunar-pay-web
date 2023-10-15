import { sendTransactions } from '@multiversx/sdk-dapp/services'
import { Transaction, TransactionWatcher } from "@multiversx/sdk-core/out";
import { ApiNetworkProvider } from "@multiversx/sdk-network-providers/out";
import { getNetworkConfig, refreshAccount } from '@multiversx/sdk-dapp/utils'
import type { SendTransactionsPropsType, TransactionsDisplayInfoType } from '@multiversx/sdk-dapp/types'

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

export async function sendTransactionWithWatcher(
  transaction: Transaction,
  displayInfo: TransactionsDisplayInfoType
) {
  await refreshAccount()

  const { sessionId } = await sendTransactions({
    transactions: transaction,
    transactionsDisplayInfo: displayInfo,
    redirectAfterSign: false
  });

  return sessionId;
}