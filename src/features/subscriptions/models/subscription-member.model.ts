import { SubscriptionMemberStatus, SubscriptionType } from '@/features/subscriptions/enums';

export class SubscriptionMember {
  member: string;

  internalSubscriptionId: string;

  blockchainSubscriptionId: number;

  subscriptionType: SubscriptionType;

  status: SubscriptionMemberStatus;

  lastChargedAt: Date;

  lastSuccessfulCharge: Date;

  canceledAt: Date;

  createdAt: Date;

  constructor(params: Partial<SubscriptionMember>) {
    Object.assign(this, params);

    if(params.createdAt) {
      this.createdAt = new Date(params.createdAt);
    }

    if(params.canceledAt) {
      this.canceledAt = new Date(params.canceledAt);
    }

    if(params.lastChargedAt) {
      this.lastChargedAt = new Date(params.lastChargedAt);
    }
  }
}