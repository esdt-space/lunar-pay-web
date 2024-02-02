import { useQuery } from "react-query";
import { useGetAccount } from "@multiversx/sdk-dapp/hooks";

import { SubscriptionsService } from "../../subscriptions.service.ts";
import { accountSubscriptionsCreatedQueryKey } from "@/features/subscriptions/query-keys.ts";

export function useSubscriptionsCreatedQuery(pageNumber: number) {
  const { address } = useGetAccount();

  return useQuery({
    queryKey: accountSubscriptionsCreatedQueryKey(address),
    queryFn: () => SubscriptionsService.fetchSubscriptionsCreated(pageNumber),
    refetchOnMount: true,
    refetchOnWindowFocus: false,
    refetchInterval: 60 * 1000, // 1 minute
  })
}