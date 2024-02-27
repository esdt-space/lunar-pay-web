import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

import { ContainedScreen } from "@/components/prefab/contained-screen"

export const DonationButtonTool = () => {
  const codeString = `  <a href="https://lunarpay.finance/donation" target="_blank">
    <img src="https://lunarpay.io/image.svg" alt="Crypto donation button by LunarPay">
  </a>`;

  return (
    <ContainedScreen>
      <div className='text-2xl text-center'>Donation Button Tool</div>

      <SyntaxHighlighter 
        language="typescript" 
        style={dark} 
        customStyle={{backgroundColor: 'black', border: 'none', marginTop: '24px', marginBottom: '24px'}}
      >
        {codeString}
      </SyntaxHighlighter>
    </ContainedScreen>
  )
}
