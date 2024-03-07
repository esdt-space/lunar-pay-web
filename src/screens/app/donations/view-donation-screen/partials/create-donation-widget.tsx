import { useState } from "react";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input"

export const CreateDonationWidget = () => {
  const [receiver, setReceiver] = useState('');
  const [metadata, setMetadata] = useState('');
  const [trigger, setTrigger] = useState(false);

  const metadataParam = metadata !== '' ? `&metadata=${metadata}` : ''
  const donationUrl = `https://lunarpay.finance/donations/id?receiver=${receiver}${metadataParam}`

  const codeString = `  <a href="${donationUrl}" target="_blank">
    <img src="https://lunarpay.io/image.svg" alt="Crypto donation button by LunarPay">
  </a>`

  return (
    <Card className='flex-1 max-w-1/2 truncate'>
      <CardHeader>
        {!trigger ? 'Create Donation Widget' : 'Copy the code below and use it into your application'}
      </CardHeader>
      {!trigger ? <CardContent className='space-y-4'>
        <div>
          <div className='text-sm'>Receiver address</div>
          <Input 
            value={receiver}
            onChange={(el) => setReceiver(el.target.value)}
          />
        </div>
        <div>
          <div className='text-sm'>Metadata</div>
          <Input 
            value={metadata}
            onChange={(el) => setMetadata(el.target.value)}
          />
        </div>
        <Button 
          disabled={receiver === ''}  
          className='w-full' 
          onClick={() => setTrigger(true)}
        >
          Generate Widget
        </Button>
      </CardContent> : <CardContent className='flex flex-col'>
        <div>
          <SyntaxHighlighter
            language='typescript'
            style={dark}
            customStyle={{ backgroundColor: 'black', border: 'none', marginBottom: '24px' }}
          >
            {codeString}
          </SyntaxHighlighter>
        </div>

        <Button className='self-end' onClick={() => setTrigger(false)}>
          Close
        </Button>
      </CardContent>}
    </Card>
  )
}
