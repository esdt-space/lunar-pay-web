import { useMutation, useQueryClient } from "react-query";

import { protocolWhitelistedAddressesQueryKey } from "@/features/vault/query-keys.ts";
import { addAddressToWhitelistInteraction } from "@/contracts/lunar-pay/protocol/interactions";

export function useAddAddressToWhitelistMutation() {
  const client = useQueryClient();

  return useMutation({
    mutationFn: (address: string) => addAddressToWhitelistInteraction(address),
    onSuccess() {
      client.invalidateQueries({ queryKey: protocolWhitelistedAddressesQueryKey });
    },
  });
}