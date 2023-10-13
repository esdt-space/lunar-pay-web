import {
  Address,
  TokenTransfer
} from '@multiversx/sdk-core/out'

import { sendTransactionWithWatcher } from '@/lib/mvx'
import { getAddress, getNetworkConfig } from "@multiversx/sdk-dapp/utils";
import { lunarPaySmartContract } from "@/contracts/lunar-pay/contract-utils.ts";

export async function depositEgldInteraction(amount: number) {
  const sender = await getAddress();
  const { chainId } = getNetworkConfig()

  const transaction = lunarPaySmartContract.methods.depositEgld([])
    .withChainID(chainId)
    .withSender(new Address(sender))
    .withGasLimit(10_000_000)
    .withValue(TokenTransfer.egldFromAmount(amount))
    .buildTransaction()

  return sendTransactionWithWatcher(transaction, {
    processingMessage: 'Depositing EGLD into vault',
    errorMessage: 'An error has occurred',
    successMessage: 'Finished depositing EGLD into vault',
  })
}
