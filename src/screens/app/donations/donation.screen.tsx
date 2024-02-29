import { DonationPageWrapper } from "./page-wrapper";
import { LatestDonationsList, SingleDonationWidget } from "./widgets";

export type DonationType = 'single' | 'monthly';
export type PredeterminedAmount = '5' | '10' | '20' | null;

export const DonationScreen = () => {
  return (
    <DonationPageWrapper 
      userHeroTag="@david"
      backgroundImage="https://images.unsplash.com/photo-1695718948137-1f4d1d5ba889?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcwOTIyMzc2MQ&ixlib=rb-4.0.3&q=80&w=1080"
    >
      <div className="flex flex-1 max-xl:flex-col">
        <SingleDonationWidget />
        <LatestDonationsList />
      </div>
    </DonationPageWrapper>
  )
}
