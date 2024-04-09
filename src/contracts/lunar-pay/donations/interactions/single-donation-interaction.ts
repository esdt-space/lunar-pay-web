import BigNumber from "bignumber.js";

import { sendTransactionWithWatcher } from "@/lib/mvx";
import { getAddress, getNetworkConfig } from "@multiversx/sdk-dapp/utils";
import {
  Address,
  AddressValue,
  BigUIntValue,
  OptionValue,
  TokenIdentifierValue,
} from "@multiversx/sdk-core/out";

import { lunarPaySmartContract } from "@/contracts/lunar-pay/contract-utils.ts";

import { DonationInteractionOptions } from "../types";

export async function singleDonationInteraction(options: DonationInteractionOptions) {
  const sender = await getAddress();
  const { chainId } = getNetworkConfig()

  let interaction = lunarPaySmartContract.methods.donate([
    new TokenIdentifierValue(options.token.identifier),
    getAmountParameter(options.amount, options.token),
    new AddressValue(new Address(options.receiver)),
    OptionValue.newMissing(),
  ]);

  const transaction = interaction
    .withChainID(chainId)
    .withSender(new Address(sender))
    .withGasLimit(10_000_000)
    .buildTransaction();

  return sendTransactionWithWatcher(transaction, {
    processingMessage: 'Sending donation',
    errorMessage: 'An error has occurred',
    successMessage: 'Finished sending donation',
  })
}

function getAmountParameter(amount: DonationInteractionOptions['amount'], token: DonationInteractionOptions['token']) {
  return new BigUIntValue(
    new BigNumber(amount).multipliedBy(Math.pow(10, token.decimals))
  )
}
