import {Address, AddressValue, ContractCallPayloadBuilder, ContractFunction} from '@multiversx/sdk-core/out'

import { AppEnvironment } from '@/environment'
import { sendTransactionsHandler } from '@/lib/mvx'

export async function removeAddressFromWhitelistInteraction(address: string) {
  const payload = getTransactionData(address)

  const transaction = {
    value: '0',
    gasLimit: 10000000,
    data: payload.toString(),
    receiver: AppEnvironment.contracts.lunarPay,
  }

  return sendTransactionsHandler(transaction, {
    processingMessage: `Removing address from the whitelist`,
    errorMessage: `An error has occurred while removing the address from the whitelist`,
    successMessage: `Finished removing the address from the whitelist`,
  }).then(({ sessionId }) => sessionId)
}

const getTransactionData = (address: string) => {
  const transactionPayload = new ContractCallPayloadBuilder()

  /** Set the function to call on the smart contract **/
  transactionPayload.setFunction(new ContractFunction('removeWhitelistedAddress'))

  /** Add the address argument **/
  transactionPayload.addArg(new AddressValue(new Address(address)))

  return transactionPayload.build()
}
