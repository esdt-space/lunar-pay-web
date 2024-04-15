import { useState } from "react";
import { useGetAccount } from "@multiversx/sdk-dapp/hooks";

import { DonationsService } from "@/features/donations/donation.service";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { CodeStringHighlighter } from "../../components";

type Props = {
  donationId: string;
}

const lunarPayTestUrl = import.meta.env.VITE_LUNARPAY_TEST_URL
const lunarPayInfoUrl = import.meta.env.VITE_LUNARPAY_MEDIA_URL

export const CreateDonationWidget = ({ donationId }: Props) => {
  const [ metadata, setMetadata ] = useState('');
  const [ displayCodeString, setDisplayCodeString ] = useState(false);
  const { address } = useGetAccount();

  const metadataParam = metadata !== '' ? `?metadata=${metadata}` : ''
  const donationUrl = `${lunarPayTestUrl}/donations/${donationId}/public${metadataParam}`

  const codeString = `  <a href="${donationUrl}" target="_blank">
    <img src="${lunarPayInfoUrl}/image.svg" alt="Crypto donation button by LunarPay">
  </a>`

  const generateWidget = () => {
    const dto = {
      receiver: address,
      metadata: metadata,
      codeString: codeString,
      donationId: donationId
    }

    DonationsService.createDonationWidget(dto);
    setDisplayCodeString(true);
  }

  return (
    <Card className='flex-1 max-w-1/2 truncate'>
      {!displayCodeString ? <div>
        <CardHeader>
          Create Donation Widget
        </CardHeader>
        <CardContent className='space-y-4'>
          <div>
            <div>Metadata</div>
            <div className='border rounded-md p-4 grayscale bg-slate-100'>
              <div className={'text-muted-foreground text-sm'}>Optional param used for sending you notifications about payments</div>
              <Input 
                value={metadata}
                onChange={(el) => setMetadata(el.target.value)}
              />
            </div>
          </div>
          <Button  
            className='w-full' 
            onClick={generateWidget}
          >
            Generate Widget
          </Button>
        </CardContent>
      </div> 
      : 
      <CardContent className='flex flex-col'>
        <CodeStringHighlighter 
          codeString={codeString} 
          hasSubtitle
          subtitleStyling={'top-9'} 
          copyIconStyling={'top-10'}
        />

        <Button className='w-full' onClick={() => setDisplayCodeString(false)}>
          Close
        </Button>
      </CardContent>}
    </Card>
  )
}
