import {ContractCallPayloadBuilder, ContractFunction, TokenTransfer} from '@multiversx/sdk-core/out'

import { AppEnvironment } from '@/environment'
import { sendTransactionsHandler } from '@/lib/mvx'

export async function depositEgldInteraction(amount: number) {
  const payload = getTransactionData()

  const transaction = {
    gasLimit: 10000000,
    data: payload.toString(),
    value: TokenTransfer.egldFromAmount(amount).toString(),
    receiver: AppEnvironment.contracts.lunarPay,
  }

  return sendTransactionsHandler(transaction, {
    processingMessage: 'Depositing EGLD into vault',
    errorMessage: 'An error has occurred',
    successMessage: 'Finished depositing EGLD into vault',
  }).then(({ sessionId }) => sessionId)
}

const getTransactionData = () => {
  const transactionPayload = new ContractCallPayloadBuilder()

  /** Set the function to call on the smart contract **/
  transactionPayload.setFunction(new ContractFunction('depositEgld'))

  return transactionPayload.build()
}
