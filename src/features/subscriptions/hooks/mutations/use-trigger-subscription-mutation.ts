import { useMutation, useQueryClient } from "react-query";
import { useGetAccount } from "@multiversx/sdk-dapp/hooks";

import { accountBalancesQueryKey } from "@/features/vault/query-keys.ts";
import { accountTokenOperationsQueryKey } from "@/features/token-operations/query-keys.ts";
import { triggerPaymentAgreementInteraction } from "@/contracts/lunar-pay/agreements/interactions";
import { useSuccessfulTransactionCallback } from "@/utils/hooks/use-successful-transaction-callback.ts";
import {
  accountSubscriptionById,
  accountSubscriptionsSignedQueryKey,
  accountSubscriptionsCreatedQueryKey,
} from "@/features/subscriptions/query-keys.ts";

export function useTriggerPaymentAgreementMutation(internalAgreementId: string | undefined) {
  const client = useQueryClient();
  const { address } = useGetAccount();

  const registerSessionId =  useSuccessfulTransactionCallback()

  const getCallback = (callback: (value: unknown) => void) => async (value: unknown) => {
    if(!internalAgreementId) return;
    
    await client.invalidateQueries({queryKey: accountBalancesQueryKey(address)})
    await client.invalidateQueries({queryKey: accountTokenOperationsQueryKey(address)})
    await client.invalidateQueries({queryKey: accountSubscriptionById(address, internalAgreementId)})
    await client.invalidateQueries({queryKey: accountSubscriptionsSignedQueryKey(address)})
    await client.invalidateQueries({queryKey: accountSubscriptionsCreatedQueryKey(address)})

    callback(value);
  }

  return useMutation({
    mutationFn: (id: number) => triggerPaymentAgreementInteraction(id),
    onSuccess(sessionId) {
      if(!sessionId) return Promise.reject();

      return new Promise((resolve) => {
        registerSessionId(sessionId, getCallback(resolve));
      });
    },
  });
}