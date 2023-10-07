import { useQuery } from "react-query";
import { useGetAccount } from "@multiversx/sdk-dapp/hooks";

import { ProtocolVaultService } from "@/features/vault";
import { accountBalancesQueryKey } from "@/features/vault/query-keys.ts";

export function useAccountBalancesQuery() {
  const { address } = useGetAccount()

  return useQuery({
    queryKey: accountBalancesQueryKey(address),
    queryFn: ProtocolVaultService.getAccountBalances,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchInterval: 10 * 60 * 1000, // 10 minutes
  })
}
