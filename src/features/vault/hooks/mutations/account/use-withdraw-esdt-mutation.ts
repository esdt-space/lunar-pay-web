import { useMutation, useQueryClient } from "react-query";
import { useGetAccount } from "@multiversx/sdk-dapp/hooks";

import { Token } from "@/core/tokens";
import { accountBalancesQueryKey } from "@/features/vault/query-keys.ts";
import { withdrawEsdtInteraction } from "@/contracts/lunar-pay/account/interactions";
import { accountTokenOperationsQueryKey } from "@/features/token-operations/query-keys.ts";
import { useSuccessfulTransactionCallback } from "@/utils/hooks/use-successful-transaction-callback.ts";

type MutationProps = { token: Token; amount: number };

export function useWithdrawEsdtMutation() {
  const { address } = useGetAccount();
  const client = useQueryClient();

  const registerSessionId =  useSuccessfulTransactionCallback()

  const getCallback = (callback: (value: unknown) => void) => async (value: unknown) => {
    await client.invalidateQueries({queryKey: accountBalancesQueryKey(address)})
    await client.invalidateQueries({queryKey: accountTokenOperationsQueryKey(address)})
    callback(value);
  }

  return useMutation({
    mutationFn: (props: MutationProps) => withdrawEsdtInteraction(props.token, props.amount),
    onSuccess: (sessionId) => {
      if(!sessionId) return Promise.reject();

      return new Promise((resolve) => {
        registerSessionId(sessionId, getCallback(resolve));
      });
    },
  });
}