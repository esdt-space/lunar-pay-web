import { Card } from "@/components/ui/card"
import { formatTokenBalance } from "@/theme/utils"
import { useAccountEsdtTokensList } from "@/features/account-tokens/hooks";

export const DashboardLunarBalanceWidget = () => {
  //TODO: Need to get user's tokens from the vault
  const vaultTokens = useAccountEsdtTokensList();
  const lunarBalance = vaultTokens.reduce((acc, val) => acc + Number(formatTokenBalance(val.balance, val.decimals)) , 0)

  return (
    <Card className={'flex flex-col flex-1 p-8 gap-4 shadow'}>
      <h2 className={'text-sm font-semibold uppercase tracking-wide'}>Lunar Balance</h2>
      <div className={'text-2xl font-black'}>{lunarBalance}</div>
      <div className={'text-sm text-muted-foreground'}>
        Deposited balance is the overall sum of all the tokens available in the Lunar Pay Vault. This balance may
        not be accurate as balance rates are not available for all tokens.
      </div>
    </Card>
  )
}
