import { useQuery } from "react-query";
import { ProtocolVaultService } from "@/features/vault";

import { protocolWhitelistedTokensQueryKey } from "@/features/vault/query-keys.ts";

export function useWhitelistedTokenIdentifiersQuery() {
  return useQuery({
    queryKey: protocolWhitelistedTokensQueryKey,
    queryFn: ProtocolVaultService.getWhitelistedTokenIdentifiers,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchInterval: 10 * 60 * 1000, // 10 minutes
  })
}
