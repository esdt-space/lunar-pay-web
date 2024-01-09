import { useQuery } from "react-query";
import { useGetAccount } from "@multiversx/sdk-dapp/hooks";

import { TokenOperationsService } from "./../../token-operations.service.ts";
import {
  accountTokenOperationsFilteredQueryKey,
} from "@/features/token-operations/query-keys.ts";

export function useTokenOperationsQuery(pageNumber: number, type: string, address?: string) {
  const { address: currentAddress} = useGetAccount();

  return useQuery({
    queryKey: accountTokenOperationsFilteredQueryKey(currentAddress, type, pageNumber),
    queryFn: () => TokenOperationsService.getAllTokenOperations(pageNumber, type, address),
    refetchOnMount: true,
    refetchOnWindowFocus: false,
    keepPreviousData: true,
    refetchInterval: 60 * 1000, // 1 minute
  })
}
