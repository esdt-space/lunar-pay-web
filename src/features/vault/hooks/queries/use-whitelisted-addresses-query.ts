import { useQuery } from "react-query";
import { ProtocolVaultService } from "@/features/vault";

const queryKey = ['protocol-vault-whitelisted-addresses']

export function useWhitelistedAddressesQuery() {
  return useQuery({
    queryKey: queryKey,
    queryFn: ProtocolVaultService.getWhitelistedAddresses,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchInterval: 10 * 60 * 1000, // 10 minutes
  })
}
