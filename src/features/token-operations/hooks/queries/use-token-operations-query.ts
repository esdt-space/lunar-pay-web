import { useQuery } from "react-query";
import { useGetAccount } from "@multiversx/sdk-dapp/hooks";

import { TokenOperationsService } from "./../../token-operations.service.ts";
import { accountTokenOperationsQueryKey } from "@/features/token-operations/query-keys.ts";

export function useTokenOperationsQuery() {
  const { address} = useGetAccount();

  return useQuery({
    queryKey: accountTokenOperationsQueryKey(address),
    queryFn: TokenOperationsService.getAllTokenOperations,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchInterval: 60 * 1000, // 1 minute
  })
}