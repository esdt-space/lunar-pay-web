import { Address,  TokenIdentifierValue } from '@multiversx/sdk-core/out'
import {getAddress, getNetworkConfig} from "@multiversx/sdk-dapp/utils";

import { sendTransactionWithWatcher } from '@/lib/mvx'
import { lunarPaySmartContract } from "@/contracts/lunar-pay/contract-utils.ts";

import { EsdtToken } from "@/features/tokens";

export async function removeTokenFromWhitelistInteraction(token: EsdtToken) {
  const sender = await getAddress();
  const { chainId } = getNetworkConfig()

  const args = [
    new TokenIdentifierValue(token.identifier),
  ];

  const transaction = lunarPaySmartContract.methods.removeWhitelistedToken(args)
    .withSender(new Address(sender))
    .withChainID(chainId)
    .withGasLimit(10_000_000)
    .buildTransaction()

  return sendTransactionWithWatcher(transaction, {
    processingMessage: `Removing ${token.name} from the whitelist`,
    errorMessage: `An error has occurred while removing ${token.name} from the whitelist`,
    successMessage: `Finished removing ${token.name} from the whitelist`,
  });
}
