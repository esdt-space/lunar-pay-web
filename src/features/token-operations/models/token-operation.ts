import { Donation } from "@/features/donations/models";
import { PaymentAgreement } from "@/features/payment-agreements/models";

export class TokenOperation {
  id: string;
  parentId: string;
  
  type: string;
  sender: string;
  receiver: string;

  senderAccountsCount: number;

  amount: number;

  tokenNonce: number;

  tokenIdentifier: string;

  txHash: string;

  agreement: PaymentAgreement

  donation: Donation

  isInternal: boolean;
  createdAt: Date;

  constructor(params: Partial<TokenOperation> = {}) {
    Object.assign(this, params)

    if(params.createdAt) this.createdAt = new Date(params.createdAt);
  }
}
