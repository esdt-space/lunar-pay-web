import { ProtocolApi } from "@/lib/protocol-api";

import { SubscriptionMember, Subscription } from "./models";
import { UpdateSubscriptionDto } from "./dto";
import { PaginatedResponse } from "@/components/shared/pagination";

export class SubscriptionsService {
  private static api = new ProtocolApi()
  private static readonly ITEMS_PER_PAGE = 10;

  static async subscriptionById(id: string) {
    return this.api
      .get<Subscription>(`/subscriptions/${id}`)
      .then((response) => response.data)
      .then(data => new Subscription(data))
  }

  static async getSubscriptionMembers(page: number, id: string): Promise<PaginatedResponse<SubscriptionMember>> {
    const skip = (page - 1) * SubscriptionsService.ITEMS_PER_PAGE;

    return SubscriptionsService.api
      .get<PaginatedResponse<SubscriptionMember>>(`/subscriptions/${id}/members?limit=${SubscriptionsService.ITEMS_PER_PAGE}&skip=${skip}`)
      .then((response) => response.data)
  }

  static async getAllSubscriptionMembers(id: string | undefined): Promise<SubscriptionMember[]> {
    return await SubscriptionsService.api
      .get<SubscriptionMember[]>(`/subscriptions/${id}/members/all`)
      .then((response) => response.data)
      .then(data => {
        return data.map(item => new SubscriptionMember(item)) 
      })
  }

  static async fetchLatestSubscriptionCreatedByAccount(subscriptionIdentifier: number) {
    return SubscriptionsService.api
      .get<Subscription>(`/subscriptions/created/latest/${subscriptionIdentifier}`)
      .then((response) => response.data)
      .then(item => new Subscription(item))
  }

  static async fetchSubscriptionsCreated(page: number): Promise<PaginatedResponse<Subscription>> {
    const skip = (page - 1) * SubscriptionsService.ITEMS_PER_PAGE;

    return SubscriptionsService.api
      .get<PaginatedResponse<Subscription>>(`/subscriptions/created?limit=${SubscriptionsService.ITEMS_PER_PAGE}&skip=${skip}`)
      .then((response) => response.data)
  }

  static async fetchSubscriptionsSigned(page: number): Promise<PaginatedResponse<Subscription>> {
    const skip = (page - 1) * SubscriptionsService.ITEMS_PER_PAGE;

    return SubscriptionsService.api
      .get<PaginatedResponse<Subscription>>(`/subscriptions/signed?limit=${SubscriptionsService.ITEMS_PER_PAGE}&skip=${skip}`)
      .then((response) => response.data)
  }

  static async updateSubscription(id: string, input: UpdateSubscriptionDto) {
    return this.api
    .put(`/subscriptions/${id}`, input)
    .then((response) => response.data)
  }
}
