import { useQuery } from "react-query";
import { useGetAccount } from "@multiversx/sdk-dapp/hooks";

import { SubscriptionsService } from "../../subscriptions.service.ts";
import { subscriptionMembersQueryKey } from "@/features/subscriptions/query-keys.ts";

export function useSubscriptionMembersQuery(pageNumber: number, id: string | undefined) {
  const { address } = useGetAccount();

  return useQuery({
    enabled: id !== undefined,
    queryKey: subscriptionMembersQueryKey(address, id as string),
    queryFn: () => SubscriptionsService.getSubscriptionMembers(pageNumber, id as string),
    refetchOnMount: true,
    refetchOnWindowFocus: false,
    refetchInterval: 60 * 1000, // 1 minute
  })
}