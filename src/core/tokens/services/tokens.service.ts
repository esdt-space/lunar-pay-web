import { EsdtTokensList, EsdtTokensMap } from '@/core/tokens'

import { EsdtToken } from '../models'
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

export class TokensService {
  private static api = new ProtocolApi()

  static async getEsdtTokens(): Promise<EsdtToken[]> {
    return this.api.get<EsdtToken[]>('/tokens/esdt')
      .then((response) => response.data)
      .then(data => data.map(item => new EsdtToken(item)))
  }

  static async getEsdtTokensTransformed(): Promise<TransformedTokens> {
    return TokensService.getEsdtTokens().then(transformTokenData)
  }
}
