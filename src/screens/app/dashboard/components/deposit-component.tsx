import { useEffect, useState } from "react";
import { Plus } from "lucide-react";

import { Button } from "@/components/ui/button";

import { EsdtToken } from "@/features/tokens";
import { useAccountTokensAvailableToDeposit } from "@/features/account-tokens/hooks";
import { TokenSelectorWithAmount } from "@/features/tokens/components"
import { getTokenErrorForValue } from "@/features/tokens/validation";

import { useDepositEgldMutation, useDepositEsdtMutation } from "@/features/vault/hooks/mutations";
import {BinancePayButton} from "@/components/prefab/binance-pay-button.tsx";

export const DepositAssetsComponent = () => {
  const [amount, setAmount] = useState('');
  const [selectedToken, setSelectedToken] = useState<EsdtToken | undefined>(undefined);

  useEffect(() => {
    setAmount("");
    setSelectedToken(undefined);
  }, [])
  
  const canPerformOperation = selectedToken !== undefined && !getTokenErrorForValue(selectedToken, amount);

  const { mutate: depositEgldHandler } = useDepositEgldMutation();
  const { mutate: depositEsdtHandler } = useDepositEsdtMutation();

  const depositTokensList = useAccountTokensAvailableToDeposit();

  const depositToken = () => {
    if (!selectedToken) return
    
    if(selectedToken.identifier !== "EGLD")
      return depositEsdtHandler({token: selectedToken, amount: Number(amount)})

    return depositEgldHandler(Number(amount))
  }

  return <div className="flex flex-1 flex-col gap-4">
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

    <div className={'flex flex-1 flex-col gap-2'}>
      <Button size={'sm'} onClick={depositToken} disabled={!canPerformOperation}>
        Deposit
        <Plus className={'ml-1 w-4 h-4'} />
      </Button>

      <BinancePayButton />
    </div>
</div>
}
