import { useQuery } from "react-query";

import { useGetAccount } from "@multiversx/sdk-dapp/hooks";
import { AccountTokensService } from "@/features/account-tokens/account-tokens.service.ts";

const queryKey = (address: string) => ['account-tokens', address]

export function useAccountTokensQuery() {
  const { address } = useGetAccount();

  return useQuery({
    queryKey: queryKey(address),
    queryFn: AccountTokensService.getAccountEsdtTokensDecorated,
    enabled: address.length > 0,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchInterval: 10 * 60 * 1000, // 10 minutes
  })
}
