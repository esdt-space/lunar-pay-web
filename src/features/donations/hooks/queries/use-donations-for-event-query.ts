import { useQuery } from "react-query";
import { useGetAccount } from "@multiversx/sdk-dapp/hooks";

import { accountDonationsEventQueryKey } from "../../query-keys";
import { DonationsService } from "../../donation.service";

export function useDonationsForEventQuery() {
  const { address } = useGetAccount();

  return useQuery({
    queryKey: accountDonationsEventQueryKey(address),
    queryFn: () => DonationsService.fetchDonationsForEvent(),
    refetchOnMount: true,
    refetchOnWindowFocus: false,
    refetchInterval: 60 * 1000, // 1 minute
  })
}
