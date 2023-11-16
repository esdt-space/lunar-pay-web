import { ProtocolApi } from "@/lib/protocol-api";

export class AgreementTriggersService {
  private static api = new ProtocolApi()

  static async getAgreementTriggersById(id: string): Promise<any[]> {
    return AgreementTriggersService.api.get<any[]>(`/agreement-triggers/${id}/all?limit=1000`)
      .then((response) => response.data)
  }
}
