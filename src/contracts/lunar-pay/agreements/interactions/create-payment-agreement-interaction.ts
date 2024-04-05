import { sendTransactionWithWatcher } from "@/lib/mvx";
import { Address, TokenIdentifierValue } from "@multiversx/sdk-core/out";
import { getAddress, getNetworkConfig } from "@multiversx/sdk-dapp/utils";

import { gasLimit, lunarPaySmartContract } from "@/contracts/lunar-pay/contract-utils.ts";

import { AgreementInteractionOptions } from "../types";
import { getAgreementTypeInteractionValue } from "../agreement-type-helper.ts";
import { getAgreementAmountTypeInteractionValue, getCreateAgreementAmountInteractionValue } from "../agreement-amount-helper.ts";

export async function createPaymentAgreementInteraction (options: AgreementInteractionOptions) {
  const sender = await getAddress();
  const { chainId } = getNetworkConfig()

  const interaction = lunarPaySmartContract.methods.createPaymentAgreement([
    new TokenIdentifierValue(options.token.identifier),
    getAgreementTypeInteractionValue(options.type),
    getAgreementAmountTypeInteractionValue(options.amountType),
    options.frequency,
    getCreateAgreementAmountInteractionValue(options),
  ]);

  const transaction = interaction
    .withChainID(chainId)
    .withSender(new Address(sender))
    .withGasLimit(gasLimit)
    .buildTransaction();

  return sendTransactionWithWatcher(transaction, {
    processingMessage: 'Creating payment agreement',
    errorMessage: 'An error has occurred',
    successMessage: 'Finished creating payment agreement',
  })
}
