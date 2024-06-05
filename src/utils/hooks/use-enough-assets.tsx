import { Egld, EsdtToken, Token } from "@/core/tokens";
import { formatTokenBalance } from "@/theme/utils";
import BigNumber from "bignumber.js";
import { useState, useEffect } from "react";

export const useEnoughAssets = (amount: string, selectedToken: Token | undefined, tokens: (Egld | EsdtToken)[]) => {
  const [enoughAssets, setEnoughAssets] = useState(false);

  useEffect(() => {
    const vaultToken = tokens.find(item => item.identifier === selectedToken?.identifier);
    const currentTokenBalance = vaultToken !== undefined ? vaultToken.balance : ""
    const currentTokenDecimals = vaultToken !== undefined ? vaultToken.decimals : 0
    const currentBalance = formatTokenBalance(currentTokenBalance, currentTokenDecimals)

    const fixedAmountBigUint = new BigNumber(amount).multipliedBy(Math.pow(10, currentTokenDecimals)).toString();

    const selectedAmount = formatTokenBalance(fixedAmountBigUint, currentTokenDecimals)
    const assets = Number(currentBalance.toString()) > Number(selectedAmount.toString())

    setEnoughAssets(assets)
  }, [amount, selectedToken])

  return enoughAssets;
}