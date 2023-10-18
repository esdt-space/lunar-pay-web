import { AgreementAmountType, AgreementType, AgreementUserFriendlyType } from '@/features/payment-agreements/enums';

export class PaymentAgreement {
  owner: string;

  agreementIdentifier: number;

  agreementType: AgreementType;

  amountType: AgreementAmountType;

  userFriendlyType: AgreementUserFriendlyType;

  frequency: number;

  tokenNonce: number;

  tokenIdentifier: string;

  accountsCount: number;

  activeAccountsCount: number;


  name?: string;

  description?: string;

  benefits?: string[];

  content: string;

  amount?: string;

  minimumAmount?: string;

  maximumAmount?: string;

  createdAt: Date;

  constructor(params: Partial<PaymentAgreement>) {
    Object.assign(this, params);

    if(params.createdAt) {
      this.createdAt = new Date(params.createdAt);
    }
  }
}