import { EnvironmentEnum } from '../enums'

export type EnvironmentType = {
  type: EnvironmentEnum

  appUrl: string

  isMainnet: boolean
  isTestnet: boolean
  isDevnet: boolean

  auth: {
    walletConnectProjectId: string,
    nativeAuthDomains: string[]
  }

  mvx: {
    apiUrl: string
    explorerUrl: string
    apiTimeout: number
    transactionSize: number
    toolsApiUrl: string
    nativeAuthDomains: string[]
  }

  contracts: {
    lunarPay: string
  }

  microservice: {
    apiUrl: string
  }
}
