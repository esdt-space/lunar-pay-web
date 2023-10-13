import { useGetAccount } from "@multiversx/sdk-dapp/hooks";

import AppEnvironment from "@/environment/app.environment.ts";
import { TokenOperationAddressType } from "@/features/token-operations/enums";

function formatAddress(longAddress: string) {
  if (longAddress.length < 10) {
    return longAddress; // Return the original address if it's too short
  }

  const firstPart = longAddress.slice(0, 5);
  const lastPart = longAddress.slice(-5);

  return `${firstPart}...${lastPart}`;
}

export function useTokenOperationAddressType(value: string): TokenOperationAddressType {
  const { address } = useGetAccount()
  const contractAddress = AppEnvironment.contracts.lunarPay;

  if(value === address) return TokenOperationAddressType.Self;
  if(value === contractAddress) return TokenOperationAddressType.LunarPayVault;

  return TokenOperationAddressType.ActualAddress;
}

export function useTokenOperationAddressText(value: string) {
  const { address } = useGetAccount()
  const contractAddress = AppEnvironment.contracts.lunarPay;

  if(value === address) return "You";
  if(value === contractAddress) return "Lunar Pay Vault";

  return formatAddress(value);
}