import { Wallet } from "lucide-react"
import { useMemo, useState } from "react"
import { FormatAmount } from "@multiversx/sdk-dapp/UI";


import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent } from "@/components/ui/tabs.tsx";

import { EsdtToken } from "@/features/tokens"
import { useAccountEsdtTokensList } from "@/features/account-tokens/hooks";

import { TransferAssetComponent } from "./transfer-asset-component.tsx"

enum ScreenTabs {
  ViewAssets = 'view-assets',
  TransferAsset = 'transfer-asset',
}

export const VaultAssetsWidget = () => {
  const [assetSearchValue, setAssetSearchValue] = useState('');
  const [selectedTab, setSelectedTab] = useState<ScreenTabs>(ScreenTabs.ViewAssets)
  const [selectedToken, setSelectedToken] = useState<EsdtToken>()

  //TODO: Need to get user's tokens from the vault
  const vaultTokens = useAccountEsdtTokensList();
  const filteredVaultTokens = useMemo(() => {
    if(assetSearchValue.length === 0) return vaultTokens;

    return vaultTokens.filter(item =>
      item.name.includes(assetSearchValue) ||
      item.identifier.includes(assetSearchValue)
    );
  }, [vaultTokens, assetSearchValue]);



  return (
    <Card className={'flex flex-col flex-1 p-8 gap-4 shadow'}>
      <h2 className={'text-sm font-semibold uppercase tracking-wide'}>Assets</h2>
      <Input
        value={assetSearchValue}
        placeholder={'Search tokens'}
        onChange={e => setAssetSearchValue(e.target.value)} />

      <div className={'flex flex-col gap-3'}>
        <Tabs value={selectedTab} className="flex flex-col space-y-0">
          <TabsContent className={'space-y-3'} value="view-assets">
            {filteredVaultTokens.map(token => (
              <div key={token.identifier} className={'flex justify-between items-center'}>
                <div>
                  <div className={'text-sm font-medium'}>{token.name}</div>
                  <div className={'text-xs text-muted-foreground'}>{token.identifier}</div>
                </div>

                <div className={'flex justify-between items-center gap-10'}>
                  <div className={'text-sm font-medium'}>
                    <FormatAmount
                      value={token.balance}
                      token={token.identifier}
                      decimals={token.decimals}
                      digits={5}
                      showLabel={false}
                    />
                    {/*{formatTokenBalance(token.balance, token.decimals).toString()}*/}
                  </div>
                  <div className={'self-end space-x-2'}>
                    <Button size={'sm'} variant={'outline'} onClick={() => {
                      setSelectedToken(token)
                      setSelectedTab(ScreenTabs.TransferAsset)
                    }}>
                      Send
                      <Wallet className={'ml-2 w-3 h-3'}/>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </TabsContent>
          <TabsContent className={'space-y-3'} value="transfer-asset">
            <TransferAssetComponent
              selectedToken={selectedToken}
              finishCallback={() => setSelectedTab(ScreenTabs.ViewAssets)}
            />
          </TabsContent>
        </Tabs>
      </div>
    </Card>
  )
}
