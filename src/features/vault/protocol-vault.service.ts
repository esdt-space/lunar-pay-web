import { ProtocolApi } from "@/lib/protocol-api";

type AddressesList = string[];
type TokensIdentifiersList = string[];

type AccountBalance = {
  identifier: string;
  balance: string;
}
type AccountBalancesList = AccountBalance[];

export class ProtocolVaultService {
  private static api = new ProtocolApi()

  static async getWhitelistedTokenIdentifiers(): Promise<TokensIdentifiersList> {
    return ProtocolVaultService.api.get<TokensIdentifiersList>('/protocol/vault/tokens-whitelisted')
      .then((response) => response.data);
  }

  static async getWhitelistedAddresses(): Promise<AddressesList> {
    return ProtocolVaultService.api.get<AddressesList>('/protocol/vault/addresses-whitelisted')
      .then((response) => response.data);
  }

  static async getAccountBalances(): Promise<AccountBalancesList> {
    return ProtocolVaultService.api.get<AccountBalancesList>('/protocol/vault/account-balances')
      .then((response) => response.data);
  }
}
