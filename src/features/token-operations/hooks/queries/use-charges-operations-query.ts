import { useQuery } from "react-query";
import { useGetAccount } from "@multiversx/sdk-dapp/hooks";

import { TokenOperationsService } from "./../../token-operations.service.ts";
import { accountChargesOperationsQueryKey } from "@/features/token-operations/query-keys.ts";

export function useChargesOperationsQuery(id: string | undefined) {
  const { address} = useGetAccount();

  return useQuery({
    enabled: id !== undefined,
    queryKey: accountChargesOperationsQueryKey(address, id as string),
    queryFn: () => TokenOperationsService.getTokenOperationsByParentId(id as string),
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchInterval: 60 * 1000, // 1 minute
  })
}
