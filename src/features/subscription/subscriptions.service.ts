import { ProtocolApi } from "@/lib/protocol-api";
import { SubscriptionCreate, SubscriptionDetails } from "./models/subscription.model";

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

  static async deleteAgreement(id: string) {
    return this.api
    .delete(`/agreements/${id}`)
    .then((response) => response.data)
  }
  
  static async updateAgreement(id: string, input: SubscriptionDetails) {
    return this.api
    .put(`/agreements/${id}`, input)
    .then((response) => response.data)
  }
  
  // TO DO: Remove from usage after SC functionality implementation
  static async createAgreement(input: SubscriptionCreate) {
    return this.api
      .post('/agreements', input)
      .then((response) => response.data)
  }
}