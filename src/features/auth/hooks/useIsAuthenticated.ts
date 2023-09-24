import { useGetIsLoggedIn } from '@multiversx/sdk-dapp/hooks'

export function useIsAuthenticated() {
  return useGetIsLoggedIn()
}
