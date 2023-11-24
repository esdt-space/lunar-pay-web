import { ProtocolApi } from "@/lib/protocol-api";

import { TokenOperation } from "./models/token-operation.ts";

type TokenOperationsResponse = {
  numberOfPages: number;
  operations: TokenOperation[]
}

export class TokenOperationsService {
  private static api = new ProtocolApi()

  static async getAllTokenOperations(page: number, type: string): Promise<TokenOperationsResponse> {
    return TokenOperationsService.api
      .get<TokenOperationsResponse>(`/token-operations/all?limit=10&skip=${page}&type=${type}`)
      .then((response) => response.data)
      .then(data => {
        return {
          numberOfPages: data.numberOfPages,
          operations: data.operations.map(item => new TokenOperation(item)) 
        }
      })
  }
}