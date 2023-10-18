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

  const invalidateQueries = () => {
    client.invalidateQueries({queryKey: accountBalancesQueryKey(address)})
    client.invalidateQueries({queryKey: accountTokenOperationsQueryKey(address)})
  }

  const registerSessionId =  useSuccessfulTransactionCallback(invalidateQueries)

  return useMutation({
    mutationFn: (options: AgreementInteractionOptions) => createPaymentAgreementInteraction(options),
    onSuccess(sessionId) {
      registerSessionId(sessionId)
    },
  });
}