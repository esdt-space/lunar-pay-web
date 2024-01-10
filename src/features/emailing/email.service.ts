import { ProtocolApi } from "@/lib/protocol-api";
import { ContactInput } from "./dto";

export class EmailService {
  private static api = new ProtocolApi()

  static async sendContactEmail(email: ContactInput) {
    return EmailService.api.post<ContactInput>(`/email-service/contact`, email)
      .then((response) => response.data)
  }
}