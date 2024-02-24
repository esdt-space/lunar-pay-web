import { useMutation, useQueryClient } from "react-query";
import { useGetAccount } from "@multiversx/sdk-dapp/hooks";

import { accountBalancesQueryKey } from "@/features/vault/query-keys.ts";
import { useSuccessfulTransactionCallback } from "@/utils/hooks/use-successful-transaction-callback.ts";

import { PaymentInteractionOptions } from "@/contracts/lunar-pay/payments/types";
import { paymentInteraction } from "@/contracts/lunar-pay/payments/interactions";

export function usePaymentMutation() {
  const client = useQueryClient();
  const { address } = useGetAccount();

  const registerSessionId =  useSuccessfulTransactionCallback()

  const getCallback = (callback: (value: unknown) => void) => async (value: unknown) => {
    await client.invalidateQueries({queryKey: accountBalancesQueryKey(address)})
    callback(value);
  }

  return useMutation({
    mutationFn: (options: PaymentInteractionOptions) => paymentInteraction(options),
    onSuccess(sessionId) {
      if(!sessionId) return Promise.reject();

      return new Promise((resolve) => {
        registerSessionId(sessionId, getCallback(resolve));
      });
    },
    onError() {

    },
  });
}