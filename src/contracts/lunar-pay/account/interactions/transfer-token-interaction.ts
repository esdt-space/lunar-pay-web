import {
  Address,
  AddressValue,
  BigUIntValue,
  TokenIdentifierValue,
  TokenTransfer
} from '@multiversx/sdk-core/out'

import { EsdtToken } from "@/core/tokens";
import { sendTransactionWithWatcher } from '@/lib/mvx'
import { getAddress, getNetworkConfig} from "@multiversx/sdk-dapp/utils";
import { lunarPaySmartContract } from "@/contracts/lunar-pay/contract-utils.ts";

export async function transferTokenInteraction(token: EsdtToken, amount: number, receiver: string, _isInternalTransfer = false) {
  const sender = await getAddress();
  const { chainId } = getNetworkConfig()

  const tokenTransfer = TokenTransfer.fungibleFromAmount(token.identifier, amount, token.decimals);

  const args = [
    new TokenIdentifierValue(token.identifier),
    new BigUIntValue(tokenTransfer.valueOf()),
    new AddressValue(new Address(receiver)),
    // TODO: Uncomment after it's implemented on the SC
    // Add the internal transfer argument
    // new OptionalType(new BooleanType), new BooleanValue(isInternalTransfer)
  ]

  const transaction = lunarPaySmartContract.methods.transferTokens(args)
    .withValue(0)
    .withChainID(chainId)
    .withSender(new Address(sender))
    .withGasLimit(10_000_000)
    .buildTransaction()

  return sendTransactionWithWatcher(transaction, {
    processingMessage: `Transferring ${token.name} from the vault`,
    errorMessage: 'An error has occurred while transferring the token',
    successMessage: `Finished transferring ${token.name} from the vault`,
  })
}