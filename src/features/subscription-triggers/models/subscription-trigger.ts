export class SubscriptionTrigger {
  _id: string;
  
  subscription: string;
  txHash: string;

  successfulChargeAmount: string;
  failedChargeAmount: string;

  createdAt: Date;

  constructor(params: Partial<SubscriptionTrigger>) {
    Object.assign(this, params);
  }
}