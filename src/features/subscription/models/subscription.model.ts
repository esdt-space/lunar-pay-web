import { AgreementType } from "./agreement-types.model";

export class SubscriptionModel {
  // id: string;
  // universalChargeCode: string;
  //
  // companyName: string;
  //
  // title: string;
  // price: string;
  // features: string[];
}

export type SubscriptionDetails = {
  name: string;
  description: string;
  benefits: string[];
}

// TO DO: Remove from usage after SC functionality implementation
export type SubscriptionCreate = {
  tokenIdentifier: string;
  agreementType: AgreementType
}
