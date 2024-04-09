import { useQuery } from "react-query";
import { useGetAccount } from "@multiversx/sdk-dapp/hooks";

import { DonationsService } from "../../donation.service";
import { accountDonationsCreatedQueryKey } from "../../query-keys";

export function useDonationsCreatedQuery(pageNumber: number) {
  const { address } = useGetAccount();

  return useQuery({
    queryKey: accountDonationsCreatedQueryKey(address),
    queryFn: () => DonationsService.fetchDonationsCreated(pageNumber),
    refetchOnMount: true,
    refetchOnWindowFocus: false,
    refetchInterval: 60 * 1000, // 1 minute
  })
}