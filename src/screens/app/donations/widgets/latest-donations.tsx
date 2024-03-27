import { FormatAmount } from "@multiversx/sdk-dapp/UI";
import { Copy } from "lucide-react";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useTokensMap } from "@/core/tokens";
import { useAllTokenOperationsQuery } from "@/features/token-operations/hooks/queries";
import { TokenOperation } from "@/features/token-operations/models";
import { formatAddress } from "@/utils/address";
import { useToast } from "@/components/ui/use-toast";

type Props = {
  donationOwner: string;
}

export const LatestDonationsList = ({donationOwner}: Props) => {
  const { toast } = useToast()
  
  const tokensMap = useTokensMap();
  const { data: tokenOperations } = useAllTokenOperationsQuery(1, 'donation');
  const operations = tokenOperations?.data.filter(el => el.receiver === donationOwner).slice(0,7) ?? []

  const copyButtonHandler = (address: string) => {
    return navigator.clipboard.writeText(address).then(() => {
      toast({
        description: 'Address copied to clipboard'
      })
    })
  };
  
  return (
    <div className="flex flex-1 w-full justify-center">
      <Card className="p-8 min-w-[400px] max-w-[401px]">
        <CardHeader className='font-semibold'>
          Latest Donations
        </CardHeader>
        <CardContent className='space-y-2'>
          {operations.map((item: TokenOperation, index) => {
            const token = tokensMap[item.tokenIdentifier];

            return (
              <div key={index} className='flex justify-between w-full'>
                <div className="flex items-center">
                  <span className={'ring-1 bg-slate-50 ring-slate-200 px-2 py-1 rounded-sm whitespace-nowrap'}>
                    {formatAddress(item.sender)}
                  </span>
                  <span
                    onClick={() => copyButtonHandler(item.sender)}
                    className={'ml-1 ring-1 bg-slate-50 ring-slate-200 px-1 py-1 rounded-sm hover:shadow'}
                  >
                    <Copy className={'w-4 h-4'} />
                  </span>
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
