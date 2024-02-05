import { EnumValue } from "@multiversx/sdk-core/out";

import { lunarPayAbiRegistry } from "@/contracts/lunar-pay/contract-utils.ts";
import { SubscriptionType } from "@/contracts/lunar-pay/subscriptions/enums";

const subscriptionTypeEnum = lunarPayAbiRegistry.getEnum("SubscriptionType");

function getSubscriptionTypeEnumVariant(type: SubscriptionType){
  return subscriptionTypeEnum.getVariantByName(type);
}

export function getSubscriptionTypeInteractionValue(type: SubscriptionType): EnumValue {
  const variant = getSubscriptionTypeEnumVariant(type)

  return new EnumValue(subscriptionTypeEnum, variant, []);
}