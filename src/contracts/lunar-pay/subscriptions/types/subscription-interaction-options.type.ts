import BigNumber from "bignumber.js";

import { Token } from "@/core/tokens";
import { SubscriptionAmountType, SubscriptionType } from "../enums";

export type AmountValue = string | number | BigNumber;

type Amount = {
  fixedAmount: AmountValue;
  minimumAmount: AmountValue;
  maximumAmount: AmountValue;
}

type FixedAmount = Pick<Amount, 'fixedAmount'>;
type BoundedAmount = Omit<Amount, 'fixedAmount'>;

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
  amount: FixedAmount
}

type BoundedAmountInteractionType = BaseSubscriptionInteractionOptions & {
  amountType: SubscriptionAmountType.BoundedAmount,
  amount: BoundedAmount
}

type SenderDefinedFixedAmountInteractionType = BaseSubscriptionInteractionOptions & {
  amountType: SubscriptionAmountType.SenderDefinedFixedAmount,
  amount: FixedAmount
}

type SenderDefinedBoundedAmountInteractionType = BaseSubscriptionInteractionOptions & {
  amountType: SubscriptionAmountType.SenderDefinedBoundedAmount,
  amount: FixedAmount
}

type CreatorDefinedFixedAmountInteractionType = BaseSubscriptionInteractionOptions & {
  amountType: SubscriptionAmountType.SenderDefinedBoundedAmount,
  amount: FixedAmount
}

type CreatorDefinedBoundedAmountInteractionType = BaseSubscriptionInteractionOptions & {
  amountType: SubscriptionAmountType.SenderDefinedBoundedAmount,
  amount: FixedAmount
}

export type SubscriptionInteractionOptions = AnyAmountInteractionType |
  FixedAmountInteractionType |
  BoundedAmountInteractionType |
  SenderDefinedFixedAmountInteractionType |
  SenderDefinedBoundedAmountInteractionType |
  CreatorDefinedFixedAmountInteractionType |
  CreatorDefinedBoundedAmountInteractionType;