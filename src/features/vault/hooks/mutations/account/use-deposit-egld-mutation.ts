import { useMutation, useQueryClient } from "react-query";
import { useGetAccount } from "@multiversx/sdk-dapp/hooks";

import { accountBalancesQueryKey } from "@/features/vault/query-keys.ts";
import { depositEgldInteraction } from "@/contracts/lunar-pay/account/interactions";
import { accountTokenOperationsQueryKey } from "@/features/token-operations/query-keys.ts";
import { useSuccessfulTransactionCallback } from "@/utils/hooks/use-successful-transaction-callback.ts";

export function useDepositEgldMutation() {
  const client = useQueryClient();
  const { address } = useGetAccount();

  const registerSessionId =  useSuccessfulTransactionCallback()

  const getCallback = (callback: (value: unknown) => void) => async (value: unknown) => {
    await client.invalidateQueries({queryKey: accountBalancesQueryKey(address)})
    await client.invalidateQueries({queryKey: accountTokenOperationsQueryKey(address)})
    callback(value);
  }

  return useMutation({
    mutationFn: (amount: number) => depositEgldInteraction(amount),
    onSuccess(sessionId) {
      if(!sessionId) return Promise.reject();

      return new Promise((resolve) => {
        registerSessionId(sessionId, getCallback(resolve));
      });
    },
  });
}