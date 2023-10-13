import { useMutation, useQueryClient } from "react-query";
import { useGetAccount } from "@multiversx/sdk-dapp/hooks";

import { accountBalancesQueryKey } from "@/features/vault/query-keys.ts";
import { depositEgldInteraction } from "@/contracts/lunar-pay/account/interactions";

export function useDepositEgldMutation() {
  const { address } = useGetAccount();
  const client = useQueryClient();

  return useMutation({
    mutationFn: (amount: number) => depositEgldInteraction(amount),
    onSuccess() {
      client.invalidateQueries({ queryKey: accountBalancesQueryKey(address) });
    },
  });
}