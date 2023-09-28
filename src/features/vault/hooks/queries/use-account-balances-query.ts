import { useQuery } from "react-query";
import { ProtocolVaultService } from "@/features/vault";

const queryKey = ['protocol-vault-account-balances']

export function useAccountBalancesQuery() {
  return useQuery({
    queryKey: queryKey,
    queryFn: ProtocolVaultService.getAccountBalances,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchInterval: 10 * 60 * 1000, // 10 minutes
  })
}
