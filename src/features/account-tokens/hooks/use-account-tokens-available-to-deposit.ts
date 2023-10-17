import { useMemo} from "react";
import { useWhitelistedVaultTokens } from "@/features/vault/hooks";

import { useAccountTokensList } from "./use-account-tokens.ts";

export function useAccountTokensAvailableToDeposit() {
  const accountTokens = useAccountTokensList();
  const whitelistedTokens = useWhitelistedVaultTokens();

  return useMemo(() => {
    const whitelistedTokenIds = whitelistedTokens.map(item => item.identifier);

    return accountTokens.filter(item => whitelistedTokenIds.includes(item.identifier));
  }, [accountTokens, whitelistedTokens]);
}