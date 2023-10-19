import { useMutation, useQueryClient } from "react-query";
import { useGetAccount } from "@multiversx/sdk-dapp/hooks";

import { AgreementInteractionOptions } from "@/contracts/lunar-pay/agreements/types";

import { accountBalancesQueryKey } from "@/features/vault/query-keys.ts";
import { accountTokenOperationsQueryKey } from "@/features/token-operations/query-keys.ts";
import { createPaymentAgreementInteraction } from "@/contracts/lunar-pay/agreements/interactions";
import { useSuccessfulTransactionCallback } from "@/utils/hooks/use-successful-transaction-callback.ts";

export function useCreatePaymentAgreementMutation() {
  const client = useQueryClient();
  const { address } = useGetAccount();

  const registerSessionId =  useSuccessfulTransactionCallback()

  const getCallback = (callback: () => void) => async () => {
    await client.invalidateQueries({queryKey: accountBalancesQueryKey(address)})
    await client.invalidateQueries({queryKey: accountTokenOperationsQueryKey(address)})
    callback();
  }

  return useMutation({
    mutationFn: (options: AgreementInteractionOptions) => createPaymentAgreementInteraction(options),
    onSuccess(sessionId) {
      if(!sessionId) return Promise.reject();

      return new Promise((resolve) => {
        registerSessionId(sessionId, getCallback(resolve));
      });
    },
  });
}