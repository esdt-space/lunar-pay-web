import { EnumValue } from "@multiversx/sdk-core/out";

import { lunarPayAbiRegistry } from "@/contracts/lunar-pay/contract-utils.ts";
import { AgreementType } from "@/contracts/lunar-pay/agreements/enums";

const agreementTypeEnum = lunarPayAbiRegistry.getEnum("AgreementType");

function getAgreementTypeEnumVariant(type: AgreementType){
  return agreementTypeEnum.getVariantByName(type);
}

export function getAgreementTypeInteractionValue(type: AgreementType): EnumValue {
  const variant = getAgreementTypeEnumVariant(type)

  return new EnumValue(agreementTypeEnum, variant, []);
}