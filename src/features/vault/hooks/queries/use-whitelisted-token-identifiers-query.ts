import { useQuery } from "react-query";
import { ProtocolVaultService } from "@/features/vault";

const queryKey = ['protocol-vault-whitelisted-token-identifiers']

export function useWhitelistedTokenIdentifiersQuery() {
  return useQuery({
    queryKey: queryKey,
    queryFn: ProtocolVaultService.getWhitelistedTokenIdentifiers,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchInterval: 10 * 60 * 1000, // 10 minutes
  })
}
