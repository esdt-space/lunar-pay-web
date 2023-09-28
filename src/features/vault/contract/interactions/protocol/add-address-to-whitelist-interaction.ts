import {Address, AddressValue, ContractCallPayloadBuilder, ContractFunction} from '@multiversx/sdk-core/out'

import { AppEnvironment } from '@/environment'
import { sendTransactionsHandler } from '@/lib/mvx'

export async function addAddressToWhitelistInteraction(address: string) {
  const payload = getTransactionData(address)

  const transaction = {
    value: '0',
    gasLimit: 10000000,
    data: payload.toString(),
    receiver: AppEnvironment.contracts.lunarPay,
  }

  return sendTransactionsHandler(transaction, {
    processingMessage: `Adding address to the whitelist`,
    errorMessage: `An error has occurred while adding the address to the whitelist`,
    successMessage: `Finished adding the address to the whitelist`,
  }).then(({ sessionId }) => sessionId)
}

const getTransactionData = (address: string) => {
  const transactionPayload = new ContractCallPayloadBuilder()

  /** Set the function to call on the smart contract **/
  transactionPayload.setFunction(new ContractFunction('whitelistAddress'))

  /** Add the address argument **/
  transactionPayload.addArg(new AddressValue(new Address(address)))

  return transactionPayload.build()
}
