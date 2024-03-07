import { useNavigate, useParams } from 'react-router-dom'
import { useGetAccount } from '@multiversx/sdk-dapp/hooks'

import { ContainedScreen } from '@/components/prefab/contained-screen'
import { useCreatedDonation } from '@/features/donations/hooks'
import { RoutesConfig } from '@/navigation'
import { CreateDonationWidget, DonationDetails, DonationTransactions } from './partials'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { RedirectAndWebhooksSettings, UpdateDonationDetailsScreen } from './settings'

export const ViewDonationScreen = () => {
  const { address } = useGetAccount();
  const { id } = useParams();
  const navigate = useNavigate();

  const { data: donation } = useCreatedDonation(id);

  if(!donation) return;

  if(donation && donation.owner !== address) {
    navigate(RoutesConfig.dashboard, { replace: true });
  }

  return (
    <ContainedScreen>
      <Tabs defaultValue='overview'>
        <TabsList className={'self-start mb-2'}>
          <TabsTrigger value='overview'>Overview</TabsTrigger>
          <TabsTrigger value='details-settings'>Details Settings</TabsTrigger>
          <TabsTrigger value='callback-settings'>Callback Settings</TabsTrigger>
        </TabsList>

        <TabsContent value='overview' className={'space-y-4'}>
          <div className='flex flex-col space-y-4'>
            <div className='flex max-lg:flex-col max-lg:space-y-4 justify-between lg:space-x-4'>
              <DonationDetails donation={donation}/>
              <CreateDonationWidget />
            </div>
            <div>
              <DonationTransactions />
            </div>
          </div>
        </TabsContent>

        <TabsContent value='details-settings' className={'space-y-4'}>
          <UpdateDonationDetailsScreen donation={donation} />
        </TabsContent>

        <TabsContent value='callback-settings' className={'space-y-4'}>
          <RedirectAndWebhooksSettings donation={donation} />
        </TabsContent>
      </Tabs>
    </ContainedScreen>
  )
}
