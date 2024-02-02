import { useQuery } from "react-query";
import { useGetAccount } from "@multiversx/sdk-dapp/hooks";

import { SubscriptionsService } from "../../subscriptions.service.ts";
import { accountSubscriptionById } from "@/features/subscriptions/query-keys.ts";

export function useSubscriptionByIdQuery(id: string | undefined) {
  const { address } = useGetAccount();

  return useQuery({
    enabled: id !== undefined,
    queryKey: accountSubscriptionById(address, id as string),
    queryFn: () => SubscriptionsService.subscriptionById(id as string),
    refetchOnMount: true,
    refetchOnWindowFocus: false,
    refetchInterval: 60 * 1000, // 1 minute
  })
}