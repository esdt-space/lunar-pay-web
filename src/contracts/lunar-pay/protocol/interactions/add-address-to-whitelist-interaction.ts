import { Address, AddressValue } from '@multiversx/sdk-core/out'
import { getAddress, getNetworkConfig } from "@multiversx/sdk-dapp/utils";

import { sendTransactionWithWatcher } from '@/lib/mvx'
import {lunarPaySmartContract} from "@/contracts/lunar-pay/contract-utils.ts";

export async function addAddressToWhitelistInteraction(address: string) {
  const sender = await getAddress();
  const { chainId } = getNetworkConfig()

  const args = [
    new AddressValue(new Address(address)),
  ];

  const transaction = lunarPaySmartContract.methods.whitelistAddress(args)
    .withSender(new Address(sender))
    .withChainID(chainId)
    .withGasLimit(10_000_000)
    .buildTransaction()

  return sendTransactionWithWatcher(transaction, {
    processingMessage: `Adding address to the whitelist`,
    errorMessage: `An error has occurred while adding the address to the whitelist`,
    successMessage: `Finished adding the address to the whitelist`,
  });
}