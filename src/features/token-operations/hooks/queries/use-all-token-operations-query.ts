import { useQuery } from "react-query";

import { TokenOperationsService } from "./../../token-operations.service.ts";
import {
  allTokenOperationsFilteredQueryKey,
} from "@/features/token-operations/query-keys.ts";

export function useAllTokenOperationsQuery(pageNumber: number, type: string) {
  return useQuery({
    queryKey: allTokenOperationsFilteredQueryKey(type, pageNumber),
    queryFn: () => TokenOperationsService.getAllPublicTokenOperations(pageNumber, type),
    refetchOnMount: true,
    refetchOnWindowFocus: false,
    keepPreviousData: true,
    refetchInterval: 60 * 1000, // 1 minute
  })
}
