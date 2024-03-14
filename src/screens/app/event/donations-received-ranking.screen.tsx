import { FormatAmount } from "@multiversx/sdk-dapp/UI";

import { ContainedScreen } from "@/components/prefab/contained-screen"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator";
import { useTokensMap } from "@/core/tokens";
import { useDonationsForEventQuery } from "@/features/donations/hooks/queries";

export const DonationsReceivedRankingScreen = () => {
  const tokensMap = useTokensMap();
  
  const { data: donationsResponse } = useDonationsForEventQuery();
  const donationsRanked = donationsResponse?.data ?? []
  
  return (
    <ContainedScreen className='h-full'>
      <Card className='mt-16'>
        <CardHeader className='text-xl font-bold'>
          Users ranked by Donations Received
        </CardHeader>
        <CardContent>
          <div className='space-y-4 w-full'>
            {donationsRanked.map((item, index) => {
              const token = tokensMap[item.tokenIdentifier];

              return (
                <div key={index} className='flex flex-col space-y-2'>
                  <div className='flex justify-between border-bottom'>
                    <div>
                      {item.owner}
                    </div>
                    <div>
                      <FormatAmount value={item.amount as string} decimals={token.decimals} />
                    </div>
                  </div>
                  <Separator />
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>
    </ContainedScreen>
  )
}
