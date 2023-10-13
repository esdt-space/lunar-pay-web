import { Address, BigUIntValue, TokenTransfer } from '@multiversx/sdk-core/out'

import { sendTransactionWithWatcher } from '@/lib/mvx'
import { getAddress, getNetworkConfig } from "@multiversx/sdk-dapp/utils";
import { lunarPaySmartContract } from "@/contracts/lunar-pay/contract-utils.ts";

export async function withdrawEgldInteraction(amount: number) {
  const sender = await getAddress();
  const { chainId } = getNetworkConfig()

  const args = [
    new BigUIntValue(TokenTransfer.egldFromAmount(amount).valueOf())
  ]

  const transaction = lunarPaySmartContract.methods.withdrawEgld(args)
    .withChainID(chainId)
    .withSender(new Address(sender))
    .withGasLimit(10_000_000)
    .buildTransaction()

  return sendTransactionWithWatcher(transaction, {
    processingMessage: 'Withdrawing EGLD from the vault',
    errorMessage: 'An error has occurred',
    successMessage: 'Finished withdrawing EGLD from the vault',
  })
}
