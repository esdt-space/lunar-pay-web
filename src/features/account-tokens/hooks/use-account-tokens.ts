import { useEgld } from "@/features/tokens";
import { useGetAccount } from "@multiversx/sdk-dapp/hooks";

import { useAccountTokensQuery } from "./queries";

export function useAccountEsdtTokensList() {
  const { data } = useAccountTokensQuery();
  return data?.tokens ?? [];
}

export function useAccountEsdtTokensMap() {
  const { data } = useAccountTokensQuery();

  return data?.tokensMap ?? {};
}

export function useAccountTokensList() {
  const egld = useEgld();
  const { balance } = useGetAccount();
  const ESDTs = useAccountEsdtTokensList()
  egld.balance = balance;

  return [egld, ...ESDTs];
}

export function useAccountTokensMap() {
  const egld = useEgld();
  const ESDTs = useAccountEsdtTokensMap();

  return {...ESDTs, [egld.identifier]: egld}
}