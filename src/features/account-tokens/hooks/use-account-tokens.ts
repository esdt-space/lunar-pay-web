import { Egld } from "@/features/tokens";
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
  const { balance } = useGetAccount();
  const ESDTs = useAccountEsdtTokensList()
  const egldToken = new Egld();
  egldToken.balance = balance;

  return [egldToken, ...ESDTs];
}

export function useAccountTokensMap() {
  const ESDTs = useAccountEsdtTokensMap();
  const egldToken = new Egld();

  return {...ESDTs, [egldToken.identifier]: egldToken}
}