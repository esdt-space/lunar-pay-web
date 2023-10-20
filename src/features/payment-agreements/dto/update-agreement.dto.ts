export type UpdateAgreementDto = {
  ownerName: string;
  itemName: string;
  description: string;
  benefits: string[];
  content?: string;
}