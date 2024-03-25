import { ProtocolApi } from "@/lib/protocol-api";

import {AgreementMember, PaymentAgreement} from "./models";
import { UpdateAgreementDto } from "./dto";

type PaymentAgreementsResponse = {
  data: PaymentAgreement[];
  meta: {
    currentPage?: number;
    pageSize?: number;
    totalPages?: number;
    totalRecords: number;
  }
}

type AgreementMembershipsResponse = {
  data: AgreementMember[];
  meta: {
    currentPage?: number;
    pageSize?: number;
    totalPages?: number;
    totalRecords: number;
  }
}

export class PaymentAgreementsService {
  private static api = new ProtocolApi()
  private static readonly ITEMS_PER_PAGE = 10;

  static async agreementById(id: string) {
    return this.api
      .get<PaymentAgreement>(`/payment-agreements/${id}`)
      .then((response) => response.data)
      .then(data => new PaymentAgreement(data))
  }

  static async getAgreementMembers(page: number, id: string): Promise<AgreementMembershipsResponse> {
    const skip = (page - 1) * PaymentAgreementsService.ITEMS_PER_PAGE;

    return PaymentAgreementsService.api
      .get<AgreementMembershipsResponse>(`/payment-agreements/${id}/members?limit=${PaymentAgreementsService.ITEMS_PER_PAGE}&skip=${skip}`)
      .then((response) => response.data)
  }

  static async fetchLatestAgreementCreatedByAccount() {
    return PaymentAgreementsService.api
      .get<PaymentAgreement>(`/payment-agreements/created/latest`)
      .then((response) => response.data)
      .then(item => new PaymentAgreement(item))
  }

  static async fetchAgreementsCreated(page: number): Promise<PaymentAgreementsResponse> {
    const skip = (page - 1) * PaymentAgreementsService.ITEMS_PER_PAGE;

    return PaymentAgreementsService.api
      .get<PaymentAgreementsResponse>(`/payment-agreements/created?limit=${PaymentAgreementsService.ITEMS_PER_PAGE}&skip=${skip}`)
      .then((response) => response.data)
  }

  static async fetchAgreementsSigned(page: number): Promise<PaymentAgreementsResponse> {
    const skip = (page - 1) * PaymentAgreementsService.ITEMS_PER_PAGE;

    return PaymentAgreementsService.api
      .get<PaymentAgreementsResponse>(`/payment-agreements/signed?limit=${PaymentAgreementsService.ITEMS_PER_PAGE}&skip=${skip}`)
      .then((response) => response.data)
  }

  static async updateAgreement(id: string, input: UpdateAgreementDto) {
    return this.api
    .put(`/payment-agreements/${id}`, input)
    .then((response) => response.data)
  }
}