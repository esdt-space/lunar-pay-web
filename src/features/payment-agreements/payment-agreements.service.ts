import { ProtocolApi } from "@/lib/protocol-api";

import {AgreementMember, PaymentAgreement} from "./models";
import { UpdateAgreementDto } from "./dto";

type PaymentAgreementsReponse = {
  numberOfPages: number;
  agreements: PaymentAgreement[]
}

type AgreementMembershipsReponse = {
  numberOfPages: number;
  memberships: AgreementMember[]
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

  static async getAgreementMembers(page: number, id: string): Promise<AgreementMembershipsReponse> {
    const skip = (page - 1) * PaymentAgreementsService.ITEMS_PER_PAGE;

    return PaymentAgreementsService.api
      .get<AgreementMembershipsReponse>(`/payment-agreements/${id}/members?limit=${PaymentAgreementsService.ITEMS_PER_PAGE}&skip=${skip}`)
      .then((response) => response.data)
      .then(data => {
        return {
          numberOfPages: data.numberOfPages,
          memberships: data.memberships.map(item => new AgreementMember(item)) 
        }
      })
  }

  static async fetchLatestAgreementCreatedByAccount() {
    return PaymentAgreementsService.api
      .get<PaymentAgreement>(`/payment-agreements/created/latest`)
      .then((response) => response.data)
      .then(item => new PaymentAgreement(item))
  }

  static async fetchAgreementsCreated(page: number): Promise<PaymentAgreementsReponse> {
    const skip = (page - 1) * PaymentAgreementsService.ITEMS_PER_PAGE;

    return PaymentAgreementsService.api
      .get<PaymentAgreementsReponse>(`/payment-agreements/created?limit=${PaymentAgreementsService.ITEMS_PER_PAGE}&skip=${skip}`)
      .then((response) => response.data)
      .then(data => {
        return {
          numberOfPages: data.numberOfPages,
          agreements: data.agreements.map(item => new PaymentAgreement(item)) 
        }
      })
  }

  static async fetchAgreementsSigned(page: number): Promise<PaymentAgreementsReponse> {
    const skip = (page - 1) * PaymentAgreementsService.ITEMS_PER_PAGE;

    return PaymentAgreementsService.api
      .get<PaymentAgreementsReponse>(`/payment-agreements/signed?limit=${PaymentAgreementsService.ITEMS_PER_PAGE}&skip=${skip}`)
      .then((response) => response.data)
      .then(data => {
        return {
          numberOfPages: data.numberOfPages,
          agreements: data.agreements.map(item => new PaymentAgreement(item)) 
        }
      })
  }

  static async updateAgreement(id: string, input: UpdateAgreementDto) {
    return this.api
    .put(`/payment-agreements/${id}`, input)
    .then((response) => response.data)
  }
}