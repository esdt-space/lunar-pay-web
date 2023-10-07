import BigNumber from "bignumber.js";

import { Token } from "@/features/tokens";
import { AgreementAmountType, AgreementFrequency, AgreementType } from "@/contracts/lunar-pay/agreements/enums";

export type AmountValue = string | number | BigNumber;

type AnyAmountInteractionType = {
  type: AgreementAmountType.AnyAmount;
};

type FixedAmountType = {
  type: AgreementAmountType.FixedAmount;
  amount: AmountValue;
}

type BoundedAmountType = {
  type: AgreementAmountType.BoundedAmount;
  minimumAmount: AmountValue;
  maximumAmount: AmountValue;
}

type SubscriberDefinedAmountType =  {
  type: AgreementAmountType.SubscriberDefinedAmount;
}

type CreatorDefinedAmountPerSubscriberType = {
  type: AgreementAmountType.CreatorDefinedAmountPerSubscriber;
}

type AmountType = AnyAmountInteractionType | FixedAmountType | BoundedAmountType | SubscriberDefinedAmountType | CreatorDefinedAmountPerSubscriberType;

export type AgreementInteractionOptions = {
  token: Token,
  type: AgreementType;
  amountType: AmountType;
  frequency: AgreementFrequency;
};
