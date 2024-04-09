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

type FixedAmountInteractionType = BaseSubscriptionInteractionOptions & {
  amountType: SubscriptionAmountType.FixedAmount,
  amount: string
}

type MemberDefinedAmountInteractionType = BaseSubscriptionInteractionOptions & {
  amountType: SubscriptionAmountType.MemberDefinedAmount,
  amount: string
}

type OwnerDefinedAmountPerMemberInteractionType = BaseSubscriptionInteractionOptions & {
  amountType: SubscriptionAmountType.OwnerDefinedAmountPerMember,
  amount: string
}

export type SubscriptionInteractionOptions =
  FixedAmountInteractionType |
  MemberDefinedAmountInteractionType |
  OwnerDefinedAmountPerMemberInteractionType;
  