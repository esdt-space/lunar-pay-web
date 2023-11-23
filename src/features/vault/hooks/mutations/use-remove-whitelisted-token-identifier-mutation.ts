import { Token } from "@/core/tokens";
import { useMutation, useQueryClient } from "react-query";

import { protocolWhitelistedTokensQueryKey } from "@/features/vault/query-keys.ts";
import { removeTokenFromWhitelistInteraction } from "@/contracts/lunar-pay/protocol/interactions";

export function useRemoveWhitelistedTokenIdentifierMutation() {
  const client = useQueryClient();

  return useMutation({
    mutationFn: (token: Token) => removeTokenFromWhitelistInteraction(token),
    onSuccess() {
      client.invalidateQueries({ queryKey: protocolWhitelistedTokensQueryKey });
    },
  });
}