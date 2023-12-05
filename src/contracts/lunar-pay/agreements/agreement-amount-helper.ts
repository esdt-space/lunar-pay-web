import BigNumber from "bignumber.js";
import {BigUIntType, BigUIntValue, EnumValue, Field, OptionValue, Struct} from "@multiversx/sdk-core/out";

import { Token } from "@/core/tokens";
import { lunarPayAbiRegistry } from "@/contracts/lunar-pay/contract-utils.ts";
import { AgreementAmountType } from "@/contracts/lunar-pay/agreements/enums";
import { AgreementInteractionOptions, AmountValue } from "@/contracts/lunar-pay/agreements/types";

const amountTypeEnum = lunarPayAbiRegistry.getEnum("AgreementAmountType");
const amountStructType = lunarPayAbiRegistry.getStruct("Amount");

function getAgreementAmountEnumVariant(type: AgreementAmountType){
  return amountTypeEnum.getVariantByName(type);
}

export function getAgreementAmountTypeInteractionValue(type: AgreementAmountType): EnumValue {
  const variant = getAgreementAmountEnumVariant(type)
  return new EnumValue(amountTypeEnum, variant, []);
}

export function getCreateAgreementAmountInteractionValue(options: AgreementInteractionOptions) {
  switch (options.amountType) {
    case AgreementAmountType.AnyAmount:
      return getAgreementAnyAmountInteractionValue();
    case AgreementAmountType.FixedAmount:
      return getAgreementFixedAmountInteractionValue(options.token, options.amount.fixedAmount);
    case AgreementAmountType.BoundedAmount:
      return getAgreementBoundedAmountInteractionValue(options.token, options.amount.minimumAmount, options.amount.maximumAmount);
  }
}

function getAgreementAnyAmountInteractionValue(): OptionValue {
  return OptionValue.newMissing();
}

function getAgreementFixedAmountInteractionValue(token: Token, amount: AmountValue): OptionValue {
  const fixedAmountBigUint = new BigNumber(amount).multipliedBy(Math.pow(10, token.decimals));

  const amountStruct = new Struct(amountStructType, [
    new Field(OptionValue.newProvided(new BigUIntValue(fixedAmountBigUint)), 'fixed_amount'),
    new Field(OptionValue.newMissingTyped(new BigUIntType()), 'minimum_amount'),
    new Field(OptionValue.newMissingTyped(new BigUIntType()), 'maximum_amount'),
  ]);

  return OptionValue.newProvided(amountStruct)
}

function getAgreementBoundedAmountInteractionValue(token: Token, minimumAmount: AmountValue, maximumAmount: AmountValue): OptionValue {
  const minimumValueBigUint = new BigNumber(minimumAmount).multipliedBy(Math.pow(10, token.decimals));
  const maximumValueBigUint = new BigNumber(maximumAmount).multipliedBy(Math.pow(10, token.decimals));

  const amountStruct = new Struct(amountStructType, [
    new Field(OptionValue.newMissingTyped(new BigUIntType()), 'fixed_amount'),
    new Field(OptionValue.newProvided(new BigUIntValue(minimumValueBigUint)), 'minimum_amount'),
    new Field(OptionValue.newProvided(new BigUIntValue(maximumValueBigUint)), 'maximum_amount'),
  ]);

  return OptionValue.newProvided(amountStruct)
}