import { ProtocolApi } from "@/lib/protocol-api";

import { SubscriptionMember, Subscription } from "./models";
import { UpdateSubscriptionDto } from "./dto";

type SubscriptionsResponse = {
  data: Subscription[];
  meta: {
    currentPage?: number;
    pageSize?: number;
    totalPages?: number;
    totalRecords: number;
  }
}

type SubscriptionMembershipsResponse = {
  data: SubscriptionMember[]
  meta: {
    currentPage?: number;
    pageSize?: number;
    totalPages?: number;
    totalRecords: number;
  }
}

export class SubscriptionsService {
  private static api = new ProtocolApi()
  private static readonly ITEMS_PER_PAGE = 10;

  static async subscriptionById(id: string) {
    return this.api
      .get<Subscription>(`/subscriptions/${id}`)
      .then((response) => response.data)
      .then(data => new Subscription(data))
  }

  static async getSubscriptionMembers(page: number, id: string): Promise<SubscriptionMembershipsResponse> {
    const skip = (page - 1) * SubscriptionsService.ITEMS_PER_PAGE;

    return SubscriptionsService.api
      .get<SubscriptionMembershipsResponse>(`/subscriptions/${id}/members?limit=${SubscriptionsService.ITEMS_PER_PAGE}&skip=${skip}`)
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

  static async fetchLatestSubscriptionCreatedByAccount() {
    return SubscriptionsService.api
      .get<Subscription>(`/subscriptions/created/latest`)
      .then((response) => response.data)
      .then(item => new Subscription(item))
  }

  static async fetchSubscriptionsCreated(page: number): Promise<SubscriptionsResponse> {
    const skip = (page - 1) * SubscriptionsService.ITEMS_PER_PAGE;

    return SubscriptionsService.api
      .get<SubscriptionsResponse>(`/subscriptions/created?limit=${SubscriptionsService.ITEMS_PER_PAGE}&skip=${skip}`)
      .then((response) => response.data)
  }

  static async fetchSubscriptionsSigned(page: number): Promise<SubscriptionsResponse> {
    const skip = (page - 1) * SubscriptionsService.ITEMS_PER_PAGE;

    return SubscriptionsService.api
      .get<SubscriptionsResponse>(`/subscriptions/signed?limit=${SubscriptionsService.ITEMS_PER_PAGE}&skip=${skip}`)
      .then((response) => response.data)
  }

  static async updateSubscription(id: string, input: UpdateSubscriptionDto) {
    return this.api
    .put(`/subscriptions/${id}`, input)
    .then((response) => response.data)
  }
}