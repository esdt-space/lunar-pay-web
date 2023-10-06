import { AppEnvironment } from "@/environment";
import { EsdtToken } from "@/features/tokens";
import { sendTransactionsHandler } from "@/lib/mvx";
import { BigUIntValue, BytesValue, ContractCallPayloadBuilder, ContractFunction, StringValue } from "@multiversx/sdk-core/out";
import BigNumber from "bignumber.js";

export async function createRecurringAgreementToSend(token: EsdtToken, amount: number, frequency: string) {
  const payload = getTransactionData(token, amount, frequency)

  const transaction = {
    value: '0',
    gasLimit: 10000000,
    data: payload.toString(),
    receiver: AppEnvironment.contracts.lunarPay,
  }

  return sendTransactionsHandler(transaction, {
    processingMessage: `Creating ${token.name} recurring agreement`,
    errorMessage: 'An error has occurred while creating the agreement',
    successMessage: `Finished creating ${token.name} recurring agreement`,
  }).then(({ sessionId }) => sessionId)
}

const getTransactionData = (token: EsdtToken, amount: number, frequency: string) => {
  const transactionPayload = new ContractCallPayloadBuilder()

  /** Set the function to call on the smart contract **/
  transactionPayload.setFunction(new ContractFunction('createRecuringPaymentAgreementToSend'))

  /** Add the token argument **/
  transactionPayload.addArg(BytesValue.fromUTF8(token.identifier))

  /** Add the amount argument **/
  transactionPayload.addArg(new BigUIntValue(
    new BigNumber(amount).multipliedBy(Math.pow(10, token.decimals))
  ))

  /** Add the frequency argument **/
  transactionPayload.addArg(new StringValue(frequency))

  return transactionPayload.build()
}
