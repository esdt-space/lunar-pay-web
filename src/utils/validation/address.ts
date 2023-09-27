import { Address } from '@multiversx/sdk-core/out'

function isValidAddress(address: string) {
  try {
    new Address(address)
    return true
  } catch (error) {
    return false
  }
}

export function checkIsValidAddress(address: string) {
  return isValidAddress(address)
}
