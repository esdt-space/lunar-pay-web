import { ProtocolApi } from "@/lib/protocol-api";

import { TokenOperation } from "./models/token-operation.ts";

type TokenOperationsResponse = {
  numberOfPages: number;
  operations: TokenOperation[]
}

export class TokenOperationsService {
  private static api = new ProtocolApi()
  private static readonly ITEMS_PER_PAGE = 10;

  static async getAllTokenOperations(page: number, type: string, filterValue?: string): Promise<TokenOperationsResponse> {
    const skip = (page - 1) * TokenOperationsService.ITEMS_PER_PAGE;

    return TokenOperationsService.api
      .get<TokenOperationsResponse>(
        `/token-operations?limit=${TokenOperationsService.ITEMS_PER_PAGE}&skip=${skip}&type=${type}&addressFilter=${filterValue}`
      )
      .then((response) => response.data)
      .then(data => {
        return {
          numberOfPages: data.numberOfPages,
          operations: data.operations.map(item => new TokenOperation(item)) 
        }
      })
  }

  static async getTokenOperationsByParentId(id: string): Promise<TokenOperation[]> {
    return TokenOperationsService.api.get<TokenOperation[]>(`/token-operations/${id}/all/charge-operations?limit=1000`)
      .then((response) => response.data)
      .then(data => data.map(item => new TokenOperation(item)))
  }
}