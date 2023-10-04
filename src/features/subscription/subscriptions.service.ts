import { ProtocolApi } from "@/lib/protocol-api";

export class SubscriptionsService {
  private static api = new ProtocolApi()

  static async subscriptionById(id: string) {
    return this.api
      .get<unknown>(`/subscriptions/${id}`)
      .then((response) => response.data)
  }

  static fetchSubscriptions() {
    return this.api
      .get<unknown[]>(`/subscriptions`)
      .then((response) => response.data)
  }

  static async createSubscription(input: any) {
    return this.api
      .post('/subscriptions', input)
      .then((response) => response.data)
  }

  static async deleteSubscription(id: string) {
    return this.api
      .delete(`/subscriptions/${id}`)
      .then((response) => response)
  }
}