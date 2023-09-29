import BigNumber from "bignumber.js";
import { EsdtToken } from "@/features/tokens";

export function checkIsValidAmount(value: string | number): boolean {
  const bigNumberValue = BigNumber(value);

  return !bigNumberValue.isNaN() && bigNumberValue.gte(0);
}

export function checkTokenHasEnoughBalance(token: EsdtToken, balanceValue: string | number): boolean {
  const tokenBalanceBigNumberBigUIntValue = BigNumber(token.balance);
  const balanceBigNumberBigUIntValue = BigNumber(balanceValue).multipliedBy(Math.pow(10, token.decimals))

  if(!checkIsValidAmount(balanceValue))
    return false;

  if (tokenBalanceBigNumberBigUIntValue.isNaN() || balanceBigNumberBigUIntValue.isNaN())
    return false;

  return tokenBalanceBigNumberBigUIntValue.gte(balanceBigNumberBigUIntValue);
}
