import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input.tsx";
import { Button } from "@/components/ui/button.tsx";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs.tsx";

import { EsdtToken } from "@/features/tokens";
import { EsdtTokenSelector } from "@/features/tokens/components";
import { useAccountEsdtTokensList } from "@/features/account-tokens/hooks";

export function DashboardScreen() {
  const accountTokens = useAccountEsdtTokensList();
  const [selectedToken, setSelectedToken] = useState<EsdtToken | undefined>(undefined);

  return (
    <div className={'container mx-auto p-4 sm:p-12 xl:p-16'}>
      <div className={'flex flex-1 flex-col lg:flex-row gap-4 md:gap-8'}>
        <Card className={'flex flex-col flex-1 p-8 gap-4 shadow'}>
          <h2 className={'text-sm font-semibold uppercase tracking-wide'}>Lunar Balance</h2>
          <div className={'text-sm text-muted-foreground'}>
            Deposited balance is the overall sum of all the tokens available in the Lunar Pay Vault. This balance may not be accurate as balance rates are not available for all tokens.
          </div>
        </Card>

        <Card className={'flex flex-col flex-1 p-8 gap-4 shadow'}>
          <h2 className={'text-sm font-semibold uppercase tracking-wide'}>Assets</h2>
          <Input placeholder={'Search tokens'} />
          <div className={'text-sm text-muted-foreground'}>
            Deposited balance is the overall sum of all the tokens available in the Lunar Pay Vault. This balance may
            not be accurate as balance rates are not available for all tokens.
          </div>
        </Card>

        <Card className={'flex flex-1 flex-col shadow'}>
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
              <EsdtTokenSelector
                value={selectedToken}
                tokens={accountTokens}
                onChange={(token) => setSelectedToken(token)}
              />

              <div className={'text-sm text-muted-foreground'}>
                Deposit assets into your Lunar Pay Vault.
              </div>
              <Button>Deposit</Button>
            </TabsContent>
            <TabsContent className={'flex flex-col flex-1 p-8 gap-4'} value="password">
              Change your password here.
            </TabsContent>
          </Tabs>
        </Card>
      </div>
    </div>
  )
}
