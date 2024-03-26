import BigNumber from "bignumber.js";

import { Token } from "@/core/tokens";
import { SubscriptionAmountType, SubscriptionType } from "../enums";

export type AmountValue = string | number | BigNumber;

export type FrequencyType = 'SS' | 'MM' | 'HH' | 'D' | 'W' | 'M' | 'Y';

type BaseSubscriptionInteractionOptions = {
  token: Token;
  type: SubscriptionType;
  frequency: number;
}

type AnyAmountInteractionType = BaseSubscriptionInteractionOptions & {
  amountType: SubscriptionAmountType.AnyAmount,
  amount: never
}

type FixedAmountInteractionType = BaseSubscriptionInteractionOptions & {
  amountType: SubscriptionAmountType.FixedAmount,
  amount: string
}

type BoundedAmountInteractionType = BaseSubscriptionInteractionOptions & {
  amountType: SubscriptionAmountType.BoundedAmount,
  amount: string
}

type SenderDefinedFixedAmountInteractionType = BaseSubscriptionInteractionOptions & {
  amountType: SubscriptionAmountType.SenderDefinedFixedAmount,
  amount: string
}

type SenderDefinedBoundedAmountInteractionType = BaseSubscriptionInteractionOptions & {
  amountType: SubscriptionAmountType.SenderDefinedBoundedAmount,
  amount: string
}

type CreatorDefinedFixedAmountInteractionType = BaseSubscriptionInteractionOptions & {
  amountType: SubscriptionAmountType.SenderDefinedBoundedAmount,
  amount: string
}

type CreatorDefinedBoundedAmountInteractionType = BaseSubscriptionInteractionOptions & {
  amountType: SubscriptionAmountType.SenderDefinedBoundedAmount,
  amount: string
}

export type SubscriptionInteractionOptions = AnyAmountInteractionType |
  FixedAmountInteractionType |
  BoundedAmountInteractionType |
  SenderDefinedFixedAmountInteractionType |
  SenderDefinedBoundedAmountInteractionType |
  CreatorDefinedFixedAmountInteractionType |
  CreatorDefinedBoundedAmountInteractionType;