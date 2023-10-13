import BigNumber from "bignumber.js";
import { BigUIntValue, ContractCallPayloadBuilder, ContractFunction } from '@multiversx/sdk-core/out'

import { Egld } from "@/features/tokens";
import { AppEnvironment } from '@/environment'
import { sendTransactionsHandler } from '@/lib/mvx'

export async function withdrawEgldInteraction(amount: number) {
  const payload = getTransactionData(amount)

  const transaction = {
    value: '0',
    gasLimit: 10000000,
    data: payload.toString(),
    receiver: AppEnvironment.contracts.lunarPay,
  }

  return sendTransactionsHandler(transaction, {
    processingMessage: 'Withdrawing EGLD from the vault',
    errorMessage: 'An error has occurred',
    successMessage: 'Finished withdrawing EGLD from the vault',
  }).then(({ sessionId }) => sessionId)
}

const getTransactionData = (amount: number) => {
  const token = new Egld();

  const transactionPayload = new ContractCallPayloadBuilder()

  /** Set the function to call on the smart contract **/
  transactionPayload.setFunction(new ContractFunction('withdrawEgld'))

  /** Add the EGLD amount argument **/
  transactionPayload.addArg(new BigUIntValue(
    new BigNumber(amount).multipliedBy(Math.pow(10, token.decimals))
  ))

  return transactionPayload.build()
}
