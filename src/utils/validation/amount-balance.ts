import { EsdtToken } from "@/features/tokens";
import BigNumber from "bignumber.js";

export function checkIsValidAmount(token: EsdtToken, inputValue: number): boolean {
    const tokenBalance = BigNumber(token.balance);
    const input = BigNumber(inputValue).multipliedBy(Math.pow(10, token.decimals))

    if(input.c !== null && tokenBalance.c !== null) {
      if (tokenBalance.c[0] < input.c[0]) return true;
      if (tokenBalance.c[0] > input.c[0]) return false;
    }

    return false;
}
