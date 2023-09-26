import { useMemo, useState } from "react";
import { ArrowUpRight, Wallet } from "lucide-react";

import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input.tsx";
import { Button } from "@/components/ui/button.tsx";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs.tsx";

import { EsdtToken } from "@/features/tokens";
import { useAccountEsdtTokensList } from "@/features/account-tokens/hooks";
import { DisplayAmountTokenSelector } from "@/features/tokens/components";
import BigNumber from "bignumber.js";
import { depositEgldInteraction, depositEsdtInteraction, withdrawEgldInteraction, withdrawEsdtInteraction } from "@/features/vault/contract/interactions";

export function DashboardScreen() {
  const accountTokens = useAccountEsdtTokensList();
  const [selectedAccountToken, setSelectedAccountToken] = useState<EsdtToken | undefined>(undefined);
  const [selectedVaultToken, setSelectedVaultToken] = useState<EsdtToken | undefined>(undefined);

  const [selectedAccountAmount, setSelectedAccountAmount] = useState<string>("");
  const [selectedVaultAmount, setSelectedVaultAmount] = useState<string>("");

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

  const [assetSearchValue, setAssetSearchValue] = useState('');

  const vaultTokens = useAccountEsdtTokensList();
  const filteredVaultTokens = useMemo(() => {
    if(assetSearchValue.length === 0) return vaultTokens;

    return vaultTokens.filter(item =>
      item.name.includes(assetSearchValue) || item.identifier.includes(assetSearchValue)
    );
  }, [vaultTokens, assetSearchValue]);

  const lunarBalance = vaultTokens.reduce((acc, val) => acc + Number(new BigNumber(val.balance).dividedBy(Math.pow(10, val.decimals))) , 0)

  return (
    <div className={'container mx-auto p-4 sm:p-12 xl:p-16'}>
      <div className={'flex flex-1 flex-col lg:flex-row gap-4 md:gap-8'}>
        <Card className={'flex flex-col flex-1 p-8 gap-4 shadow'}>
          <h2 className={'text-sm font-semibold uppercase tracking-wide'}>Lunar Balance</h2>
          <div className={'text-2xl font-black'}>{lunarBalance}</div>
          <div className={'text-sm text-muted-foreground'}>
            Deposited balance is the overall sum of all the tokens available in the Lunar Pay Vault. This balance may
            not be accurate as balance rates are not available for all tokens.
          </div>
        </Card>

        <Card className={'flex flex-col flex-1 p-8 gap-4 shadow'}>
          <h2 className={'text-sm font-semibold uppercase tracking-wide'}>Assets</h2>
          <Input
            value={assetSearchValue}
            placeholder={'Search tokens'}
            onChange={e => setAssetSearchValue(e.target.value)}
          />

          <div className={'flex flex-col gap-3'}>
            {filteredVaultTokens.map(token => (
              <div key={token.identifier} className={'flex justify-between items-center'}>
                <div>
                  <div className={'text-sm font-medium'}>{token.name}</div>
                  <div className={'text-xs text-muted-foreground'}>{token.identifier}</div>
                </div>
                
                <div className={'flex justify-between items-center gap-10'}>
                  <div className={'text-sm font-medium'}>{new BigNumber(token.balance).dividedBy(Math.pow(10, token.decimals)).toString()}</div>
                  <div className={'self-end space-x-2'}>
                    <Button size={'sm'} variant={'outline'}>
                      Send
                      <Wallet className={'ml-2 w-3 h-3'} />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
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
      </div>

      <div className={'flex flex-1 flex-col lg:flex-row gap-4 md:gap-8 mt-10'}>
        <Card className={'flex flex-col flex-1 p-8 gap-4 shadow'}>
          <h2 className={'text-sm font-semibold uppercase tracking-wide'}>Pending Amount</h2>
          <div className={'text-2xl font-black'}>$1111.00</div>
          <div className={'w-full'}>
            <Button size={'sm'} variant={'outline'} className={'justify-self-end'}>
              Collect All
              <Wallet className={'ml-2 w-3 h-3'} />
            </Button>
          </div>
        </Card>

        <Card className={'flex flex-col flex-1 p-8 gap-4 shadow'}>
          <h2 className={'text-sm font-semibold uppercase tracking-wide'}>Latest Transactions</h2>
          <div className={'flex flex-col gap-3'}>
              <div  className={'flex justify-between items-center'}>
                <div>
                  Transaction
                </div>
                <div className={'self-end space-x-2'}>
                  <Button size={'sm'} variant={'outline'}>
                    Click
                  </Button>
                </div>
              </div>
              <div  className={'flex justify-between items-center'}>
                <div>
                  Transaction
                </div>
                <div className={'self-end space-x-2'}>
                  <Button size={'sm'} variant={'outline'}>
                    Click
                  </Button>
                </div>
              </div>
              <div  className={'flex justify-between items-center'}>
                <div>
                  Transaction
                </div>
                <div className={'self-end space-x-2'}>
                  <Button size={'sm'} variant={'outline'}>
                    Click
                  </Button>
                </div>
              </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
