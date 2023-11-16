import { ProtocolApi } from "@/lib/protocol-api";

import { TokenOperation } from "./models/token-operation.ts";

export class TokenOperationsService {
  private static api = new ProtocolApi()

  static async getAllTokenOperations(): Promise<TokenOperation[]> {
    return TokenOperationsService.api.get<TokenOperation[]>('/token-operations/all?limit=1000')
      .then((response) => response.data)
      .then(data => data.map(item => new TokenOperation(item)))
  }

  static async getTokenOperationsByParentIdOperations(id: string): Promise<TokenOperation[]> {
    return TokenOperationsService.api.get<TokenOperation[]>(`/token-operations/${id}/all/charge-operations?limit=1000`)
      .then((response) => response.data)
      .then(data => data.map(item => new TokenOperation(item)))
  }
}