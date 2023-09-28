import {useEsdtTokensList} from "@/features/tokens";
import {
  useWhitelistedTokenIdentifiersQuery
} from "./queries/use-whitelisted-token-identifiers-query.ts";

export function useWhitelistedVaultTokens() {
  const tokens = useEsdtTokensList();
  const { data: whitelistedTokenIdentifiers = [] } = useWhitelistedTokenIdentifiersQuery();

  return tokens.filter(token => whitelistedTokenIdentifiers.includes(token.identifier));
}