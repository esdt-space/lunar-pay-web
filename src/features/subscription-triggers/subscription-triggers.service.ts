import { ProtocolApi } from "@/lib/protocol-api";
import { SubscriptionTrigger } from "./models";

type SubscriptionTriggersResponse = {
  numberOfPages: number;
  subscriptionTriggers: SubscriptionTrigger[];
}

export class SubscriptionTriggersService {
  private static api = new ProtocolApi()
  private static readonly ITEMS_PER_PAGE = 10;

  static async getSubscriptionTriggersById(page: number, id: string): Promise<SubscriptionTriggersResponse> {
    const skip = (page - 1) * SubscriptionTriggersService.ITEMS_PER_PAGE;

    return this.api.get<SubscriptionTriggersResponse>(`/subscriptions/${id}/all?limit=${SubscriptionTriggersService.ITEMS_PER_PAGE}&skip=${skip}`)
      .then((response) => response.data)
      .then(data => {
        return {
          numberOfPages: data.numberOfPages,
          subscriptionTriggers: data.subscriptionTriggers.map(item => new SubscriptionTrigger(item)) 
        }
      })
  }
}
