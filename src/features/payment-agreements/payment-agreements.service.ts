import { ProtocolApi } from "@/lib/protocol-api";

import { PaymentAgreement } from "./models";
import { UpdateAgreementDto } from "./dto";

export class PaymentAgreementsService {
  private static api = new ProtocolApi()

  static async agreementById(id: string) {
    return this.api
      .get<PaymentAgreement>(`/payment-agreements/${id}`)
      .then((response) => response.data)
      .then(data => new PaymentAgreement(data))
  }

  static async fetchLatestAgreementCreatedByAccount() {
    return PaymentAgreementsService.api
      .get<PaymentAgreement>(`/payment-agreements/created/latest`)
      .then((response) => response.data)
      .then(item => new PaymentAgreement(item))
  }

  static async fetchAgreementsCreated() {
    return PaymentAgreementsService.api
      .get<PaymentAgreement[]>(`/payment-agreements/created`)
      .then((response) => response.data)
      .then(data => data.map(item => new PaymentAgreement(item)))
  }

  static async fetchAgreementsSigned(): Promise<PaymentAgreement[]> {
    return PaymentAgreementsService.api
      .get<PaymentAgreement[]>(`/payment-agreements/signed`)
      .then((response) => response.data)
      .then(data => data.map(item => new PaymentAgreement(item)))
  }

  static async updateAgreement(id: string, input: UpdateAgreementDto) {
    return this.api
    .put(`/payment-agreements/${id}`, input)
    .then((response) => response.data)
  }
}