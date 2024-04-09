import { useQuery } from "react-query";
import { useGetAccount } from "@multiversx/sdk-dapp/hooks";

import { subscriptionTriggersQueryKey } from "@/features/subscription-triggers/query-keys.ts";
import { SubscriptionTriggersService } from "../../subscription-triggers.service";

export function useSubscriptionTriggersQuery(pageNumber: number, id: string | undefined) {
  const { address} = useGetAccount();

  return useQuery({
    enabled: id !== undefined,
    queryKey: subscriptionTriggersQueryKey(address, id as string),
    queryFn: () => SubscriptionTriggersService.getSubscriptionTriggersById(pageNumber, id as string),
    refetchOnMount: true,
    refetchOnWindowFocus: false,
    refetchInterval: 60 * 1000, // 1 minute
  })
}
