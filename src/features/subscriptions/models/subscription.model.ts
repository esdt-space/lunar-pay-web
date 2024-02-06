import { SubscriptionAmountType, SubscriptionType } from '@/features/subscriptions/enums';

export class Subscription {
  id: string;
  _id: string;

  owner: string;

  subscriptionIdentifier: number;

  subscriptionType: SubscriptionType;

  amountType: SubscriptionAmountType;

  frequency: number;

  tokenNonce: number;

  tokenIdentifier: string;

  accountsCount: number;

  activeAccountsCount: number;

  ownerName?: string;

  itemName?: string;

  description?: string;

  benefits?: string[];

  content: string;

  fixedAmount?: string;

  minimumAmount?: string;

  maximumAmount?: string;

  signSubscriptionHttpCallbackUrl?: string;
  
  cancelSubscriptionHttpCallbackUrl?: string;

  signSubscriptionRedirectUrl?: string;

  createdAt: Date;

  constructor(params: Partial<Subscription>) {
    Object.assign(this, params);

    if(params.createdAt) {
      this.createdAt = new Date(params.createdAt);
    }
  }
}