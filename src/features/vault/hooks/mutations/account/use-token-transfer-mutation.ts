import { useMutation, useQueryClient } from "react-query";
import { useGetAccount } from "@multiversx/sdk-dapp/hooks";

import { EsdtToken } from "@/features/tokens";
import { accountBalancesQueryKey } from "@/features/vault/query-keys.ts";
import {transferTokenInteraction} from "@/contracts/lunar-pay/account/interactions";

type MutationProps = { token: EsdtToken; amount: number; receiver: string };

export function useTokenTransferMutation() {
  const { address } = useGetAccount();
  const client = useQueryClient();

  return useMutation({
    mutationFn: (props: MutationProps) => transferTokenInteraction(props.token, props.amount, props.receiver),
    onSuccess() {
      client.invalidateQueries({ queryKey: accountBalancesQueryKey(address) });
    },
  });
}