/** Protocol **/
export const protocolWhitelistedTokensQueryKey =  ['protocol-whitelisted-token-identifiers']
export const protocolWhitelistedAddressesQueryKey =  ['protocol-whitelisted-addresses']

/** Account **/
export const accountBalancesQueryKey = (address: string) =>  ['protocol-vault-account-balances', address]
export const subscriptionAmountsQueryKey = (id: number) =>  ['subscription-amounts', id]
