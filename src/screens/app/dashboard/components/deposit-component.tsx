import { useState } from "react";
import { Plus } from "lucide-react";

import { Button } from "@/components/ui/button";

import { useAccountTokensAvailableToDeposit } from "@/features/account-tokens/hooks";
import { EsdtToken } from "@/features/tokens";
import { TokenSelectorWithAmount } from "@/features/tokens/components"
import { getTokenErrorForValue } from "@/features/tokens/validation";

import { useDepositEgldMutation, useDepositEsdtMutation } from "@/features/vault/hooks/mutations";

export const DepositAssetsComponent = () => {
  const [amount, setAmount] = useState('');
  const [selectedToken, setSelectedToken] = useState<EsdtToken | undefined>(undefined);
  
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

  return <div className="flex flex-1 flex-col gap-4 mt-4">
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
  <Button size={'sm'} onClick={depositToken} disabled={!canPerformOperation}>
    Deposit
    <Plus className={'ml-1 w-4 h-4'} />
  </Button>
</div>
}
