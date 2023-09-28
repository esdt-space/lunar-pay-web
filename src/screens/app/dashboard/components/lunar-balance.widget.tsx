import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

import { useAccountVaultTokens } from "@/features/vault/hooks";

export const DashboardLunarBalanceWidget = () => {
  const vaultTokens = useAccountVaultTokens();

  let lunarBalance = vaultTokens.reduce((acc, val) => {
    if(val.valueUsd !== undefined) {
      acc += val.valueUsd
    }

    return acc
  }, 0)

  return (
    <Card className={'flex-1 shadow p-2'}>
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
