import { useQuery } from "react-query";

import { ProtocolVaultService } from "@/features/vault";
import { protocolWhitelistedAddressesQueryKey } from "@/features/vault/query-keys.ts";

export function useWhitelistedAddressesQuery() {
  return useQuery({
    queryKey: protocolWhitelistedAddressesQueryKey,
    queryFn: ProtocolVaultService.getWhitelistedAddresses,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchInterval: 10 * 60 * 1000, // 10 minutes
  })
}
