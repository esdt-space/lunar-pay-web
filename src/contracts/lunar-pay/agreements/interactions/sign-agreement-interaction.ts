import { Address, OptionValue, StringValue } from "@multiversx/sdk-core/out";
import { sendTransactionWithWatcher } from "@/lib/mvx";
import { getAddress, getNetworkConfig } from "@multiversx/sdk-dapp/utils";

import { gasLimit, lunarPaySmartContract } from "@/contracts/lunar-pay/contract-utils.ts";

export async function signPaymentAgreementInteraction (agreementId: number, metadata: string) {
  const sender = await getAddress();
  const { chainId } = getNetworkConfig()

  const metadataParam = (metadata || "").length > 0 
    ? OptionValue.newProvided(new StringValue(metadata)) 
    : OptionValue.newMissing()

  const interaction = lunarPaySmartContract.methods.signAgreement([
    agreementId,
    metadataParam,
  ]);

  const transaction = interaction
    .withChainID(chainId)
    .withSender(new Address(sender))
    .withGasLimit(gasLimit)
    .buildTransaction();

  return sendTransactionWithWatcher(transaction, {
    processingMessage: 'Signing payment agreement',
    errorMessage: 'An error has occurred',
    successMessage: 'Payment agreement signed',
  })
}
