import { useQuery } from "react-query";
import { useGetAccount } from "@multiversx/sdk-dapp/hooks";

import { accountDonationById } from "../../query-keys";
import { DonationsService } from "../../donation.service";

export function useDonationByIdQuery(id: string | undefined) {
  const { address } = useGetAccount();

  return useQuery({
    enabled: id !== undefined,
    queryKey: accountDonationById(address, id as string),
    queryFn: () => DonationsService.donationById(id as string),
    refetchOnMount: true,
    refetchOnWindowFocus: false,
    refetchInterval: 60 * 1000, // 1 minute
  })
}
