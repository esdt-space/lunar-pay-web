import { ProtocolApi } from "@/lib/protocol-api";

import { TokenOperation } from "./models/token-operation.ts";

type TokenOperationsResponse = {
  numberOfPages: number;
  operations: TokenOperation[]
}

export class TokenOperationsService {
  private static api = new ProtocolApi()
  private static readonly ITEMS_PER_PAGE = 10;

  static async getAllTokenOperations(page: number, type: string): Promise<TokenOperationsResponse> {
    const skip = (page - 1) * TokenOperationsService.ITEMS_PER_PAGE;

    return TokenOperationsService.api
      .get<TokenOperationsResponse>(`/token-operations/all?limit=${TokenOperationsService.ITEMS_PER_PAGE}&skip=${skip}&type=${type}`)
      .then((response) => response.data)
      .then(data => {
        return {
          numberOfPages: data.numberOfPages,
          operations: data.operations.map(item => new TokenOperation(item)) 
        }
      })
  }
}