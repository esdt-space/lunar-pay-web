import { useWhitelistedAddressesQuery } from "./queries/use-whitelisted-addresses-query.ts";

export function useWhitelistedVaultAddresses() {
  const { data: whitelistedAddresses = [] } = useWhitelistedAddressesQuery();

  return whitelistedAddresses;
}