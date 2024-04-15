import { Copy } from 'lucide-react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

import { useToast } from '@/components/ui/use-toast';

type Props = {
  codeString: string;
  hasSubtitle?: boolean;
  subtitleStyling?: string;
  copyIconStyling?: string;
}

export const CodeStringHighlighter = (props: Props) => {
  const { codeString, hasSubtitle, subtitleStyling, copyIconStyling } = props
  const { toast } = useToast();
  
  const copyButtonHandler = () => {
    return navigator.clipboard.writeText(codeString).then(() => {
      toast({
        description: 'Code String copied to clipboard'
      })
    })
  };

  const displaySubtitle = hasSubtitle ? true : false;

  return <div className='relative'>
    {displaySubtitle && <div className={`absolute text-white left-9 ${subtitleStyling}`}>
      Copy the code below and use it into your application
    </div>}
    <SyntaxHighlighter
      language='typescript'
      style={dark}
      customStyle={{ 
        backgroundColor: 'black', 
        border: 'none', 
        marginTop: '24px', 
        marginBottom: '24px', 
        paddingTop: hasSubtitle ? '54px' : '16px',
      }}
    >
      {codeString}
    </SyntaxHighlighter>
    <span className={`absolute right-5 text-white cursor-pointer ${copyIconStyling}`} onClick={copyButtonHandler}>
      <Copy className={'w-4 h-4'} />
    </span>
  </div>
}
