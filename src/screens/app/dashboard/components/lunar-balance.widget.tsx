import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

import { formatTokenBalance } from "@/theme/utils"
import { useAccountEsdtTokensList } from "@/features/account-tokens/hooks";

export const DashboardLunarBalanceWidget = () => {
  //TODO: Need to get user's tokens from the vault
  const vaultTokens = useAccountEsdtTokensList();
  const lunarBalance = vaultTokens.reduce((acc, val) => acc + Number(formatTokenBalance(val.balance, val.decimals)) , 0)

  return (
    <Card className={'flex-1 shadow p-2'}>
      <CardHeader>
        <CardTitle className={'text-sm font-semibold uppercase tracking-wide'}>
          Lunar Balance
        </CardTitle>
      </CardHeader>

      <CardContent className={'space-y-3'}>
        <div className={'text-2xl font-black'}>{lunarBalance}</div>
        <div className={'text-sm text-muted-foreground'}>
          Deposited balance is the overall sum of all the tokens available in the Lunar Pay Vault. This balance may
          not be accurate as balance rates are not available for all tokens.
        </div>
      </CardContent>
    </Card>
  )
}
