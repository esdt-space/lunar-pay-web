import { DonationTarget, DonationType } from '../enums';

export class Donation {
  id?: string;
  _id: string;

  owner: string;

  donationType: DonationType;

  donationTarget: DonationTarget;

  tokenNonce: number;

  tokenIdentifier: string;

  beneficiaryName?: string;

  description?: string;

  fixedAmount?: string;

  signAgreementHttpCallbackUrl?: string;
  
  cancelAgreementHttpCallbackUrl?: string;

  signAgreementRedirectUrl?: string;

  createdAt: Date;

  constructor(params: Partial<Donation>) {
    Object.assign(this, params);

    if(params.createdAt) {
      this.createdAt = new Date(params.createdAt);
    }
  }
}