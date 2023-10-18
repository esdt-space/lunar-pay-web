import BigNumber from "bignumber.js";

import { Token } from "@/features/tokens";
import {AgreementAmountType, AgreementType} from "@/contracts/lunar-pay/agreements/enums";

export type AmountValue = string | number | BigNumber;

type Amount = {
  fixedAmount: AmountValue;
  minimumAmount: AmountValue;
  maximumAmount: AmountValue;
}

type FixedAmount = Pick<Amount, 'fixedAmount'>;
type BoundedAmount = Omit<Amount, 'fixedAmount'>;

type BaseAgreementInteractionOptions = {
  token: Token;
  type: AgreementType;
  frequency: number;
}

type AnyAmountInteractionType = BaseAgreementInteractionOptions & {
  amountType: AgreementAmountType.AnyAmount,
  amount: never
}

type FixedAmountInteractionType = BaseAgreementInteractionOptions & {
  amountType: AgreementAmountType.FixedAmount,
  amount: FixedAmount
}

type BoundedAmountInteractionType = BaseAgreementInteractionOptions & {
  amountType: AgreementAmountType.BoundedAmount,
  amount: BoundedAmount
}

type SenderDefinedFixedAmountInteractionType = BaseAgreementInteractionOptions & {
  amountType: AgreementAmountType.SenderDefinedFixedAmount,
  amount: FixedAmount
}

type SenderDefinedBoundedAmountInteractionType = BaseAgreementInteractionOptions & {
  amountType: AgreementAmountType.SenderDefinedBoundedAmount,
  amount: FixedAmount
}

type CreatorDefinedFixedAmountInteractionType = BaseAgreementInteractionOptions & {
  amountType: AgreementAmountType.SenderDefinedBoundedAmount,
  amount: FixedAmount
}

type CreatorDefinedBoundedAmountInteractionType = BaseAgreementInteractionOptions & {
  amountType: AgreementAmountType.SenderDefinedBoundedAmount,
  amount: FixedAmount
}

export type AgreementInteractionOptions = AnyAmountInteractionType |
  FixedAmountInteractionType |
  BoundedAmountInteractionType |
  SenderDefinedFixedAmountInteractionType |
  SenderDefinedBoundedAmountInteractionType |
  CreatorDefinedFixedAmountInteractionType |
  CreatorDefinedBoundedAmountInteractionType;