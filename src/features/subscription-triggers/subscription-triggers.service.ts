import { ProtocolApi } from "@/lib/protocol-api";
import { SubscriptionTrigger } from "./models";
import { PaginatedResponse } from "@/components/shared/pagination";

export class SubscriptionTriggersService {
  private static api = new ProtocolApi()
  private static readonly ITEMS_PER_PAGE = 10;

  static async getSubscriptionTriggersById(page: number, id: string): Promise<PaginatedResponse<SubscriptionTrigger>> {
    const skip = (page - 1) * SubscriptionTriggersService.ITEMS_PER_PAGE;

    return this.api.get<PaginatedResponse<SubscriptionTrigger>>(`/subscription-triggers/${id}/all?limit=${SubscriptionTriggersService.ITEMS_PER_PAGE}&skip=${skip}`)
      .then((response) => response.data)
  }
}
