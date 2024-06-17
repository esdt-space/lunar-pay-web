import { ProtocolApi } from "@/lib/protocol-api";

import { TokenOperation } from "./models/token-operation.ts";
import { PaginatedResponse } from "@/components/shared/pagination/types.ts";

export class TokenOperationsService {
  private static api = new ProtocolApi()
  private static readonly ITEMS_PER_PAGE = 10;

  static async getAllPublicTokenOperations(page: number, type: string): Promise<PaginatedResponse<TokenOperation>> {
    const skip = (page - 1) * TokenOperationsService.ITEMS_PER_PAGE;

    return TokenOperationsService.api
      .get<PaginatedResponse<TokenOperation>>(
        `/token-operations/all/operations?limit=${TokenOperationsService.ITEMS_PER_PAGE}&skip=${skip}&type=${type}`
      )
      .then((response) => response.data)
  }

  static async getAllTokenOperations(page: number, type: string, address?: string, parentId?: string): Promise<PaginatedResponse<TokenOperation>> {
    const skip = (page - 1) * TokenOperationsService.ITEMS_PER_PAGE;

    return TokenOperationsService.api
      .get<PaginatedResponse<TokenOperation>>(
        `/token-operations?limit=${TokenOperationsService.ITEMS_PER_PAGE}&skip=${skip}&type=${type}&addressFilter=${address}&parentId=${parentId}`
      )
      .then((response) => response.data)
  }

  static async getTokenOperationsByParentId(page: number, id: string): Promise<PaginatedResponse<TokenOperation>> {
    const skip = (page - 1) * TokenOperationsService.ITEMS_PER_PAGE;

    return TokenOperationsService.api.get<PaginatedResponse<TokenOperation>>(`/token-operations/${id}/all/charge-operations?limit=${TokenOperationsService.ITEMS_PER_PAGE}&skip=${skip}`)
      .then((response) => response.data)
  }
}