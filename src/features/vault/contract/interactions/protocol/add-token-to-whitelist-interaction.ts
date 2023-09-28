import { BytesValue, ContractCallPayloadBuilder, ContractFunction } from '@multiversx/sdk-core/out'

import { EsdtToken } from "@/features/tokens";
import { AppEnvironment } from '@/environment'
import { sendTransactionsHandler } from '@/lib/mvx'

export async function addTokenToWhitelistInteraction(token: EsdtToken) {
  const payload = getTransactionData(token)

  const transaction = {
    value: '0',
    gasLimit: 10000000,
    data: payload.toString(),
    receiver: AppEnvironment.contracts.lunarPay,
  }

  return sendTransactionsHandler(transaction, {
    processingMessage: `Adding ${token.name} to the whitelist`,
    errorMessage: `An error has occurred while adding ${token.name} to the whitelist`,
    successMessage: `Finished adding ${token.name} to the whitelist`,
  }).then(({ sessionId }) => sessionId)
}

const getTransactionData = (token: EsdtToken) => {
  const transactionPayload = new ContractCallPayloadBuilder()

  /** Set the function to call on the smart contract **/
  transactionPayload.setFunction(new ContractFunction('whitelistToken'))

  /** Add the ESDT token argument **/
  transactionPayload.addArg(BytesValue.fromUTF8(token.identifier))

  return transactionPayload.build()
}
