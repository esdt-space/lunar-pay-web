import { sendTransactionWithWatcher } from "@/lib/mvx";
import { getAddress, getNetworkConfig } from "@multiversx/sdk-dapp/utils";
import {
  Address,
  AddressValue,
  OptionValue,
  TokenTransfer
} from "@multiversx/sdk-core/out";

import { lunarPaySmartContract } from "@/contracts/lunar-pay/contract-utils.ts";

import { DonationInteractionOptions } from "../types";

enum TokenTransferMethod {
  Egld = 'withValue',
  Esdt = 'withSingleESDTTransfer'
}

export async function singleWalletDonationInteraction(options: DonationInteractionOptions) {
  const sender = await getAddress();
  const { chainId } = getNetworkConfig()

  const isEgldOffer = options.token.identifier === 'EGLD';
  const tokenTransfer = TokenTransfer.fungibleFromAmount(options.token.identifier, options.amount, options.token.decimals);

  const tokenTransferMethod: TokenTransferMethod = isEgldOffer
    ? TokenTransferMethod.Egld
    : TokenTransferMethod.Esdt;

  let interaction = lunarPaySmartContract.methods.donateWithEsdtWalletBalance([
    new AddressValue(new Address(options.receiver)),
    OptionValue.newMissing(),
  ]);

  interaction = interaction[tokenTransferMethod](tokenTransfer)

  const transaction = interaction
    .withChainID(chainId)
    .withSender(new Address(sender))
    .withGasLimit(10_000_000)
    .buildTransaction();

  return sendTransactionWithWatcher(transaction, {
    processingMessage: 'Creating donation',
    errorMessage: 'An error has occurred',
    successMessage: 'Finished creating donation',
  })
}
