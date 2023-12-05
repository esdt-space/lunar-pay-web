import { useEffect, useState } from "react";
import { Minus } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent } from "@/components/ui/tabs";

import { Token } from "@/core/tokens";
import { TokenSelectorWithAmount } from "@/core/tokens/components"
import { getTokenErrorForValue } from "@/core/tokens/validation";
import { useAccountVaultTokens } from "@/features/vault/hooks";
import { useWithdrawEgldMutation, useWithdrawEsdtMutation } from "@/features/vault/hooks/mutations";
import { BinancePayButton } from "@/components/prefab/binance-pay-button";
import { TransferAssetComponent } from "./transfer-asset-component";

enum ScreenTabs {
  Withdraw = 'withdraw',
  BinanceTransfer = 'binance-transfer'
}

export const WithdrawAssetsComponent = () => {
  const [amount, setAmount] = useState('');
  const [selectedTab, setSelectedTab] = useState<ScreenTabs>(ScreenTabs.Withdraw)
  const [selectedToken, setSelectedToken] = useState<Token | undefined>(undefined);

  useEffect(() => {
    setAmount("");
    setSelectedToken(undefined);
  }, [])

  const { vaultTokens} = useAccountVaultTokens();

  const { mutate: withdrawEgldHandler } = useWithdrawEgldMutation();
  const { mutate: withdrawEsdtHandler } = useWithdrawEsdtMutation();

  const canPerformOperation = selectedToken !== undefined && !getTokenErrorForValue(selectedToken, amount);
    
  const withdrawToken = () => {
    if(!selectedToken) return
    
    if(selectedToken.identifier !== "EGLD")
      return withdrawEsdtHandler({token: selectedToken, amount: Number(amount)})
    
    return withdrawEgldHandler(Number(amount))
  }

  const openBinanceTransfer = () => {
    if ( selectedToken === undefined ) return

    setSelectedTab(ScreenTabs.BinanceTransfer)
  }

  return <div>
    <Tabs value={selectedTab} className="flex flex-col space-y-0">
      <TabsContent className={'space-y-3 mt-0'} value={ScreenTabs.Withdraw}>
        <div className="flex flex-1 flex-col gap-4">
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

          <div className={'flex flex-1 flex-col gap-2'}>
            <Button size={'sm'} onClick={withdrawToken} disabled={!canPerformOperation}>
              Withdraw
              <Minus className={'ml-1 w-4 h-4'} />
            </Button>

            <BinancePayButton buttonFn={openBinanceTransfer} />
          </div>
        </div>
      </TabsContent>

      <TabsContent className={'mt-0'} value={ScreenTabs.BinanceTransfer}>
        <TransferAssetComponent
          selectedToken={selectedToken as Token}
          finishCallback={() => setSelectedTab(ScreenTabs.Withdraw)}
        />
      </TabsContent>
    </Tabs>
  </div>
}
