import { useMutation, useQueryClient } from "react-query";
import { useGetAccount } from "@multiversx/sdk-dapp/hooks";

import { accountBalancesQueryKey } from "@/features/vault/query-keys.ts";
import { accountTokenOperationsQueryKey } from "@/features/token-operations/query-keys.ts";
import { signPaymentAgreementInteraction } from "@/contracts/lunar-pay/agreements/interactions";
import { useSuccessfulTransactionCallback } from "@/utils/hooks/use-successful-transaction-callback.ts";
import {
  accountPaymentAgreementById,
  accountPaymentAgreementsSignedQueryKey
} from "@/features/payment-agreements/query-keys.ts";

export function useSignPaymentAgreementMutation(internalAgreementId: string | undefined, metadata: string) {
  const client = useQueryClient();
  const { address } = useGetAccount();

  const registerSessionId =  useSuccessfulTransactionCallback()

  const getCallback = (callback: (value: unknown) => void) => async (value: unknown) => {
    if(!internalAgreementId) return;

    await client.invalidateQueries({queryKey: accountBalancesQueryKey(address)})
    await client.invalidateQueries({queryKey: accountTokenOperationsQueryKey(address)})
    await client.invalidateQueries({queryKey: accountPaymentAgreementById(address, internalAgreementId)})
    await client.invalidateQueries({queryKey: accountPaymentAgreementsSignedQueryKey(address)})

    callback(value);
  }

  return useMutation({
    mutationFn: (id: number) => signPaymentAgreementInteraction(id, metadata),
    onSuccess(sessionId) {
      if(!sessionId) return Promise.reject();

      return new Promise((resolve) => {
        registerSessionId(sessionId, getCallback(resolve));
      });
    },
  })
}