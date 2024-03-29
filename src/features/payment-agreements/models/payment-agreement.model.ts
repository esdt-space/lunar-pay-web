import { AgreementAmountType, AgreementType, AgreementUserFriendlyType } from '@/features/payment-agreements/enums';

export class PaymentAgreement {
  id: string;
  _id: string;

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

  ownerName?: string;

  itemName?: string;

  description?: string;

  benefits?: string[];

  content: string;

  fixedAmount?: string;

  minimumAmount?: string;

  maximumAmount?: string;

  signAgreementHttpCallbackUrl?: string;
  
  cancelAgreementHttpCallbackUrl?: string;

  signAgreementRedirectUrl?: string;

  createdAt: Date;

  constructor(params: Partial<PaymentAgreement>) {
    Object.assign(this, params);

    if(params.createdAt) {
      this.createdAt = new Date(params.createdAt);
    }
  }
}