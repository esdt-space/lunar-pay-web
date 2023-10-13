import { useQuery } from "react-query";
import { useGetAccount } from "@multiversx/sdk-dapp/hooks";

import { TokenOperationsService } from "./../../token-operations.service.ts";

const queryKey = (address: string) => ['account-token-operations', address]

export function useTokenOperationsQuery() {
  const { address} = useGetAccount();

  return useQuery({
    queryKey: queryKey(address),
    queryFn: TokenOperationsService.getAllTokenOperations,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchInterval: 60 * 1000, // 1 minute
  })
}
