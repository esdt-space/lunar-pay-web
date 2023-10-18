import { ProtocolApi } from "@/lib/protocol-api";

import { PaymentAgreement } from "./models";

export class PaymentAgreementsService {
  private static api = new ProtocolApi()

  static async agreementById(id: string) {
    return this.api
      .get<PaymentAgreement>(`/payment-agreements/${id}`)
      .then((response) => response.data)
      .then(data => new PaymentAgreement(data))
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

  // static async updateAgreement(id: string, input: SubscriptionDetails) {
  //   return this.api
  //   .put(`/agreements/${id}`, input)
  //   .then((response) => response.data)
  // }
}