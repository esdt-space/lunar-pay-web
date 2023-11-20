import { Wallet } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";

import emptyBox from '@/assets/media/empty-box.svg';

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent } from "@/components/ui/tabs.tsx";
import { LoaderWithIconAndText } from "@/components/shared/loaders";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Egld, EsdtToken } from "@/core/tokens";
import { TokenItem } from "@/core/tokens/components";
import { useAccountVaultTokens } from "@/features/vault/hooks";

import { TransferAssetComponent } from "./transfer-asset-component.tsx";

enum ScreenTabs {
  EmptyAssets = 'empty-assets',
  LoadingState = 'loading-stats',
  ViewAssets = 'view-assets',
  TransferAsset = 'transfer-asset',
}

export const VaultAssetsWidget = () => {
  const [animatedElement] = useAutoAnimate()
  const [assetSearchValue, setAssetSearchValue] = useState('');
  const [selectedToken, setSelectedToken] = useState<EsdtToken | Egld>()
  const [selectedTab, setSelectedTab] = useState<ScreenTabs>(ScreenTabs.LoadingState)

  const { vaultTokens, isFetched, isFetching } = useAccountVaultTokens();
  const filteredVaultTokens = useMemo(() => {
    if(assetSearchValue.length === 0) return vaultTokens;

    return vaultTokens.filter(item =>
      item.name.includes(assetSearchValue) ||
      item.identifier.includes(assetSearchValue)
    );
  }, [vaultTokens, assetSearchValue]);

  const isLoadingFirstTime = !isFetched && isFetching;
  const isLoadedAndHasData = isFetched && vaultTokens.length > 0;
  const isLoadedAndHasNoData = isFetched && vaultTokens.length === 0;

  useEffect(() => {
    switch (true) {
      case isLoadingFirstTime:
        setSelectedTab(ScreenTabs.LoadingState);
        break;
      case isLoadedAndHasNoData:
        setSelectedTab(ScreenTabs.EmptyAssets);
        break;
      case isLoadedAndHasData:
        if([ScreenTabs.EmptyAssets, ScreenTabs.LoadingState].includes(selectedTab)) {
          setSelectedTab(ScreenTabs.ViewAssets);
        }
        break;
    }
  }, [selectedTab, isLoadingFirstTime, isLoadedAndHasData, isLoadedAndHasNoData]);

  return (
    <Card className={'flex-1 p-2'}>
      <CardHeader>
        <CardTitle className={'text-sm font-semibold uppercase tracking-wide'}>
          {selectedTab === ScreenTabs.TransferAsset ? 'Transfer' : 'Assets'}
        </CardTitle>
      </CardHeader>

      <CardContent className={'space-y-3'}>
        <Tabs value={selectedTab} className="flex flex-col space-y-0">
          <TabsContent className={'space-y-3 mt-0 p-4'} value={ScreenTabs.LoadingState}>
            <LoaderWithIconAndText>
              Please wait, we are loading the assets ...
            </LoaderWithIconAndText>
          </TabsContent>

          <TabsContent className={'space-y-3 mt-0 p-4'} value={ScreenTabs.EmptyAssets}>
            <div className={'text-sm text-muted-foreground text-center flex flex-col items-center gap-3'}>
              <img src={emptyBox} alt={'empty vault'} className={'saturate-50 w-16'} />
              Your vault is empty, deposit some tokens to get started!
            </div>
          </TabsContent>

          <TabsContent className={'space-y-3 mt-0'} value={ScreenTabs.ViewAssets}>
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
              selectedToken={selectedToken as EsdtToken}
              finishCallback={() => setSelectedTab(ScreenTabs.ViewAssets)}
            />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
