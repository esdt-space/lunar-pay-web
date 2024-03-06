import moment from 'moment';
import { FormatAmount } from '@multiversx/sdk-dapp/UI';

import { useTokensMap } from '@/core/tokens';
import { Donation } from '@/features/donations/models';

type Props = {
  donation: Donation;
}

export function DonationDetails(props: Props){
  const { donation } = props;

  const tokensMap = useTokensMap();
  const token = tokensMap[donation.tokenIdentifier];

  return (
    <div className='flex max-lg:flex-col justify-between gap-4'>
      <div className={'text-muted-foreground text-sm'}>
        Created on {moment(donation.createdAt).format('ll')}
      </div>
      <div className={'flex justify-between'}>
        <div className='text-2xl font-black'>
          <FormatAmount
            token={token.identifier}
            decimals={token.decimals}
            value={donation.fixedAmount as string}
          />
        </div>
      </div>
    </div>
  )
}