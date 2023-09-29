import BigNumber from "bignumber.js"
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const formatTokenBalance = (balance: string, decimals: number) => {
  return new BigNumber(balance).dividedBy(Math.pow(10, decimals))
}
