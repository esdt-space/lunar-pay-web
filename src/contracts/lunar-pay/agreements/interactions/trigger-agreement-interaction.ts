import { Address } from "@multiversx/sdk-core/out";
import { sendTransactionWithWatcher } from "@/lib/mvx";
import { getAddress, getNetworkConfig } from "@multiversx/sdk-dapp/utils";

import { gasLimit, lunarPaySmartContract } from "@/contracts/lunar-pay/contract-utils.ts";

export async function triggerPaymentAgreementInteraction(agreementId: number) {
  const sender = await getAddress();
  const { chainId } = getNetworkConfig()

  const interaction = lunarPaySmartContract.methods.triggerAgreement([
    agreementId
  ]);

  const transaction = interaction
    .withChainID(chainId)
    .withSender(new Address(sender))
    .withGasLimit(gasLimit)
    .buildTransaction();

  return sendTransactionWithWatcher(transaction, {
    processingMessage: 'Executing payment agreement',
    errorMessage: 'An error has occurred',
    successMessage: 'Payment agreement executed',
  })
}
