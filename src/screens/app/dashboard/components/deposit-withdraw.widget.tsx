import { useMemo, useState } from "react";
import { ArrowUpRight } from "lucide-react"

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs.tsx";

import { EsdtToken } from "@/features/tokens"
import { DisplayAmountTokenSelector } from "@/features/tokens/components"
import { depositEsdtInteraction, depositEgldInteraction, withdrawEsdtInteraction, withdrawEgldInteraction } from "@/features/vault/contract/interactions"
import { useWhitelistedVaultTokens } from "@/features/vault/hooks";
import { useAccountEsdtTokensList } from "@/features/account-tokens/hooks";

export const DepositWithdrawWidget = () => {
  const [amount, setAmount] = useState('');
  const [selectedToken, setSelectedToken] = useState<EsdtToken | undefined>(undefined);

  const accountTokens = useAccountEsdtTokensList();
  const whitelistedTokens = useWhitelistedVaultTokens();

  const depositTokensList = useMemo(() => {
    const whitelistedTokenIds = whitelistedTokens.map(item => item.identifier);

    return accountTokens.filter(item => whitelistedTokenIds.includes(item.identifier));
  }, [accountTokens, whitelistedTokens]);

  //TODO: Need to get user's tokens from the vault
  const userVaultTokens = useAccountEsdtTokensList();

  const depositToken = () => {
    if (!selectedToken) return
    
    if(selectedToken.name !== "EGLD")
      return depositEsdtInteraction(selectedToken, Number(amount))

    return depositEgldInteraction(Number(amount))
  }
    
  const withdrawToken = () => {
    if(!selectedToken) return
    
    if(selectedToken.name !== "EGLD")
      return withdrawEsdtInteraction(selectedToken, Number(amount))
    
    return withdrawEgldInteraction(Number(amount))
  }

  const onTabChange = () => {
    setAmount("");
    setSelectedToken(undefined);
  }

  return (
    <Card className={'flex flex-1 flex-col shadow'}>
      <Tabs defaultValue="deposit" className="flex flex-col space-y-0" >
        <TabsList className={'flex'}>
          <TabsTrigger className={'flex-1'} value="deposit" onClick={onTabChange}>
            Deposit
            <ArrowUpRight className={'ml-1 w-5 h-5'} />
          </TabsTrigger>
          <TabsTrigger className={'flex-1'} value="withdraw" onClick={onTabChange}>
            Withdraw
            <ArrowUpRight className={'ml-1 w-5 h-5 rotate-180'} />
          </TabsTrigger>
        </TabsList>

        <TabsContent className={'flex flex-1 flex-col p-8 gap-4'} value="deposit">
          <DisplayAmountTokenSelector
            value={selectedToken}
            tokens={depositTokensList}
            onChange={(token) => setSelectedToken(token)}
            amount={amount}
            onChangeAmount={(amount) => setAmount(amount)}
          />
          <div className={'text-sm text-muted-foreground'}>
            Deposit assets into the Lunar Pay Vault.
          </div>
          <Button onClick={depositToken}>Deposit</Button>
        </TabsContent>

        <TabsContent className={'flex flex-col flex-1 p-8 gap-4'} value="withdraw">
          <DisplayAmountTokenSelector
            value={selectedToken}
            tokens={userVaultTokens}
            onChange={(token) => setSelectedToken(token)}
            amount={amount}
            onChangeAmount={(amount) => setAmount(amount)}
          />
          <div className={'text-sm text-muted-foreground'}>
            Withdraw assets from the Lunar Pay Vault.
          </div>
          <Button onClick={withdrawToken}>Withdraw</Button>
        </TabsContent>
      </Tabs>
    </Card>
  )
}