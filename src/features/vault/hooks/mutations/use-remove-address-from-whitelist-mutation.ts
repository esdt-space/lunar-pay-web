import { useMutation, useQueryClient } from "react-query";

import { protocolWhitelistedAddressesQueryKey } from "@/features/vault/query-keys.ts";
import { removeAddressFromWhitelistInteraction } from "@/contracts/lunar-pay/protocol/interactions";

export function useRemoveAddressFromWhitelistMutation() {
  const client = useQueryClient();

  return useMutation({
    mutationFn: (address: string) => removeAddressFromWhitelistInteraction(address),
    onSuccess() {
      client.invalidateQueries({ queryKey: protocolWhitelistedAddressesQueryKey });
    },
  });
}