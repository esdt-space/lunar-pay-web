import {
  Address,
  BigUIntValue,
  TokenIdentifierValue,
  TokenTransfer
} from '@multiversx/sdk-core/out'

import { EsdtToken } from "@/core/tokens";
import { sendTransactionWithWatcher } from '@/lib/mvx'
import { getAddress, getNetworkConfig } from "@multiversx/sdk-dapp/utils";
import { lunarPaySmartContract } from "@/contracts/lunar-pay/contract-utils.ts";

export async function withdrawEsdtInteraction(token: EsdtToken, amount: number) {
  const sender = await getAddress();
  const { chainId } = getNetworkConfig()

  const tokenTransfer = TokenTransfer.fungibleFromAmount(token.identifier, amount, token.decimals);

  const args = [
    new TokenIdentifierValue(token.identifier),
    new BigUIntValue(tokenTransfer.valueOf())
  ]

  const transaction = lunarPaySmartContract.methods.withdrawEsdt(args)
    .withValue(0)
    .withChainID(chainId)
    .withSender(new Address(sender))
    .withGasLimit(10_000_000)
    .buildTransaction()

  return sendTransactionWithWatcher(transaction, {
    processingMessage: `Withdrawing ${token.name} from the vault`,
    errorMessage: 'An error has occurred',
    successMessage: `Finished withdrawing ${token.name} into vault`,
  })
}