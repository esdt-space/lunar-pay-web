export type UpdateSubscriptionDto = {
  ownerName: string;
  itemName: string;
  description: string;
  benefits: string[];
  content?: string;
  signSubscriptionHttpCallbackUrl?: string;
  cancelSubscriptionHttpCallbackUrl?: string;
  signSubscriptionRedirectUrl?: string;
}