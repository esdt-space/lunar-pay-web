import { useMutation, useQueryClient } from "react-query";
import { useGetAccount } from "@multiversx/sdk-dapp/hooks";

import { accountDonationById, accountDonationsCreatedQueryKey } from "../../query-keys";
import { UpdateDonationDto } from "../../dto";
import { DonationsService } from "../../donation.service";


type UpdateDonationInput = {
  id: string;
  input: UpdateDonationDto
}

export function useUpdateDonationMutation(donationId: string) {
  const client = useQueryClient();
  const { address } = useGetAccount();

  return useMutation({
    mutationFn: ({id, input}: UpdateDonationInput) => DonationsService.updateDonation(id, input),
    onSuccess: async () => {
      await client.invalidateQueries({queryKey: accountDonationsCreatedQueryKey(address)})
      await client.invalidateQueries({queryKey: accountDonationById(address, donationId)})
    },
  });
}
