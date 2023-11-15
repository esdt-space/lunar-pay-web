import { useMutation, useQueryClient } from "react-query";
import { useGetAccount } from "@multiversx/sdk-dapp/hooks";

import { AgreementInteractionOptions } from "@/contracts/lunar-pay/agreements/types";

import { accountBalancesQueryKey } from "@/features/vault/query-keys.ts";
import { accountTokenOperationsQueryKey } from "@/features/token-operations/query-keys.ts";
import { createPaymentAgreementInteraction } from "@/contracts/lunar-pay/agreements/interactions";
import { accountPaymentAgreementsCreatedQueryKey } from "@/features/payment-agreements/query-keys.ts";
import { useSuccessfulTransactionCallback } from "@/utils/hooks/use-successful-transaction-callback.ts";

export function useCreatePaymentAgreementMutation() {
  const client = useQueryClient();
  const { address } = useGetAccount();

  const registerSessionId =  useSuccessfulTransactionCallback()

  const getCallback = (callback: (value: unknown) => void) => async (value: unknown) => {
    await client.invalidateQueries({queryKey: accountBalancesQueryKey(address)})
    await client.invalidateQueries({queryKey: accountTokenOperationsQueryKey(address)})
    await client.invalidateQueries({queryKey: accountPaymentAgreementsCreatedQueryKey(address)})
    callback(value);
  }

  return useMutation({
    mutationFn: (options: AgreementInteractionOptions) => createPaymentAgreementInteraction(options),
    onSuccess(sessionId) {
      if(!sessionId) return Promise.reject();

      client.resetQueries({queryKey: accountPaymentAgreementsCreatedQueryKey(address), exact: true})

      return new Promise((resolve) => {
        registerSessionId(sessionId, getCallback(resolve));
      });
    },
  });
}