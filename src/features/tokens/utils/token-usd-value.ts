import BigNumber from "bignumber.js";
import { EsdtToken } from "@/features/tokens";

export function getTokenBalanceValueInDollars(token: EsdtToken) {
  const amount = new BigNumber(token.balance).dividedBy(Math.pow(10, token.decimals));

  return getTokenAmountValueInDollars(token, amount);
}

export function getTokenAmountValueInDollars(token: EsdtToken, amount: BigNumber.Value) {
  if(!token.price) return undefined;

  return new BigNumber(token.price).multipliedBy(new BigNumber(amount));
}