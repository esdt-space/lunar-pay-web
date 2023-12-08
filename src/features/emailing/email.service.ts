import { ProtocolApi } from "@/lib/protocol-api";

export class EmailService {
  private static api = new ProtocolApi()

  static async emailTrigger(email: any) {
    return EmailService.api.post<string>(`/email-service/trigger-email`, email)
      .then((response) => response.data)
  }
}