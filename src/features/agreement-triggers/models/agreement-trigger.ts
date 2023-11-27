export class AgreementTrigger {
  _id: string;
  
  agreement: string;
  txHash: string;

  successfulChargeAmount: string;
  failedChargeAmount: string;

  createdAt: Date;

  constructor(params: Partial<AgreementTrigger>) {
    Object.assign(this, params);
  }
}