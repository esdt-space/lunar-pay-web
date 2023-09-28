import { useTokensList } from "@/features/tokens/hooks/use-tokens.ts";

import { useAccountBalancesQuery } from "./queries/use-account-balances-query.ts";

export function useAccountVaultTokens() {
  const tokens = useTokensList();
  const { data: accountBalancesList = [] } = useAccountBalancesQuery();

  const accountVaultTokensMap: Record<string, string> = {};
  const accountVaultTokenIdentifiers = accountBalancesList.map(item => {
    accountVaultTokensMap[item.identifier] = item.balance;

    return item.identifier
  });

  return tokens.filter(token => accountVaultTokenIdentifiers.includes(token.identifier)).map(item => {
    item.balance = accountVaultTokensMap[item.identifier];

    return item;
  })
}