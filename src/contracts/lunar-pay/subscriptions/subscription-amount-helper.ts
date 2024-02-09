import BigNumber from "bignumber.js";
import { BigUIntValue, EnumValue,  OptionValue} from "@multiversx/sdk-core/out";

import { Token } from "@/core/tokens";
import { lunarPayAbiRegistry } from "@/contracts/lunar-pay/contract-utils.ts";
import { SubscriptionAmountType } from "@/contracts/lunar-pay/subscriptions/enums";
import { SubscriptionInteractionOptions } from "@/contracts/lunar-pay/subscriptions/types";

const amountTypeEnum = lunarPayAbiRegistry.getEnum("SubscriptionAmountType");

function getSubscriptionAmountEnumVariant(type: SubscriptionAmountType){
  return amountTypeEnum.getVariantByName(type);
}

export function getSubscriptionAmountTypeInteractionValue(type: SubscriptionAmountType): EnumValue {
  const variant = getSubscriptionAmountEnumVariant(type)
  return new EnumValue(amountTypeEnum, variant, []);
}

export function getCreateSubscriptionAmountInteractionValue(options: SubscriptionInteractionOptions) {
  switch (options.amountType) {
    case SubscriptionAmountType.FixedAmount:
      return getSubscriptionBoundedAmountInteractionValue(options.token, options.amount)
  }
}

function getSubscriptionBoundedAmountInteractionValue(token: Token, amount: string): OptionValue {
  const amountValue = new BigNumber(amount).multipliedBy(Math.pow(10, token.decimals));

  return OptionValue.newProvided(new BigUIntValue(amountValue))
}