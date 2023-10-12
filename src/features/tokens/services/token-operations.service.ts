import { ProtocolApi } from "@/lib/protocol-api";

export class TokenOperationsService {
  private static api = new ProtocolApi()

  static async getAllTokenOperations(): Promise<any> {
    return this.api.get<any>('/token-operations/all')
      .then((response) => response.data)
  }
}