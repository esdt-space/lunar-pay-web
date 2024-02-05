import { useMutation, useQueryClient } from "react-query";
import { useGetAccount } from "@multiversx/sdk-dapp/hooks";

import { SubscriptionInteractionOptions } from "@/contracts/lunar-pay/subscriptions/types";

import { accountBalancesQueryKey } from "@/features/vault/query-keys.ts";
import { accountTokenOperationsQueryKey } from "@/features/token-operations/query-keys.ts";
import { createSubscriptionInteraction } from "@/contracts/lunar-pay/subscriptions/interactions";
import { accountSubscriptionsCreatedQueryKey } from "@/features/subscriptions/query-keys.ts";
import { useSuccessfulTransactionCallback } from "@/utils/hooks/use-successful-transaction-callback.ts";

export function useCreateSubscriptionMutation() {
  const client = useQueryClient();
  const { address } = useGetAccount();

  const registerSessionId =  useSuccessfulTransactionCallback()

  const getCallback = (callback: (value: unknown) => void) => async (value: unknown) => {
    await client.invalidateQueries({queryKey: accountBalancesQueryKey(address)})
    await client.invalidateQueries({queryKey: accountTokenOperationsQueryKey(address)})
    await client.invalidateQueries({queryKey: accountSubscriptionsCreatedQueryKey(address)})
    callback(value);
  }

  return useMutation({
    mutationFn: (options: SubscriptionInteractionOptions) => createSubscriptionInteraction(options),
    onSuccess(sessionId) {
      if(!sessionId) return Promise.reject();

      return new Promise((resolve) => {
        registerSessionId(sessionId, getCallback(resolve));
      });
    },
  });
}