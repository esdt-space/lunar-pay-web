import { useMutation, useQueryClient } from "react-query";
import { useGetAccount } from "@multiversx/sdk-dapp/hooks";

import { EsdtToken } from "@/features/tokens";
import { accountBalancesQueryKey } from "@/features/vault/query-keys.ts";
import { withdrawEsdtInteraction } from "@/contracts/lunar-pay/account/interactions";

type MutationProps = { token: EsdtToken; amount: number };

export function useWithdrawEsdtMutation() {
  const { address } = useGetAccount();
  const client = useQueryClient();

  return useMutation({
    mutationFn: (props: MutationProps) => withdrawEsdtInteraction(props.token, props.amount),
    onSuccess() {
      client.invalidateQueries({ queryKey: accountBalancesQueryKey(address) });
    },
  });
}