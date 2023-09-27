import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { EsdtToken, EsdtTokensList } from "@/features/tokens"
import { DisplayAmountTokenSelector } from "@/features/tokens/components"
import { depositEsdtInteraction, depositEgldInteraction, withdrawEsdtInteraction, withdrawEgldInteraction } from "@/features/vault/contract/interactions"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs.tsx";
import { ArrowUpRight } from "lucide-react"

type Props = {
    selectedAccountToken?: EsdtToken 
    selectedVaultToken?: EsdtToken 
    accountTokens: EsdtTokensList
    vaultTokens: EsdtTokensList
    selectedAccountAmount: string
    selectedVaultAmount: string
    setSelectedAccountToken: (token: EsdtToken) => void
    setSelectedVaultToken: (token: EsdtToken) => void
    setSelectedAccountAmount: (input: string) => void
    setSelectedVaultAmount: (input: string) => void
}

export const DashboardTokenExchangeWidget = (props: Props) => {
    const { 
        selectedAccountToken, 
        selectedVaultToken, 
        accountTokens, 
        vaultTokens, 
        selectedAccountAmount, 
        selectedVaultAmount, 
        setSelectedAccountToken, 
        setSelectedVaultToken, 
        setSelectedAccountAmount, 
        setSelectedVaultAmount, 
    } = props

    const depositToken = () => {
        if (selectedAccountToken === undefined) {
          return
        }
    
        if(selectedAccountToken.name !== "EGLD") {
          depositEsdtInteraction(selectedAccountToken, Number(selectedAccountAmount))
          return
        }
    
        depositEgldInteraction(Number(selectedAccountAmount))
      }
    
      const withdrawToken = () => {
        if(selectedVaultToken === undefined) {
          return
        }
    
        if(selectedVaultToken.name !== "EGLD") {
          withdrawEsdtInteraction(selectedVaultToken, Number(selectedVaultAmount))
          return
        }
    
        withdrawEgldInteraction(Number(selectedVaultAmount))
      }

    return <Card className={'flex flex-1 flex-col shadow'}>
    <Tabs defaultValue="account" className="flex flex-col space-y-0">
        <TabsList className={'flex'}>
            <TabsTrigger className={'flex-1'} value="account">
                Deposit
                <ArrowUpRight className={'ml-1 w-5 h-5'} />
            </TabsTrigger>
            <TabsTrigger className={'flex-1'} value="password">
                Withdraw
                <ArrowUpRight className={'ml-1 w-5 h-5 rotate-180'} />
            </TabsTrigger>
        </TabsList>
      <TabsContent className={'flex flex-1 flex-col p-8 gap-4'} value="account">
        <DisplayAmountTokenSelector
          value={selectedAccountToken}
          tokens={accountTokens}
          amount={selectedAccountAmount}
          onChange={(token) => setSelectedAccountToken(token)}
          onChangeAmount={(amount) => setSelectedAccountAmount(amount)}
        />
        <div className={'text-sm text-muted-foreground'}>
          Deposit assets into your Lunar Pay Vault.
        </div>
        <Button onClick={depositToken}>Deposit</Button>
      </TabsContent>
      <TabsContent className={'flex flex-col flex-1 p-8 gap-4'} value="password">
        <DisplayAmountTokenSelector
          value={selectedVaultToken}
          tokens={vaultTokens}
          amount={selectedVaultAmount}
          onChange={(token) => setSelectedVaultToken(token)}
          onChangeAmount={(amount) => setSelectedVaultAmount(amount)}
        />
        <div className={'text-sm text-muted-foreground'}>
          Withdraw assets from your Lunar Pay Vault.
        </div>
        <Button onClick={withdrawToken}>Withdraw</Button>
      </TabsContent>
    </Tabs>
  </Card>
}