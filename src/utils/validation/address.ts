import { Address } from '@multiversx/sdk-core/out'

function isValidAddress(address: string) {
  try {
    const addressObj = new Address(address)
    return !addressObj.isEmpty();
  } catch (error) {
    return false
  }
}

export function checkIsValidAddress(address: string) {
  return isValidAddress(address)
}
