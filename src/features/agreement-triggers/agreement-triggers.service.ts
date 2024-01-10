import { ProtocolApi } from "@/lib/protocol-api";
import { AgreementTrigger } from "./models";

type AgreementTriggersResponse = {
  numberOfPages: number;
  agreementTriggers: AgreementTrigger[];
}

export class AgreementTriggersService {
  private static api = new ProtocolApi()
  private static readonly ITEMS_PER_PAGE = 10;

  static async getAgreementTriggersById(page: number, id: string): Promise<AgreementTriggersResponse> {
    const skip = (page - 1) * AgreementTriggersService.ITEMS_PER_PAGE;

    return this.api.get<AgreementTriggersResponse>(`/agreement-triggers/${id}/all?limit=${AgreementTriggersService.ITEMS_PER_PAGE}&skip=${skip}`)
      .then((response) => response.data)
      .then(data => {
        return {
          numberOfPages: data.numberOfPages,
          agreementTriggers: data.agreementTriggers.map(item => new AgreementTrigger(item)) 
        }
      })
  }
}
