import { useMutation, useQueryClient } from "react-query";
import { useGetAccount } from "@multiversx/sdk-dapp/hooks";

import { DonationsService } from "../../donation.service";
import { accountDonationsCreatedQueryKey } from "../../query-keys";
import { CreateDonationDto } from "../../dto";


export function createDonationMutation() {
  const client = useQueryClient();
  const { address } = useGetAccount();

  return useMutation({
    mutationFn: (input: CreateDonationDto) => DonationsService.createDonation(input),
    onSuccess: async () => {
      await client.invalidateQueries({queryKey: accountDonationsCreatedQueryKey(address)})
    },
  });
}
