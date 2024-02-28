import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

import { ContainedScreen } from "@/components/prefab/contained-screen"
import { useToast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';

export const DonationButtonTool = () => {
  const { toast } = useToast()
  
  const donationButtonTemplate = `  <a href="INSERT_YOUR_DONATION_URL_HERE" target="_blank">
    <img src="https://lunarpay.io/image.svg" alt="Crypto donation button by LunarPay">
  </a>`;
  const urlFormat = ` https://lunarpay.finance/donation?receiver=YOUR_WALLET_ADDRESS&metadata=YOUR_CUSTOM_METADATA`
  const exampleUrl = ` https://lunarpay.finance/donation?receiver=erd1yng4ajnxp03lx5erwcq57m5502m6t9nxajf5hv9nw0k27t8zcq4qq3vu4v&metadata=custom_string`
  const embeddedDonationButton = `  <a href="https://lunarpay.finance/donation?receiver=erd1yng4ajnxp03lx5erwcq57m5502m6t9nxajf5hv9nw0k27t8zcq4qq3vu4v&metadata=custom_string" target="_blank">
    <img src="https://lunarpay.io/image.svg" alt="Crypto donation button by LunarPay">
  </a>`;

  const copyButtonHandler = (input: string) => {
    return navigator.clipboard.writeText(input).then(() => {
      toast({
        description: 'Copied URL to clipboard'
      })
    })
  };

  return (
    <ContainedScreen className='w-3/5'>
      <div className='text-2xl text-center'>Donation Button</div>

      <div className='text-2xl font-semibold mt-16 mb-4'>How to Create Your Crypto Donation Button URL</div>
      <div className='text-lg'>This guide will walk you through crafting the URL for your donation button, ensuring your supporters can donate seamlessly.</div>

      <div className='text-2xl font-semibold mt-16 mb-4'>Donation Button HTML Code</div>
      <div className='text-lg'>First, here's a template for the donation button you'll embed on your site.</div>
      <SyntaxHighlighter 
        language="typescript" 
        style={dark} 
        customStyle={{backgroundColor: 'black', border: 'none', marginTop: '24px', marginBottom: '24px'}}
      >
        {donationButtonTemplate}
      </SyntaxHighlighter>
      <Button onClick={() => copyButtonHandler(donationButtonTemplate)}>Copy to clipboard</Button>
      <div className='text-lg mt-4'>Replace `INSERT_YOUR_DONATION_URL_HERE` with your custom donation URL following the guidelines below.</div>

      <div className='text-2xl font-semibold mt-16 mb-4'>Constructing Your Donation URL</div>
      <div className='text-lg'>Your donation URL will direct supporters to a simple donation process. Construct this URL with the following format:</div>
      <SyntaxHighlighter 
        language="typescript" 
        style={dark} 
        customStyle={{backgroundColor: 'black', border: 'none', marginTop: '24px', marginBottom: '24px'}}
      >
        {urlFormat}
      </SyntaxHighlighter>
      <Button onClick={() => copyButtonHandler(urlFormat)}>Copy to clipboard</Button>

      <div className='text-xl font-semibold mt-8 mb-4'>Parameters:</div>
      <div className='mt-4'>
        <div className='text-lg'>
          <span className='font-bold'>receiver:</span> Your cryptocurrency wallet address where the payment will be received. This is a unique identifier and should be input without spaces.
        </div>

        <div className='text-lg'>
          <span className='font-bold'>metadata:</span> A custom string that you can use to track donations, recognize donors, or specify the cause. This field is optional and can be tailored to your tracking needs.
        </div>
      </div>

      <div className='text-2xl font-semibold mt-16 mb-4'>Example URL</div>
      <SyntaxHighlighter 
        language="typescript"
        style={dark} 
        customStyle={{backgroundColor: 'black', border: 'none', marginTop: '24px', marginBottom: '24px'}}
      >
        {exampleUrl}
      </SyntaxHighlighter>
      <Button onClick={() => copyButtonHandler(exampleUrl)}>Copy to clipboard</Button>

      <div className='text-2xl font-semibold mt-16 mb-4'>Embedding the Button</div>
      <div className='text-lg'>Once your URL is ready, embed the donation button in your website's HTML where you want it to appear, using the complete URL:</div>
      <SyntaxHighlighter 
        language="typescript"
        style={dark} 
        customStyle={{backgroundColor: 'black', border: 'none', marginTop: '24px', marginBottom: '24px'}}
      >
        {embeddedDonationButton}
      </SyntaxHighlighter>
      <Button onClick={() => copyButtonHandler(embeddedDonationButton)}>Copy to clipboard</Button>

      <div className='text-xl font-semibold mt-16 mb-16'>
        Tailoring these instructions to your specific needs and the cryptocurrency you're accepting will ensure your donors have all the information they need for a smooth donation process.
      </div>
    </ContainedScreen>
  )
}
