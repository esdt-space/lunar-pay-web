import { useTokensQuery } from "./queries";

export function useEsdtTokensList() {
  const { data } = useTokensQuery();
  return data?.tokens ?? [];
}

export function useEsdtTokensMap() {
  const { data } = useTokensQuery();

  return data?.tokensMap ?? {};
}