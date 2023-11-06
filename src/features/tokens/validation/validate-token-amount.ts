import BigNumber from "bignumber.js";

import { Token } from "@/features/tokens";
import { TokenValueError } from "@/features/tokens/enums";

export function checkIsValidFormat(value: string | number): boolean {
  const bigNumberValue = BigNumber(value);
  return !bigNumberValue.isNaN();
}

export function checkIsValidAmount(value: string | number): boolean {
  const bigNumberValue = BigNumber(value);
  return bigNumberValue.gt(0);
}

export function getTokenErrorForValue(token: Token, value: string | number, isAmountToReceive?: boolean): TokenValueError | null {
  const tokenBalanceBigNumberBigUIntValue = BigNumber(token.balance);
  const valueBigNumberBigUIntValue = BigNumber(value).multipliedBy(Math.pow(10, token.decimals))

  switch (true) {
    case !checkIsValidAmount(value):
      return TokenValueError.ZeroValue;

    case !checkIsValidFormat(value):
    case tokenBalanceBigNumberBigUIntValue.isNaN() || valueBigNumberBigUIntValue.isNaN():
      return TokenValueError.InvalidFormat;

    case tokenBalanceBigNumberBigUIntValue.lt(valueBigNumberBigUIntValue): {
      if (!isAmountToReceive) {
        return TokenValueError.BalanceExceeded;
      }
      
      return null;
    }

    default:
      return null;
  }
}
