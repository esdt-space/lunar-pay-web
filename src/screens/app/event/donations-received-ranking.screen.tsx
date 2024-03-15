import { ContainedScreen } from "@/components/prefab/contained-screen"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { useDonationsForEventQuery } from "@/features/donations/hooks/queries";
import { UsersDonationsRankedTable } from "./components";

export const DonationsReceivedRankingScreen = () => {
  const { data: donationsResponse } = useDonationsForEventQuery();
  const donationsRanked = donationsResponse?.data ?? []
  
  return (
    <ContainedScreen className='h-full'>
      <Card className='mt-16 space-y-4'>
        <CardHeader className='text-xl font-bold text-center'>
          Users ranked by Donations Received
        </CardHeader>
        <CardContent className={'p-0'}>
          <UsersDonationsRankedTable usersDonationsList={donationsRanked} />
        </CardContent>
      </Card>
    </ContainedScreen>
  )
}
