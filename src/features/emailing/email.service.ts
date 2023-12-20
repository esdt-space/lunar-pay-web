import { ProtocolApi } from "@/lib/protocol-api";
import { ContactInput } from "./dto";

export class EmailService {
  private static api = new ProtocolApi()

  static async emailTrigger(email: ContactInput) {
    return EmailService.api.post<ContactInput>(`/email-service/trigger-email`, email)
      .then((response) => response.data)
  }
}