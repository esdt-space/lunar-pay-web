import { useEffect, useState } from "react";
import { ArrowUpRight, Minus, Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs.tsx";

import { EsdtToken } from "@/features/tokens";
import { TokenSelectorWithAmount } from "@/features/tokens/components";
import { useAccountTokensAvailableToDeposit } from "@/features/account-tokens/hooks";
import { useAccountVaultTokens } from "@/features/vault/hooks";
import { getTokenErrorForValue } from "@/features/tokens/validation";

import {
  useDepositEgldMutation,
  useDepositEsdtMutation,
  useWithdrawEgldMutation,
  useWithdrawEsdtMutation
} from "@/features/vault/hooks/mutations";

enum WidgetTabs {
  Deposit = 'deposit',
  Withdraw = 'withdraw',
}

export const DepositWithdrawWidget = () => {
  const [amount, setAmount] = useState('');
  const [selectedToken, setSelectedToken] = useState<EsdtToken | undefined>(undefined);
  const [selectedTab, setSelectedTab] = useState<WidgetTabs>(WidgetTabs.Deposit)

  const { vaultTokens} = useAccountVaultTokens();
  const depositTokensList = useAccountTokensAvailableToDeposit();

  const { mutate: depositEgldHandler } = useDepositEgldMutation();
  const { mutate: depositEsdtHandler } = useDepositEsdtMutation();
  const { mutate: withdrawEgldHandler } = useWithdrawEgldMutation();
  const { mutate: withdrawEsdtHandler } = useWithdrawEsdtMutation();

  const canPerformOperation = selectedToken !== undefined && !getTokenErrorForValue(selectedToken, amount);

  const depositToken = () => {
    if (!selectedToken) return
    
    if(selectedToken.identifier !== "EGLD")
      return depositEsdtHandler({token: selectedToken, amount: Number(amount)})

    return depositEgldHandler(Number(amount))
  }
    
  const withdrawToken = () => {
    if(!selectedToken) return
    
    if(selectedToken.identifier !== "EGLD")
      return withdrawEsdtHandler({token: selectedToken, amount: Number(amount)})
    
    return withdrawEgldHandler(Number(amount))
  }

  const onTabChange = (value: string) => {
    setAmount("");
    setSelectedToken(undefined);
    setSelectedTab(value as WidgetTabs);
  }

  useEffect(() => {
    if(vaultTokens.length === 0 && selectedTab !== WidgetTabs.Deposit) {
      onTabChange(WidgetTabs.Deposit);
    }
  }, [vaultTokens, selectedTab]);

  return (
    <Card className={'flex flex-col flex-1 shadow'}>
      <Tabs value={selectedTab} className="flex flex-col space-y-0" onValueChange={onTabChange}>
        <TabsList className={'flex'}>
          <TabsTrigger className={'flex-1'} value={WidgetTabs.Deposit}>
            Deposit
            <ArrowUpRight className={'ml-1 w-5 h-5'} />
          </TabsTrigger>
          <TabsTrigger className={'flex-1'} value={WidgetTabs.Withdraw} disabled={vaultTokens.length === 0}>
            Withdraw
            <ArrowUpRight className={'ml-1 w-5 h-5 rotate-180'} />
          </TabsTrigger>
        </TabsList>

        <CardContent className={'p-8'}>
          <TabsContent className={'flex flex-1 flex-col gap-4 mt-0'} value={WidgetTabs.Deposit}>
            <TokenSelectorWithAmount
              token={selectedToken}
              tokens={depositTokensList}
              onTokenChange={(token) => setSelectedToken(token)}
              amount={amount}
              onAmountChange={(amount) => setAmount(amount)}
            />
            <div className={'text-sm text-muted-foreground'}>
              Deposit assets into the Lunar Pay Vault.
            </div>
            <Button size={'sm'} onClick={depositToken} disabled={!canPerformOperation}>
              Deposit
              <Plus className={'ml-1 w-4 h-4'} />
            </Button>
          </TabsContent>

          <TabsContent className={'flex flex-col flex-1 gap-4 mt-0'} value={WidgetTabs.Withdraw}>
            <TokenSelectorWithAmount
              token={selectedToken}
              tokens={vaultTokens}
              onTokenChange={(token) => setSelectedToken(token)}
              amount={amount}
              onAmountChange={(amount) => setAmount(amount)}
            />
            <div className={'text-sm text-muted-foreground'}>
              Withdraw assets from the Lunar Pay Vault.
            </div>
            <Button size={'sm'} onClick={withdrawToken} disabled={!canPerformOperation}>
              Withdraw
              <Minus className={'ml-1 w-4 h-4'} />
            </Button>
          </TabsContent>
        </CardContent>
      </Tabs>
    </Card>
  )
}