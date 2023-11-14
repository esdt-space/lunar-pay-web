import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs.tsx";

import { useAccountVaultTokens } from "@/features/vault/hooks";

import { DepositAssetsComponent } from "./deposit-component";
import { WithdrawAssetsComponent } from "./withdraw-component";

enum WidgetTabs {
  Deposit = 'deposit',
  Withdraw = 'withdraw',
}

export const DepositWithdrawWidget = () => {
  const [selectedTab, setSelectedTab] = useState<WidgetTabs>(WidgetTabs.Deposit)

  const { vaultTokens} = useAccountVaultTokens();

  const onTabChange = (value: string) => {
    setSelectedTab(value as WidgetTabs);
  }

  useEffect(() => {
    if(vaultTokens.length === 0 && selectedTab !== WidgetTabs.Deposit) {
      onTabChange(WidgetTabs.Deposit);
    }
  }, [vaultTokens, selectedTab]);

  return (
    <Card className={'flex flex-col flex-1'}>
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
            <DepositAssetsComponent />
          </TabsContent>

          <TabsContent className={'flex flex-col flex-1 gap-4 mt-0'} value={WidgetTabs.Withdraw}>
            <WithdrawAssetsComponent />
          </TabsContent>
        </CardContent>
      </Tabs>
    </Card>
  )
}