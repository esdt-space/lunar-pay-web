import { ProtocolApi } from "@/lib/protocol-api";

export class AgreementsService {
  private static api = new ProtocolApi()

  static async agreementById(id: string) {
    return this.api
      .get<unknown>(`/agreements/${id}`)
      .then((response) => response.data)
  }

  static async fetchAgreements() {
    return this.api
      .get<unknown[]>(`/agreements`)
      .then((response) => response.data)
  }

  static async createAgreement(input: any) {
    return this.api
      .post('/agreements', input)
      .then((response) => response.data)
  }

  static async deleteAgreement(id: string) {
    return this.api
      .delete(`/agreements/${id}`)
      .then((response) => response)
  }
}