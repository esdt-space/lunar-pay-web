import { ProtocolApi } from "@/lib/protocol-api";

import { TokenOperation } from "./models/token-operation.ts";

export class TokenOperationsService {
  private static api = new ProtocolApi()

  static async getAllTokenOperations(): Promise<TokenOperation[]> {
    return TokenOperationsService.api.get<TokenOperation[]>('/token-operations/all')
      .then((response) => response.data)
      .then(data => data.map(item => new TokenOperation(item)))
  }
}