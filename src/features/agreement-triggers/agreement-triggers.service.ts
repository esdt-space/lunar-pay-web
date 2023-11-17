import { ProtocolApi } from "@/lib/protocol-api";
import { AgreementTrigger } from "./models";

export class AgreementTriggersService {
  private static api = new ProtocolApi()

  static async getAgreementTriggersById(id: string): Promise<AgreementTrigger[]> {
    return AgreementTriggersService.api.get<AgreementTrigger[]>(`/agreement-triggers/${id}/all?limit=1000`)
      .then((response) => response.data)
  }
}
