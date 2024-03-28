import moment from 'moment';
import { Copy } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

import { Donation } from '@/features/donations/models';
import { Separator } from '@/components/ui/separator';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';
import { RoutesConfig } from '@/navigation';

type Props = {
  donation: Donation;
}

const lunarPayTestUrl = import.meta.env.VITE_LUNARPAY_TEST_URL

export function DonationDetails(props: Props){
  const { donation } = props;

  const { toast } = useToast();
  const navigate = useNavigate();

  const publicDonationUrl = `${lunarPayTestUrl}/donations/${donation.id}/public`;

  const copyButtonHandler = () => {
    return navigator.clipboard.writeText(publicDonationUrl).then(() => {
      toast({
        description: 'Public donation Url copied to clipboard'
      })
    })
  };

  const navigateToPublicScreen = () => {
    navigate(`${RoutesConfig.donations}/${donation.id}/public`)
  }

  return (
    <Card className='flex-1 pt-6'>
      <CardContent>
        <div className='flex flex-col space-y-6'>
          <div className='flex justify-between'>
            <div className='flex flex-col'>
              <div className={'text-muted-foreground text-sm'}>
                Created on {moment(donation.createdAt).format('ll')}
              </div>
              <div className={'flex justify-between'}>
                <div className='text-2xl font-black'>
                  {donation.beneficiaryName}
                </div>
              </div>
            </div>
            <Button onClick={navigateToPublicScreen}>
              Preview
            </Button>
          </div>

          {donation.description && 
            <div className='flex flex-col space-y-2'>
              <Separator />
              <div>
                {donation.description}
              </div>
            </div>}

          <div className='flex flex-col space-y-4'>
            <Separator />
            <div className="relative flex w-full space-x-2 items-center">
              <Input className='truncate pr-10' value={publicDonationUrl} readOnly />
              <span className='absolute right-4 cursor-pointer' onClick={copyButtonHandler}>
                <Copy className={'w-4 h-4'} />
              </span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
