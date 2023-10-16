import { useEgld, useEsdtTokensList, useEsdtTokensMap } from "@/features/tokens";

export function useTokensList() {
  const egld = useEgld()
  const ESDTs = useEsdtTokensList()

  return [egld, ...ESDTs];
}

export function useTokensMap() {
  const egld = useEgld()
  const ESDTs = useEsdtTokensMap();

  return {...ESDTs, [egld.identifier]: egld}
}