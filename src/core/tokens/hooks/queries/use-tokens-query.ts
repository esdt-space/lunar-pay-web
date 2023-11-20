import { useQuery } from "react-query";

import { TokensService } from "@/core/tokens";

const queryKey = ['global-blockchain-tokens']

export function useTokensQuery() {
  return useQuery({
    queryKey: queryKey,
    queryFn: TokensService.getEsdtTokensTransformed,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchInterval: 10 * 60 * 1000, // 10 minutes
  })
}
