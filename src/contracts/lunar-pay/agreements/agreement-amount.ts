import BigNumber from "bignumber.js";
import { BigUIntValue, EnumValue, Field } from "@multiversx/sdk-core/out";

import { Token } from "@/features/tokens";
import { lunarPayAbiRegistry } from "@/contracts/lunar-pay/contract-utils.ts";
import { AgreementAmountType } from "@/contracts/lunar-pay/agreements/enums";
import { AgreementInteractionOptions, AmountValue } from "@/contracts/lunar-pay/agreements/types";

const agreementTypeEnum = lunarPayAbiRegistry.getEnum("AgreementAmountType");

function getAgreementAmountEnumVariant(type: AgreementAmountType){
  return agreementTypeEnum.getVariantByName(type);
}

export function getAgreementAmountInteractionValue(options: AgreementInteractionOptions) {
  switch (options.amountType.type) {
    case AgreementAmountType.AnyAmount:
      return getAgreementAnyAmountInteractionValue();
    case AgreementAmountType.FixedAmount:
      return getAgreementFixedAmountInteractionValue(options.token, options.amountType.amount);
    case AgreementAmountType.BoundedAmount:
      return getAgreementBoundedAmountInteractionValue(options.token, options.amountType.minimumAmount, options.amountType.maximumAmount);
    case AgreementAmountType.SubscriberDefinedAmount:
      return getAgreementSubscriberDefinedAmountInteractionValue();
    case AgreementAmountType.CreatorDefinedAmountPerSubscriber:
      return getAgreementCreatorDefinedAmountInteractionValue();
  }
}

function getAgreementAnyAmountInteractionValue(): EnumValue {
  const variant = getAgreementAmountEnumVariant(AgreementAmountType.AnyAmount)

  return new EnumValue(agreementTypeEnum, variant, []);
}

function getAgreementFixedAmountInteractionValue(token: Token, amount: AmountValue): EnumValue {
  const variant = getAgreementAmountEnumVariant(AgreementAmountType.FixedAmount)
  const value = new BigNumber(amount).multipliedBy(Math.pow(10, token.decimals));

  return new EnumValue(agreementTypeEnum, variant, [
    new Field(new BigUIntValue(value), '0')
  ]);
}

function getAgreementBoundedAmountInteractionValue(token: Token, minimumAmount: AmountValue, maximumAmount: AmountValue): EnumValue {
  const variant = getAgreementAmountEnumVariant(AgreementAmountType.BoundedAmount)

  const minimumValueBigUint = new BigNumber(minimumAmount).multipliedBy(Math.pow(10, token.decimals));
  const maximumValueBigUint = new BigNumber(maximumAmount).multipliedBy(Math.pow(10, token.decimals));

  return new EnumValue(agreementTypeEnum, variant, [
    new Field(new BigUIntValue(minimumValueBigUint), '0'),
    new Field(new BigUIntValue(maximumValueBigUint), '1'),
  ]);
}

function getAgreementSubscriberDefinedAmountInteractionValue(): EnumValue {
  const variant = getAgreementAmountEnumVariant(AgreementAmountType.SubscriberDefinedAmount)

  return new EnumValue(agreementTypeEnum, variant, []);
}

function getAgreementCreatorDefinedAmountInteractionValue(): EnumValue {
  const variant = getAgreementAmountEnumVariant(AgreementAmountType.CreatorDefinedAmountPerSubscriber)

  return new EnumValue(agreementTypeEnum, variant, []);
}