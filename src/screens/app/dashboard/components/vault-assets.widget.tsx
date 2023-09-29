import { Wallet } from "lucide-react";
import { useMemo, useState } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent } from "@/components/ui/tabs.tsx";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { EsdtToken } from "@/features/tokens";
import { TokenItem } from "@/features/tokens/components";
import { useAccountVaultTokens } from "@/features/vault/hooks";

import { TransferAssetComponent } from "./transfer-asset-component.tsx";

enum ScreenTabs {
  ViewAssets = 'view-assets',
  TransferAsset = 'transfer-asset',
}

export const VaultAssetsWidget = () => {
  const [animatedElement] = useAutoAnimate()
  const [assetSearchValue, setAssetSearchValue] = useState('');
  const [selectedTab, setSelectedTab] = useState<ScreenTabs>(ScreenTabs.ViewAssets)
  const [selectedToken, setSelectedToken] = useState<EsdtToken>()

  const vaultTokens = useAccountVaultTokens();
  const filteredVaultTokens = useMemo(() => {
    if(assetSearchValue.length === 0) return vaultTokens;

    return vaultTokens.filter(item =>
      item.name.includes(assetSearchValue) ||
      item.identifier.includes(assetSearchValue)
    );
  }, [vaultTokens, assetSearchValue]);

  return (
    <Card className={'flex-1 shadow p-2'}>
      <CardHeader>
        <CardTitle className={'text-sm font-semibold uppercase tracking-wide'}>
          {selectedTab === ScreenTabs.ViewAssets ? 'Assets' : 'Transfer'}
        </CardTitle>
      </CardHeader>

      <CardContent className={'space-y-3'}>
        <Tabs value={selectedTab} className="flex flex-col space-y-0">
          <TabsContent className={'space-y-3 mt-0'} value="view-assets">
            <Input
              value={assetSearchValue}
              placeholder={'Search tokens'}
              onChange={e => setAssetSearchValue(e.target.value)}
            />

            <div className={'grid space-y-3'} ref={animatedElement}>
              {filteredVaultTokens.map(token => (
                <div key={token.identifier} className={'flex justify-between gap-2 items-center'}>
                  <TokenItem token={token} showBalances />

                  <Button
                    size={'sm'}
                    variant={'outline'}
                    onClick={() => {
                      setSelectedToken(token)
                      setSelectedTab(ScreenTabs.TransferAsset)
                    }}
                  >
                    Send
                    <Wallet className={'ml-2 w-3 h-3'}/>
                  </Button>
                </div>
              ))}
            </div>
          </TabsContent>
          <TabsContent className={'mt-0'} value="transfer-asset">
            <TransferAssetComponent
              selectedToken={selectedToken}
              finishCallback={() => setSelectedTab(ScreenTabs.ViewAssets)}
            />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
