import { sendTransactionWithWatcher } from "@/lib/mvx";
import { Address, TokenIdentifierValue } from "@multiversx/sdk-core/out";
import { getAddress, getNetworkConfig } from "@multiversx/sdk-dapp/utils";

import { lunarPaySmartContract } from "@/contracts/lunar-pay/contract-utils.ts";

import { SubscriptionInteractionOptions } from "../types/index.ts";
import { getSubscriptionTypeInteractionValue } from "../subscription-type-helper.ts";
import { getSubscriptionAmountTypeInteractionValue, getCreateSubscriptionAmountInteractionValue } from "../subscription-amount-helper.ts";
import { ApiNetworkProvider } from "@multiversx/sdk-network-providers";

const apiNetworkProvider = new ApiNetworkProvider("https://devnet-api.multiversx.com");

export async function createSubscriptionInteraction (options: SubscriptionInteractionOptions) {
  const sender = await getAddress();
  const { chainId } = getNetworkConfig();

  const networkConfig = await apiNetworkProvider.getNetworkConfig();

  const interaction = lunarPaySmartContract.methods.createSubscription([
    new TokenIdentifierValue(options.token.identifier),
    options.frequency,
    getSubscriptionTypeInteractionValue(options.type),
    getSubscriptionAmountTypeInteractionValue(options.amountType),
    getCreateSubscriptionAmountInteractionValue(options),
  ]);

  const transaction = interaction
    .withChainID(chainId)
    .withSender(new Address(sender))
    .withGasLimit(10_000_000)
    .buildTransaction();

  return sendTransactionWithWatcher(transaction, {
    processingMessage: 'Creating subscription',
    errorMessage: 'An error has occurred',
    successMessage: 'Finished creating subscription',
  })
}