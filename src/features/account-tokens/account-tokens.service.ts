import { EsdtToken, EsdtTokensList, EsdtTokensMap } from '@/core/tokens'

import { ProtocolApi } from "@/lib/protocol-api";

type TransformedTokens = {
  tokens: EsdtTokensList
  tokensMap: EsdtTokensMap
}

const transformTokenData = (tokens: EsdtToken[] = []): TransformedTokens => {
  const tokensMap: EsdtTokensMap = {}

  tokens.forEach((item) => {
    tokensMap[item.identifier] = item
  })

  return { tokens, tokensMap }
}

export class AccountTokensService {
  private static api = new ProtocolApi()

  static async getAccountEsdtTokens(): Promise<EsdtToken[]> {
    return this.api.get<EsdtToken[]>('/account/tokens/esdt')
      .then((response) => response.data);
  }

  static async getAccountEsdtTokensDecorated(): Promise<TransformedTokens> {
    return AccountTokensService.getAccountEsdtTokens().then(transformTokenData)
  }
}
