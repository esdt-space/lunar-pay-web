import { useMemo, useState } from "react";
import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs.tsx";

import { EsdtToken } from "@/features/tokens";
import { TokenSelectorWithAmount } from "@/features/tokens/components";
import { useAccountTokensList } from "@/features/account-tokens/hooks";
import { useWhitelistedVaultTokens, useAccountVaultTokens } from "@/features/vault/hooks";

import {
  useDepositEgldMutation,
  useDepositEsdtMutation,
  useWithdrawEgldMutation,
  useWithdrawEsdtMutation
} from "@/features/vault/hooks/mutations";

export const DepositWithdrawWidget = () => {
  const [amount, setAmount] = useState('');
  const [selectedToken, setSelectedToken] = useState<EsdtToken | undefined>(undefined);

  const accountTokens = useAccountTokensList();
  const userVaultTokens = useAccountVaultTokens();
  const whitelistedTokens = useWhitelistedVaultTokens();

  const depositTokensList = useMemo(() => {
    const whitelistedTokenIds = whitelistedTokens.map(item => item.identifier);

    return accountTokens.filter(item => whitelistedTokenIds.includes(item.identifier));
  }, [accountTokens, whitelistedTokens]);

  const { mutate: depositEgldHandler } = useDepositEgldMutation();
  const { mutate: depositEsdtHandler } = useDepositEsdtMutation();
  const { mutate: withdrawEgldHandler } = useWithdrawEgldMutation();
  const { mutate: withdrawEsdtHandler } = useWithdrawEsdtMutation();

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

  const onTabChange = () => {
    setAmount("");
    setSelectedToken(undefined);
  }

  return (
    <Card className={'flex flex-col flex-1 shadow'}>
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

        <CardContent className={'p-8'}>
          <TabsContent className={'flex flex-1 flex-col gap-4 mt-0'} value="deposit">
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
            <Button onClick={depositToken}>Deposit</Button>
          </TabsContent>

          <TabsContent className={'flex flex-col flex-1 gap-4 mt-0'} value="withdraw">
            <TokenSelectorWithAmount
              token={selectedToken}
              tokens={userVaultTokens}
              onTokenChange={(token) => setSelectedToken(token)}
              amount={amount}
              onAmountChange={(amount) => setAmount(amount)}
            />
            <div className={'text-sm text-muted-foreground'}>
              Withdraw assets from the Lunar Pay Vault.
            </div>
            <Button onClick={withdrawToken}>Withdraw</Button>
          </TabsContent>
        </CardContent>
      </Tabs>
    </Card>
  )
}