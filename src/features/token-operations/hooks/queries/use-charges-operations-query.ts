import { useQuery } from "react-query";
import { useGetAccount } from "@multiversx/sdk-dapp/hooks";

import { TokenOperationsService } from "./../../token-operations.service.ts";
import { accountChargesOperationsQueryKey } from "@/features/token-operations/query-keys.ts";

export function useChargesOperationsQuery(pageNumber: number, id: string | undefined, addressFilter?: string) {
  const { address} = useGetAccount();

  return useQuery({
    enabled: id !== undefined,
    queryKey: accountChargesOperationsQueryKey(address, id as string),
    queryFn: () => TokenOperationsService.getTokenOperationsByParentId(pageNumber, id as string, addressFilter),
    refetchOnMount: true,
    refetchOnWindowFocus: false,
    refetchInterval: 60 * 1000, // 1 minute
  })
}
