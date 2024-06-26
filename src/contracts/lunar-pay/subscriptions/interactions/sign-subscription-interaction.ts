import { Address, OptionValue, StringValue } from "@multiversx/sdk-core/out";
import { sendTransactionWithWatcher } from "@/lib/mvx";
import { getAddress, getNetworkConfig } from "@multiversx/sdk-dapp/utils";

import { lunarPaySmartContract } from "@/contracts/lunar-pay/contract-utils.ts";

export async function signSubscriptionInteraction (subscriptionId: number, metadata: string) {
  const sender = await getAddress();
  const { chainId } = getNetworkConfig();

  const metadataParam = (metadata || "").length > 0 
    ? OptionValue.newProvided(new StringValue(metadata)) 
    : OptionValue.newMissing()

  const amount = OptionValue.newMissing();

  const interaction = lunarPaySmartContract.methods.createSubscriptionMembership([
    subscriptionId,
    amount,
    metadataParam
  ]);

  const transaction = interaction
    .withChainID(chainId)
    .withSender(new Address(sender))
    .withGasLimit(10_000_000)
    .buildTransaction();

  return sendTransactionWithWatcher(transaction, {
    processingMessage: 'Signing subscription',
    errorMessage: 'An error has occurred',
    successMessage: 'Subscription signed',
  })
}