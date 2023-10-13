import BigNumber from "bignumber.js";
import {
  Address,
  AddressValue,
  BigUIntValue,
  BytesValue,
  ContractCallPayloadBuilder,
  ContractFunction
} from '@multiversx/sdk-core/out'

import { EsdtToken } from "@/features/tokens";
import { AppEnvironment } from '@/environment'
import { sendTransactionsHandler } from '@/lib/mvx'

export async function transferTokenInteraction(token: EsdtToken, amount: number, receiver: string, isInternalTransfer = false) {
  const payload = getTransactionData(token, amount, receiver, isInternalTransfer)

  const transaction = {
    value: '0',
    gasLimit: 10000000,
    data: payload.toString(),
    receiver: AppEnvironment.contracts.lunarPay,
  }

  return sendTransactionsHandler(transaction, {
    processingMessage: `Transferring ${token.name} from the vault`,
    errorMessage: 'An error has occurred while transferring the token',
    successMessage: `Finished transferring ${token.name} from the vault`,
  }).then(({ sessionId }) => sessionId)
}

const getTransactionData = (token: EsdtToken, amount: number, receiver: string, _isInternalTransfer: boolean) => {
  const transactionPayload = new ContractCallPayloadBuilder()

  /** Set the function to call on the smart contract **/
  transactionPayload.setFunction(new ContractFunction('transferTokens'))

  /** Add the token argument **/
  transactionPayload.addArg(BytesValue.fromUTF8(token.identifier))

  /** Add the amount argument **/
  transactionPayload.addArg(new BigUIntValue(
    new BigNumber(amount).multipliedBy(Math.pow(10, token.decimals))
  ))

  /** Add the receiver argument **/
  transactionPayload.addArg(new AddressValue(
    new Address(receiver)
  ))

  //TODO: Uncomment after it's implemented on the SC
  // /** Add the internal transfer argument **/
  // transactionPayload.addArg(new OptionalValue(
  //   new OptionalType(new BooleanType), new BooleanValue(isInternalTransfer)
  // ))

  return transactionPayload.build()
}
