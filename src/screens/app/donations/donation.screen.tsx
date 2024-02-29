import { DonationPageWrapper } from "./page-wrapper";
import { LatestDonationsList, SingleDonationWidget } from "./widgets";

export type DonationType = 'single' | 'monthly';
export type PredeterminedAmount = '5' | '10' | '20' | null;

export const DonationScreen = () => {
  return (
    <DonationPageWrapper userHeroTag="@david">
      <div className="flex flex-1 max-xl:flex-col">
        <SingleDonationWidget />
        <LatestDonationsList />
      </div>
    </DonationPageWrapper>
  )
}
