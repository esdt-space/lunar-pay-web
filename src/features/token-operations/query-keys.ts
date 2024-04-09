export const accountTokenOperationsQueryKey = (address: string) => ['account-token-operations', address]
export const accountTokenOperationsFilteredQueryKey = (address: string, type: string, pageNumber: number) => ['account-token-operations', address, pageNumber, type]
export const allTokenOperationsFilteredQueryKey = (type: string, pageNumber: number) => ['account-token-operations', pageNumber, type]

export const accountChargesOperationsQueryKey = (address: string, id: string) => ['account-charges-operations', address, id]
