import {AgreementMemberStatus, AgreementType} from '@/features/payment-agreements/enums';

export class AgreementMember {
  member: string;

  internalAgreementId: string;

  blockchainAgreementId: number;

  agreementType: AgreementType;

  status: AgreementMemberStatus;

  lastChargedAt: Date;

  lastSuccessfulCharge: Date;

  canceledAt: Date;

  createdAt: Date;

  constructor(params: Partial<AgreementMember>) {
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