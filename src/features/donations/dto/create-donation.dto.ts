import { DonationTarget, DonationType } from "../enums"

export type CreateDonationDto = {
  beneficiaryName?: string,
  backgroundImageUrl?: string,
  donationType: DonationType,
  donationTarget: DonationTarget,
  tokenIdentifier: string,
  fixedAmount: string
}
