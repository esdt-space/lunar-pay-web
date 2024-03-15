import { useQuery } from "react-query";
import { useGetAccount } from "@multiversx/sdk-dapp/hooks";

import { usersActionsEventQueryKey } from "../../query-keys";
import { DonationsService } from "../../donation.service";

export function useActionsForEventQuery() {
  const { address } = useGetAccount();

  return useQuery({
    queryKey: usersActionsEventQueryKey(address),
    queryFn: () => DonationsService.fetchActionsForEvent(),
    refetchOnMount: true,
    refetchOnWindowFocus: false,
    refetchInterval: 60 * 1000, // 1 minute
  })
}
