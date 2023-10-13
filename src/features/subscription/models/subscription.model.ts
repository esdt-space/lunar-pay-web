import { EsdtToken } from "@/features/tokens";

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
  token: EsdtToken;
  amount: number;
  frequency: string;
}
