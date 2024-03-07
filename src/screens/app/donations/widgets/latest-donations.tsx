import { FormatAmount } from "@multiversx/sdk-dapp/UI";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useTokensMap } from "@/core/tokens";
import { useTokenOperationsQuery } from "@/features/token-operations/hooks/queries";
import { TokenOperation } from "@/features/token-operations/models";
import { formatAddress } from "@/utils/address";

export const LatestDonationsList = () => {
  const tokensMap = useTokensMap();
  const { data } = useTokenOperationsQuery(1, 'donation');
  const operations = data?.operations.slice(0, 10) ?? []
  
  return (
    <div className="flex flex-1 w-full justify-center">
      <Card className="p-8 min-w-[400px] max-w-[401px]">
        <CardHeader className='font-semibold'>
          Latest Donations
        </CardHeader>
        <CardContent className='space-y-2'>
          {operations.map((item: TokenOperation) => {
            const token = tokensMap[item.tokenIdentifier];

            return (
              <div className='flex justify-between'>
                <div>
                  {formatAddress(item.sender)} 
                </div>
                <FormatAmount
                  token={token.identifier}
                  decimals={token.decimals}
                  value={`${item.amount}`}
                />
              </div>
            )
          })}
        </CardContent>
      </Card>
    </div>
  )
}
