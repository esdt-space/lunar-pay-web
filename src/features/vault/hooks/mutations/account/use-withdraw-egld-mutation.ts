import { useMutation, useQueryClient } from "react-query";
import { useGetAccount } from "@multiversx/sdk-dapp/hooks";

import { accountBalancesQueryKey } from "@/features/vault/query-keys.ts";
import { withdrawEgldInteraction } from "@/contracts/lunar-pay/account/interactions";
import { accountTokenOperationsQueryKey } from "@/features/token-operations/query-keys.ts";
import { useSuccessfulTransactionCallback } from "@/utils/hooks/use-successful-transaction-callback.ts";

export function useWithdrawEgldMutation() {
  const { address } = useGetAccount();
  const client = useQueryClient();

  const registerSessionId =  useSuccessfulTransactionCallback()

  const getCallback = (callback: () => void) => async () => {
    await client.invalidateQueries({queryKey: accountBalancesQueryKey(address)})
    await client.invalidateQueries({queryKey: accountTokenOperationsQueryKey(address)})
    callback();
  }

  return useMutation({
    mutationFn: (amount: number) => withdrawEgldInteraction(amount),
    onSuccess: (sessionId) => {
      if(!sessionId) return Promise.reject();

      return new Promise((resolve) => {
        registerSessionId(sessionId, getCallback(resolve));
      });
    },
  });
}