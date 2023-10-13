import { EnumValue } from "@multiversx/sdk-core/out";

import { AgreementFrequency } from "@/contracts/lunar-pay/agreements/enums";
import { lunarPayAbiRegistry } from "@/contracts/lunar-pay/contract-utils.ts";

const frequencyTypeEnum = lunarPayAbiRegistry.getEnum("FrequencyType");

export function getAgreementFrequencyEnumVariant(type: AgreementFrequency){
  return frequencyTypeEnum.getVariantByName(type);
}

export function getAgreementFrequencyCallValue(type: AgreementFrequency){
  const frequency = getAgreementFrequencyEnumVariant(type)

  return new EnumValue(frequencyTypeEnum, frequency, [])
}
