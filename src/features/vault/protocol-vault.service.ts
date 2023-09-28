import { ProtocolApi } from "@/lib/protocol-api";

type AddressesList = string[];
type TokensIdentifiersList = string[];

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
}
