import {
  useWhitelistedTokenIdentifiersQuery
} from "./queries/use-whitelisted-token-identifiers-query.ts";
import { useTokensList } from "@/features/tokens/hooks/use-tokens.ts";

export function useWhitelistedVaultTokens() {
  const tokens = useTokensList();
  const { data: whitelistedTokenIdentifiers = [] } = useWhitelistedTokenIdentifiersQuery();

  return tokens.filter(token => whitelistedTokenIdentifiers.includes(token.identifier));
}