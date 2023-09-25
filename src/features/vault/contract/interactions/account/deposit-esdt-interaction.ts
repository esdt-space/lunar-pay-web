import BigNumber from "bignumber.js";
import { BigUIntValue, BytesValue, ContractCallPayloadBuilder, ContractFunction } from '@multiversx/sdk-core/out'

import { EsdtToken } from "@/features/tokens";
import { AppEnvironment } from '@/environment'
import { sendTransactionsHandler } from '@/lib/mvx'

export async function depositEsdtInteraction(token: EsdtToken, amount: number) {
  const payload = getTransactionData(token, amount)

  const transaction = {
    value: '0',
    gasLimit: 10000000,
    data: payload.toString(),
    receiver: AppEnvironment.contracts.lunarPay,
  }

  return sendTransactionsHandler(transaction, {
    processingMessage: `Depositing ${token.name} into vault`,
    errorMessage: 'An error has occurred',
    successMessage: `Finished depositing ${token.name} into vault`,
  }).then(({ sessionId }) => sessionId)
}

const getTransactionData = (token: EsdtToken, amount: number) => {
  const transactionPayload = new ContractCallPayloadBuilder()

  /** Set the function to call on the smart contract **/
  transactionPayload.setFunction(new ContractFunction('depositEsdt'))

  /** Add the ESDT token argument **/
  transactionPayload.addArg(BytesValue.fromUTF8(token.identifier))

  /** Add the ESDT payment value argument **/
  transactionPayload.addArg(new BigUIntValue(
    new BigNumber(amount).multipliedBy(Math.pow(10, token.decimals))
  ))

  return transactionPayload.build()
}
