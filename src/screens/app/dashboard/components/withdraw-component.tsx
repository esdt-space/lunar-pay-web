import { useEffect, useState } from "react";
import { Minus } from "lucide-react"

import { Button } from "@/components/ui/button"

import { Egld, EsdtToken } from "@/core/tokens";
import { TokenSelectorWithAmount } from "@/core/tokens/components"
import { getTokenErrorForValue } from "@/core/tokens/validation";
import { useAccountVaultTokens } from "@/features/vault/hooks";
import { useWithdrawEgldMutation, useWithdrawEsdtMutation } from "@/features/vault/hooks/mutations";

export const WithdrawAssetsComponent = () => {
  const [amount, setAmount] = useState('');
  const [selectedToken, setSelectedToken] = useState<EsdtToken | Egld | undefined>(undefined);

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

  return <div className="flex flex-1 flex-col gap-4">
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
  </div>
}
