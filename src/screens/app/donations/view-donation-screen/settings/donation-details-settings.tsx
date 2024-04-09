import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useGetAccount } from '@multiversx/sdk-dapp/hooks'

import { RoutesConfig } from '@/navigation';

import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card.tsx'
import { Textarea } from '@/components/ui/textarea'

import { Donation } from '@/features/donations/models';
import { useUpdateDonationMutation } from '@/features/donations/hooks/mutations';

type Props = {
  donation: Donation,
}

export function UpdateDonationDetailsScreen({ donation }: Props) {
  const { address } = useGetAccount()
  const navigate = useNavigate()

  const [beneficiaryName, setBeneficiaryName] = useState('')
  const [backgroundImageUrl, setBackgroundImageUrl] = useState('')
  const [description, setDescription] = useState('')
  const [formInitialized, setFormInitialized] = useState(false);

  const { mutate: ediDonation } = useUpdateDonationMutation(donation.id);

  useEffect(() => {
    if(donation === undefined || formInitialized) return;

    setBeneficiaryName(donation.beneficiaryName ?? '');
    setBackgroundImageUrl(donation.backgroundImageUrl ?? '');
    setDescription(donation.description ?? '');

    setFormInitialized(true);
  }, [donation]);

  if(!donation) return;

  if(donation && donation.owner !== address) {
    navigate(RoutesConfig.dashboard, { replace: true });
  }

  const updateDonationDetails = () => {
    const input = {
      beneficiaryName: beneficiaryName,
      backgroundImageUrl: backgroundImageUrl,
      description: description,
    }

    ediDonation(
      { id: donation.id, input: input },
      {
        onSuccess: () => navigate(RoutesConfig.donations)
      }
    )
  }
  
  return (
    <Card>
      <CardContent className={'p-6 shadow-sm space-y-4'}>
        <div className={'space-y-1'}>
          <h2 className={'font-semibold'}>Update Donation Details</h2>
          <div className={'text-muted-foreground text-sm'}>These details will be shown when someone wants to donate</div>
        </div>

        <div>
          <div className='font-semibold text-sm'>
            Beneficiary Name
          </div>
          <Input
            value={beneficiaryName ?? donation.beneficiaryName}
            placeholder='Name e.g.: MultiversX'
            onChange={(e) => setBeneficiaryName(e.target.value)}
          />
        </div>

        <div>
          <div className='font-semibold text-sm'>
            Background Image Url
          </div>
          <Input
            value={backgroundImageUrl ?? donation.backgroundImageUrl}
            placeholder='Background Image Url'
            onChange={(e) => setBackgroundImageUrl(e.target.value)}
          />
        </div>

        <div>
          <div className='font-semibold text-sm'>
            Description
          </div>
          <Textarea
            value={description ?? donation.description}
            placeholder='Description'
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <Button
          className='flex-1'
          onClick={updateDonationDetails}
        >
          Update Settings
        </Button>
      </CardContent>
    </Card>
  );
}
