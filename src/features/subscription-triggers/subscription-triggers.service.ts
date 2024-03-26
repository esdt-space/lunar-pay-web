import { ProtocolApi } from "@/lib/protocol-api";
import { SubscriptionTrigger } from "./models";

type SubscriptionTriggersResponse = {
  data: SubscriptionTrigger[];
  meta: {
    currentPage?: number;
    pageSize?: number;
    totalPages?: number;
    totalRecords: number;
  }
}

export class SubscriptionTriggersService {
  private static api = new ProtocolApi()
  private static readonly ITEMS_PER_PAGE = 10;

  static async getSubscriptionTriggersById(page: number, id: string): Promise<SubscriptionTriggersResponse> {
    const skip = (page - 1) * SubscriptionTriggersService.ITEMS_PER_PAGE;

    return this.api.get<SubscriptionTriggersResponse>(`/subscription-triggers/${id}/all?limit=${SubscriptionTriggersService.ITEMS_PER_PAGE}&skip=${skip}`)
      .then((response) => response.data)
  }
}
