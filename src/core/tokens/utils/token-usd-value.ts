import BigNumber from "bignumber.js";
import { Token } from "@/core/tokens";

export function getTokenBalanceValueInDollars(token: Token) {
  const amount = new BigNumber(token.balance).dividedBy(Math.pow(10, token.decimals));

  return getTokenAmountValueInDollars(token, amount);
}

export function getTokenAmountValueInDollars(token: Token, amount: BigNumber.Value) {
  if(!token.price) return undefined;

  return new BigNumber(token.price).multipliedBy(new BigNumber(amount));
}