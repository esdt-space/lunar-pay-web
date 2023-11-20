import { Address, TokenIdentifierValue } from '@multiversx/sdk-core/out'
import { getAddress, getNetworkConfig } from "@multiversx/sdk-dapp/utils";

import { sendTransactionWithWatcher} from "@/lib/mvx";
import { lunarPaySmartContract } from "@/contracts/lunar-pay/contract-utils.ts";

import { Egld, EsdtToken } from "@/core/tokens";

export async function addTokenToWhitelistInteraction(token: EsdtToken | Egld) {
  const sender = await getAddress();
  const { chainId } = getNetworkConfig()

  const args = [
    new TokenIdentifierValue(token.identifier),
  ];

  const transaction = lunarPaySmartContract.methods.whitelistToken(args)
    .withSender(new Address(sender))
    .withChainID(chainId)
    .withGasLimit(10_000_000)
    .buildTransaction()

  return sendTransactionWithWatcher(transaction, {
    processingMessage: `Adding ${token.name} to the whitelist`,
    errorMessage: `An error has occurred while adding ${token.name} to the whitelist`,
    successMessage: `Finished adding ${token.name} to the whitelist`,
  });
}
