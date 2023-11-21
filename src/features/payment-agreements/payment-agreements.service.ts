import { ProtocolApi } from "@/lib/protocol-api";

import {AgreementMember, PaymentAgreement} from "./models";
import { UpdateAgreementDto } from "./dto";

export class PaymentAgreementsService {
  private static api = new ProtocolApi()

  static async agreementById(id: string) {
    return this.api
      .get<PaymentAgreement>(`/payment-agreements/${id}`)
      .then((response) => response.data)
      .then(data => new PaymentAgreement(data))
  }

  static async getAgreementMembers(id: string) {
    return this.api
      .get<PaymentAgreement[]>(`/payment-agreements/${id}/members?limit=1000`)
      .then((response) => response.data)
      .then(data => data.map(item => new AgreementMember(item)))

  }

  static async fetchLatestAgreementCreatedByAccount() {
    return PaymentAgreementsService.api
      .get<PaymentAgreement>(`/payment-agreements/created/latest`)
      .then((response) => response.data)
      .then(item => new PaymentAgreement(item))
  }

  static async fetchAgreementsCreated() {
    return PaymentAgreementsService.api
      .get<PaymentAgreement[]>(`/payment-agreements/created?limit=1000`)
      .then((response) => response.data)
      .then(data => data.map(item => new PaymentAgreement(item)))
  }

  static async fetchAgreementsSigned(): Promise<PaymentAgreement[]> {
    return PaymentAgreementsService.api
      .get<PaymentAgreement[]>(`/payment-agreements/signed`)
      .then((response) => response.data)
      .then(data => data.map(item => new PaymentAgreement(item)))
  }

  static async fetchAgreementMembership(id: string): Promise<AgreementMember> {
    return PaymentAgreementsService.api
      .get<AgreementMember>(`/payment-agreements/signed/${id}`)
      .then((response) => response.data)
      .then(data => new AgreementMember(data))
  }

  static async updateAgreement(id: string, input: UpdateAgreementDto) {
    return this.api
    .put(`/payment-agreements/${id}`, input)
    .then((response) => response.data)
  }
}