import { Address, TokenTransfer } from '@multiversx/sdk-core/out'
import { getAddress, getNetworkConfig } from "@multiversx/sdk-dapp/utils";

import { Token } from "@/core/tokens";
import { sendTransactionWithWatcher } from '@/lib/mvx'
import { lunarPaySmartContract } from "@/contracts/lunar-pay/contract-utils.ts";

export async function depositEsdtInteraction(token: Token, amount: number) {
  const sender = await getAddress();
  const { chainId } = getNetworkConfig()

  const tokenTransfer = TokenTransfer.fungibleFromAmount(token.identifier, amount, token.decimals);

  const transaction = lunarPaySmartContract.methods.depositEsdt([])
    .withValue(0)
    .withChainID(chainId)
    .withSender(new Address(sender))
    .withGasLimit(10_000_000)
    .withSingleESDTTransfer(tokenTransfer)
    .buildTransaction()

  return sendTransactionWithWatcher(transaction, {
    processingMessage: `Depositing ${token.name} into vault`,
    errorMessage: 'An error has occurred',
    successMessage: `Finished depositing ${token.name} into vault`,
  })
}