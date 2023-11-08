export class TokenOperation {
  type: string;
  sender: string;
  receiver: string;

  amount: number;

  tokenNonce: number;

  tokenIdentifier: string;

  txHash: string;

  agreementName: string;

  isInternal: boolean;
  createdAt: Date;

  constructor(params: Partial<TokenOperation> = {}) {
    Object.assign(this, params)

    if(params.createdAt) this.createdAt = new Date(params.createdAt);
  }
}