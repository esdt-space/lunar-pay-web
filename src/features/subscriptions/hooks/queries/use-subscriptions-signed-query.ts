import { useQuery } from "react-query";
import { useGetAccount } from "@multiversx/sdk-dapp/hooks";

import { SubscriptionsService } from "../../subscriptions.service.ts";
import { accountSubscriptionsSignedQueryKey } from "@/features/subscriptions/query-keys.ts";

export function useSubscriptionsSignedQuery(pageNumber: number) {
  const { address } = useGetAccount();

  return useQuery({
    queryKey: accountSubscriptionsSignedQueryKey(address),
    queryFn: () => SubscriptionsService.fetchSubscriptionsSigned(pageNumber),
    refetchOnMount: true,
    refetchOnWindowFocus: false,
    refetchInterval: 60 * 1000, // 1 minute
  })
}