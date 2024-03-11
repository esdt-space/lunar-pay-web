import { useState } from "react";
import { Copy } from "lucide-react";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useGetAccount } from "@multiversx/sdk-dapp/hooks";

import { DonationsService } from "@/features/donations/donation.service";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input"
import { useToast } from "@/components/ui/use-toast";

type Props = {
  donationId: string;
}

const lunarPayTestUrl = import.meta.env.VITE_LUNARPAY_TEST_URL
const lunarPayInfoUrl = import.meta.env.VITE_LUNARPAY_MEDIA_URL

export const CreateDonationWidget = ({ donationId }: Props) => {
  const [ metadata, setMetadata ] = useState('');
  const [ displayCodeString, setDisplayCodeString ] = useState(false);
  const { toast } = useToast();
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

  const copyButtonHandler = () => {
    return navigator.clipboard.writeText(codeString).then(() => {
      toast({
        description: 'Code String copied to clipboard'
      })
    })
  };

  return (
    <Card className='flex-1 max-w-1/2 truncate'>
      {!displayCodeString ? <div>
        <CardHeader>
          Create Donation Widget
        </CardHeader>
        <CardContent className='space-y-4'>
          <div>
            <div>Metadata</div>
            <div className={'text-muted-foreground text-sm'}>Optional param used for sending you notifications about payments</div>
            <Input 
              value={metadata}
              onChange={(el) => setMetadata(el.target.value)}
            />
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
        <div className='relative'>
          <div className='absolute text-white top-9 left-9'>
            Copy the code below and use it into your application
          </div>
          <SyntaxHighlighter
            language='typescript'
            style={dark}
            customStyle={{ 
              backgroundColor: 'black', 
              border: 'none', 
              marginTop: '24px', 
              marginBottom: '24px', 
              paddingTop: '54px',
            }}
          >
            {codeString}
          </SyntaxHighlighter>
          <span className='absolute right-5 top-10 text-white cursor-pointer' onClick={copyButtonHandler}>
            <Copy className={'w-4 h-4'} />
          </span>
        </div>

        <Button className='w-full' onClick={() => setDisplayCodeString(false)}>
          Close
        </Button>
      </CardContent>}
    </Card>
  )
}
