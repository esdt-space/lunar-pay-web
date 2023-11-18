import BigNumber from "bignumber.js";
import { Token } from "@/core/tokens";

export function useTokensPrice(tokens: Token[]) {
  return tokens.reduce((acc, token) => {
    if(token.price !== undefined) {
      const balance = new BigNumber(token.balance).dividedBy(Math.pow(10, token.decimals));
      acc += new BigNumber(balance).multipliedBy(token.price).toNumber()
    }

    return acc
  }, 0)
}