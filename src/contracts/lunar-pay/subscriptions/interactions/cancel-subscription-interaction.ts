import { Address, OptionValue } from "@multiversx/sdk-core/out";
import { sendTransactionWithWatcher } from "@/lib/mvx";
import { getAddress, getNetworkConfig } from "@multiversx/sdk-dapp/utils";

import { lunarPaySmartContract } from "@/contracts/lunar-pay/contract-utils.ts";

export async function cancelSubscriptionInteraction(subscriptionId: number, address?: string) {
  const sender = await getAddress();
  const { chainId } = getNetworkConfig()

  const ownerAddress = address !== undefined ? address : OptionValue.newMissing()

  const interaction = lunarPaySmartContract.methods.cancelSubscriptionMembership([
    subscriptionId,
    ownerAddress,
  ]);

  const transaction = interaction
    .withChainID(chainId)
    .withSender(new Address(sender))
    .withGasLimit(10_000_000)
    .buildTransaction();

  return sendTransactionWithWatcher(transaction, {
    processingMessage: 'Canceling subscription',
    errorMessage: 'An error has occurred',
    successMessage: 'Subscription canceled',
  })
}
