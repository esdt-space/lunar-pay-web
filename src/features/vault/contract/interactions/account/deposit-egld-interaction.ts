import BigNumber from "bignumber.js";
import { ContractCallPayloadBuilder, ContractFunction } from '@multiversx/sdk-core/out'

import { Egld } from "@/features/tokens";
import { AppEnvironment } from '@/environment'
import { sendTransactionsHandler } from '@/lib/mvx'

export async function depositEgldInteraction(amount: number) {
  const payload = getTransactionData()

  const token = new Egld();
  const transactionValue = new BigNumber(amount).multipliedBy(Math.pow(10, token.decimals))

  const transaction = {
    value: transactionValue.toString(),
    gasLimit: 10000000,
    data: payload.toString(),
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
