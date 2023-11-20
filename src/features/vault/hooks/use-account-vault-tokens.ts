import { useTokensList } from "@/core/tokens/hooks/use-tokens.ts";

import { useAccountBalancesQuery } from "./queries/use-account-balances-query.ts";

export function useAccountVaultTokens() {
  const tokens = useTokensList();
  const props = useAccountBalancesQuery();
  const { data: accountBalancesList = [] } = props;

  const accountVaultTokensMap: Record<string, string> = {};
  const accountVaultTokenIdentifiers = accountBalancesList.map(item => {
    accountVaultTokensMap[item.identifier] = item.balance;

    return item.identifier
  });

  const vaultTokens = tokens.filter(token => accountVaultTokenIdentifiers.includes(token.identifier)).map(item => {
    item.balance = accountVaultTokensMap[item.identifier];

    return item;
  })

  return { vaultTokens, ...props };
}