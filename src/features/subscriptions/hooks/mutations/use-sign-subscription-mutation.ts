import { useMutation, useQueryClient } from "react-query";
import { useGetAccount } from "@multiversx/sdk-dapp/hooks";

import { accountBalancesQueryKey } from "@/features/vault/query-keys.ts";
import { accountTokenOperationsQueryKey } from "@/features/token-operations/query-keys.ts";
import { signSubscriptionInteraction } from "@/contracts/lunar-pay/subscriptions/interactions";
import { useSuccessfulTransactionCallback } from "@/utils/hooks/use-successful-transaction-callback.ts";
import {
  accountSubscriptionById,
  accountSubscriptionsSignedQueryKey
} from "@/features/subscriptions/query-keys.ts";

export function useSignSubscriptionMutation(internalSubscriptionId: string | undefined, metadata: string) {
  const client = useQueryClient();
  const { address } = useGetAccount();

  const registerSessionId =  useSuccessfulTransactionCallback()

  const getCallback = (callback: (value: unknown) => void) => async (value: unknown) => {
    if(!internalSubscriptionId) return;

    await client.invalidateQueries({queryKey: accountBalancesQueryKey(address)})
    await client.invalidateQueries({queryKey: accountTokenOperationsQueryKey(address)})
    await client.invalidateQueries({queryKey: accountSubscriptionById(address, internalSubscriptionId)})
    await client.invalidateQueries({queryKey: accountSubscriptionsSignedQueryKey(address)})

    callback(value);
  }

  return useMutation({
    mutationFn: (id: number) => signSubscriptionInteraction(id, metadata),
    onSuccess(sessionId) {
      if(!sessionId) return Promise.reject();

      return new Promise((resolve) => {
        registerSessionId(sessionId, getCallback(resolve));
      });
    },
  })
}