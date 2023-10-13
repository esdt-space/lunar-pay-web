import { useGetAccount } from "@multiversx/sdk-dapp/hooks";

import AppEnvironment from "@/environment/app.environment.ts";

export function useTokenOperationAddressText(value: string) {
  const { address } = useGetAccount()
  const contractAddress = AppEnvironment.contracts.lunarPay;

  if(value === address) return "You";
  if(value === contractAddress) return "Lunar Pay Vault";

  return value;
}