import { useMutation, useQueryClient } from "react-query";
import { useGetAccount } from "@multiversx/sdk-dapp/hooks";

import { EsdtToken } from "@/features/tokens";
import { accountBalancesQueryKey } from "@/features/vault/query-keys.ts";
import { transferTokenInteraction } from "@/contracts/lunar-pay/account/interactions";
import { accountTokenOperationsQueryKey } from "@/features/token-operations/query-keys.ts";
import { useSuccessfulTransactionCallback } from "@/utils/hooks/use-successful-transaction-callback.ts";

type MutationProps = { token: EsdtToken; amount: number; receiver: string };

export function useTokenTransferMutation() {
  const { address } = useGetAccount();
  const client = useQueryClient();

  const invalidateQueries = () => {
    client.invalidateQueries({queryKey: accountBalancesQueryKey(address)})
    client.invalidateQueries({queryKey: accountTokenOperationsQueryKey(address)})
  }

  const registerSessionId =  useSuccessfulTransactionCallback(invalidateQueries)

  return useMutation({
    mutationFn: (props: MutationProps) => transferTokenInteraction(props.token, props.amount, props.receiver),
    onSuccess: (sessionId) => registerSessionId(sessionId),
  });
}