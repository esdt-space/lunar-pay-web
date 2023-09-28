import { Egld, useEsdtTokensList, useEsdtTokensMap } from "@/features/tokens";

export function useTokensList() {
  const ESDTs = useEsdtTokensList()

  return [new Egld(), ...ESDTs];
}

export function useTokensMap() {
  const ESDTs = useEsdtTokensMap();
  const egldToken = new Egld();

  return {...ESDTs, [egldToken.identifier]: egldToken}
}