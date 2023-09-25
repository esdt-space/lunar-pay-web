import { useAccountTokensQuery } from "./queries";

export function useAccountEsdtTokensList() {
  const { data } = useAccountTokensQuery();
  return data?.tokens ?? [];
}

export function useAccountEsdtTokensMap() {
  const { data } = useAccountTokensQuery();

  return data?.tokensMap ?? {};
}