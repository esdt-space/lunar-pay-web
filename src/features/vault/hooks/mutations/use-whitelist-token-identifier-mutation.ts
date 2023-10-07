import { EsdtToken } from "@/features/tokens";
import { useMutation, useQueryClient } from "react-query";

import { protocolWhitelistedTokensQueryKey } from "@/features/vault/query-keys.ts";
import { addTokenToWhitelistInteraction } from "@/contracts/lunar-pay/protocol/interactions";

export function useWhitelistTokenIdentifierMutation() {
  const client = useQueryClient();

  return useMutation({
    mutationFn: (token: EsdtToken) => addTokenToWhitelistInteraction(token),
    onSuccess() {
      client.invalidateQueries({ queryKey: protocolWhitelistedTokensQueryKey });
    },
  });
}