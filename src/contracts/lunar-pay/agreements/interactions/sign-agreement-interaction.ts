import { Address, StringValue } from "@multiversx/sdk-core/out";
import { sendTransactionWithWatcher } from "@/lib/mvx";
import { getAddress, getNetworkConfig } from "@multiversx/sdk-dapp/utils";

import { lunarPaySmartContract } from "@/contracts/lunar-pay/contract-utils.ts";

export async function signPaymentAgreementInteraction (agreementId: number, metadata: string) {
  const sender = await getAddress();
  const { chainId } = getNetworkConfig()

  console.log(new StringValue(metadata))

  const interaction = lunarPaySmartContract.methods.signAgreement([
    agreementId,
    new StringValue(metadata)
  ]);

  const transaction = interaction
    .withChainID(chainId)
    .withSender(new Address(sender))
    .withGasLimit(10_000_000)
    .buildTransaction();

  return sendTransactionWithWatcher(transaction, {
    processingMessage: 'Signing payment agreement',
    errorMessage: 'An error has occurred',
    successMessage: 'Payment agreement signed',
  })
}