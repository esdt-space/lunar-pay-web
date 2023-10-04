import { AgreementType } from "./agreement-types.model";

export type Agreement<T extends AgreementType> = {
  owner: string;
  agreementType: T;

  token_nonce?: string;
  token_identifier?: string;

  whitelist_enabled?: boolean;
  whitelist?: string[];
}
