import { useQuery } from "react-query";

import { ProtocolVaultService } from "@/features/vault";
import { subscriptionAmountsQueryKey } from "@/features/vault/query-keys.ts";

export function useSubscriptionClaimAmountsQuery(subscriptionIdentifier: number) {
  return useQuery({
    queryKey: subscriptionAmountsQueryKey(subscriptionIdentifier),
    queryFn: () => ProtocolVaultService.getSubscriptionClaimAmount(subscriptionIdentifier),
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchInterval: 10 * 60 * 1000, // 10 minutes
  })
}
