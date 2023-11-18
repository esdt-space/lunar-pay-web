import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

import { useTokensPrice } from "@/core/tokens";
import { useAccountVaultTokens } from "@/features/vault/hooks";

export const DashboardLunarBalanceWidget = () => {
  const { vaultTokens } = useAccountVaultTokens();
  const lunarBalance = useTokensPrice(vaultTokens);

  return (
    <Card className={'flex-1 p-2'}>
      <CardHeader>
        <CardTitle className={'text-sm font-semibold uppercase tracking-wide'}>
          Lunar Balance
        </CardTitle>
      </CardHeader>

      <CardContent className={'space-y-3'}>
        <div className={'text-2xl font-black'}>${lunarBalance}</div>
        <div className={'text-sm text-muted-foreground'}>
          Deposited balance is the overall sum of all the tokens available in the Lunar Pay Vault. This balance may
          not be accurate as balance rates are not available for all tokens.
        </div>
      </CardContent>
    </Card>
  )
}
