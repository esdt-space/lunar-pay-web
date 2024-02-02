import { useMutation, useQueryClient } from "react-query";
import { useGetAccount } from "@multiversx/sdk-dapp/hooks";

import { accountSubscriptionById, accountSubscriptionsCreatedQueryKey } from "@/features/subscriptions/query-keys.ts";
import { SubscriptionsService } from "../../subscriptions.service";
import { UpdateSubscriptionDto } from "../../dto";

type UpdateSubscriptionInput = {
  id: string;
  input: UpdateSubscriptionDto
}

export function useUpdatePaymentAgreementMutation(agreementId: string) {
  const client = useQueryClient();
  const { address } = useGetAccount();

  return useMutation({
    mutationFn: ({id, input}: UpdateSubscriptionInput) => SubscriptionsService.updateSubscription(id, input),
    onSuccess: async () => {
      await client.invalidateQueries({queryKey: accountSubscriptionsCreatedQueryKey(address)})
      await client.invalidateQueries({queryKey: accountSubscriptionById(address, agreementId)})
    },
  });
}