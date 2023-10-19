import { useMutation, useQueryClient } from "react-query";
import { useGetAccount } from "@multiversx/sdk-dapp/hooks";

import { accountBalancesQueryKey } from "@/features/vault/query-keys.ts";
import { accountTokenOperationsQueryKey } from "@/features/token-operations/query-keys.ts";
import { triggerPaymentAgreementInteraction } from "@/contracts/lunar-pay/agreements/interactions";
import { useSuccessfulTransactionCallback } from "@/utils/hooks/use-successful-transaction-callback.ts";
import {
  accountPaymentAgreementById,
  accountPaymentAgreementsSignedQueryKey,
  accountPaymentAgreementsCreatedQueryKey,
} from "@/features/payment-agreements/query-keys.ts";

export function useTriggerPaymentAgreementMutation(agreementId: string) {
  const client = useQueryClient();
  const { address } = useGetAccount();

  const registerSessionId =  useSuccessfulTransactionCallback()

  const getCallback = (callback: () => void) => async () => {
    await client.invalidateQueries({queryKey: accountBalancesQueryKey(address)})
    await client.invalidateQueries({queryKey: accountTokenOperationsQueryKey(address)})
    await client.invalidateQueries({queryKey: accountPaymentAgreementById(address, agreementId)})
    await client.invalidateQueries({queryKey: accountPaymentAgreementsSignedQueryKey(address)})
    await client.invalidateQueries({queryKey: accountPaymentAgreementsCreatedQueryKey(address)})

    callback();
  }

  return useMutation({
    mutationFn: () => triggerPaymentAgreementInteraction(agreementId),
    onSuccess(sessionId) {
      if(!sessionId) return Promise.reject();

      return new Promise((resolve) => {
        registerSessionId(sessionId, getCallback(resolve));
      });
    },
  });
}