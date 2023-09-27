import { Card } from "@/components/ui/card"
import { EsdtTokensList } from "@/features/tokens"
import { formatTokenBalance } from "@/theme/utils"

type Props = {
    vaultTokens: EsdtTokensList
}

export const DashboardLunarBalanceWidget = (props: Props) => {
    const { vaultTokens } = props

    const lunarBalance = vaultTokens.reduce((acc, val) => acc + Number(formatTokenBalance(val.balance, val.decimals)) , 0)

    return <Card className={'flex flex-col flex-1 p-8 gap-4 shadow'}>
        <h2 className={'text-sm font-semibold uppercase tracking-wide'}>Lunar Balance</h2>
        <div className={'text-2xl font-black'}>{lunarBalance}</div>
        <div className={'text-sm text-muted-foreground'}>
          Deposited balance is the overall sum of all the tokens available in the Lunar Pay Vault. This balance may
          not be accurate as balance rates are not available for all tokens.
         </div>
    </Card>
}
