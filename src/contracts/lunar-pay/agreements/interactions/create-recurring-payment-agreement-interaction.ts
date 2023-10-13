import {TokenIdentifierValue, TransactionWatcher} from "@multiversx/sdk-core/out";
import {sendTransactions} from "@multiversx/sdk-dapp/services";

import { lunarPaySmartContract } from "@/contracts/lunar-pay/contract-utils.ts";

import { AgreementInteractionOptions } from "@/contracts/lunar-pay/agreements/types";
import { getAgreementFrequencyCallValue } from "@/contracts/lunar-pay/agreements/agreement-frequency.ts";
import { getAgreementAmountInteractionValue } from "@/contracts/lunar-pay/agreements/agreement-amount.ts";
import { getAgreementWhitelistInteractionValue } from "@/contracts/lunar-pay/agreements/agreement-whitelist.ts";
import {getAccountProvider} from "@multiversx/sdk-dapp/providers";


export async function createRecurringPaymentAgreementInteraction (options: AgreementInteractionOptions) {
  console.log(lunarPaySmartContract.getEndpoint('createRecurringPaymentAgreementToSend'));
  const provider = getAccountProvider();

  const interaction = lunarPaySmartContract.methods.createRecurringPaymentAgreementToSend([
    new TokenIdentifierValue(options.token.identifier),
    getAgreementAmountInteractionValue(options),
    getAgreementFrequencyCallValue(options.frequency),
    getAgreementWhitelistInteractionValue([])
  ]);

  const transaction = interaction.buildTransaction();

  await sendTransactions({
    transactions: [transaction]
  })

  const watcher = new TransactionWatcher(provider);
  return  watcher.awaitCompleted(transaction).then(response => console.log(response));
}