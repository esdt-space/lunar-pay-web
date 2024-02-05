import BigNumber from "bignumber.js";
import {BigUIntType, BigUIntValue, EnumValue, Field, OptionValue, Struct} from "@multiversx/sdk-core/out";

import { Token } from "@/core/tokens";
import { lunarPayAbiRegistry } from "@/contracts/lunar-pay/contract-utils.ts";
import { SubscriptionAmountType } from "@/contracts/lunar-pay/subscriptions/enums";
import { SubscriptionInteractionOptions, AmountValue } from "@/contracts/lunar-pay/subscriptions/types";

const amountTypeEnum = lunarPayAbiRegistry.getEnum("SubscriptionAmountType");
const amountStructType = lunarPayAbiRegistry.getStruct("Amount");

function getSubscriptionAmountEnumVariant(type: SubscriptionAmountType){
  return amountTypeEnum.getVariantByName(type);
}

export function getSubscriptionAmountTypeInteractionValue(type: SubscriptionAmountType): EnumValue {
  const variant = getSubscriptionAmountEnumVariant(type)
  return new EnumValue(amountTypeEnum, variant, []);
}

export function getCreateSubscriptionAmountInteractionValue(options: SubscriptionInteractionOptions) {
  switch (options.amountType) {
    case SubscriptionAmountType.AnyAmount:
      return getSubscriptionAnyAmountInteractionValue();
    case SubscriptionAmountType.FixedAmount:
      return OptionValue.newProvided(new BigUIntValue(options.amount)) 
    case SubscriptionAmountType.BoundedAmount:
      return getSubscriptionBoundedAmountInteractionValue(options.token, options.amount, options.amount);
  }
}

function getSubscriptionAnyAmountInteractionValue(): OptionValue {
  return OptionValue.newMissing();
}

function getSubscriptionBoundedAmountInteractionValue(token: Token, minimumAmount: AmountValue, maximumAmount: AmountValue): OptionValue {
  const minimumValueBigUint = new BigNumber(minimumAmount).multipliedBy(Math.pow(10, token.decimals));
  const maximumValueBigUint = new BigNumber(maximumAmount).multipliedBy(Math.pow(10, token.decimals));

  const amountStruct = new Struct(amountStructType, [
    new Field(OptionValue.newMissingTyped(new BigUIntType()), 'fixed_amount'),
    new Field(OptionValue.newProvided(new BigUIntValue(minimumValueBigUint)), 'minimum_amount'),
    new Field(OptionValue.newProvided(new BigUIntValue(maximumValueBigUint)), 'maximum_amount'),
  ]);

  return OptionValue.newProvided(amountStruct)
}