import { useMutation } from "react-query";

import { cancelSubscriptionInteraction } from "@/contracts/lunar-pay/subscriptions/interactions";

type CancelSubscriptionInput = {
  id: number, 
  address?: string
}

export function useCancelSubscriptionMutation() {
  return useMutation({
    mutationFn: (input: CancelSubscriptionInput) => cancelSubscriptionInteraction(input.id, input.address),
    onSuccess(sessionId) {
      if(!sessionId) return Promise.reject();

      return Promise.resolve();
    },
  });
}
