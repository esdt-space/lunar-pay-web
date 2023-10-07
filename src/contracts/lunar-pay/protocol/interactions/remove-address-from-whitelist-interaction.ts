import { Address, AddressValue } from '@multiversx/sdk-core/out'
import { getAddress, getNetworkConfig } from "@multiversx/sdk-dapp/utils";

import { sendTransactionWithWatcher} from '@/lib/mvx'
import { lunarPaySmartContract } from "@/contracts/lunar-pay/contract-utils.ts";

export async function removeAddressFromWhitelistInteraction(address: string) {
  const sender = await getAddress();
  const { chainId } = getNetworkConfig()

  const args = [
    new AddressValue(new Address(address)),
  ];

  const transaction = lunarPaySmartContract.methods.removeWhitelistedAddress(args)
    .withSender(new Address(sender))
    .withChainID(chainId)
    .withGasLimit(10_000_000)
    .buildTransaction()

  return sendTransactionWithWatcher(transaction, {
    processingMessage: `Removing address from the whitelist`,
    errorMessage: `An error has occurred while removing the address from the whitelist`,
    successMessage: `Finished removing the address from the whitelist`,
  });
}