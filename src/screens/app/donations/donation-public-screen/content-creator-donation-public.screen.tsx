import { DonationPageWrapper } from "./page-wrapper";
import { LatestDonationsList, SingleDonationWidget } from "../widgets";
import { useParams } from "react-router-dom";

import { useCreatedDonation } from "@/features/donations/hooks";

export type DonationType = 'single' | 'monthly';
export type PredeterminedAmount = '5' | '10' | '20' | null;

export const ContentCreatorDonationPublicScreen = () => {
  const { id } = useParams();

  const { data: donation } = useCreatedDonation(id);

  if(donation === undefined) return
  
  return (
    <DonationPageWrapper 
      userHeroTag={`${donation?.beneficiaryName ? '@'.concat(donation.beneficiaryName) : ''}`}
      backgroundImage={donation?.backgroundImageUrl}
    >
      <div className="flex flex-1 xl:space-x-8 max-xl:flex-col max-xl:space-y-8">
        <SingleDonationWidget />
        <LatestDonationsList donationId={donation.id} />
      </div>
    </DonationPageWrapper>
  )
}
