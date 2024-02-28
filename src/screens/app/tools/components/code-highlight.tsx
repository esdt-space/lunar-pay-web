import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

import { useToast } from "@/components/ui/use-toast"
import { Button } from '@/components/ui/button';

type Props = {
  codeString: string
}

export const CodeHighlight = ({codeString}: Props) => {
  const { toast } = useToast()
  
  const copyButtonHandler = (input: string) => {
    return navigator.clipboard.writeText(input).then(() => {
      toast({
        description: 'Copied URL to clipboard'
      })
    })
  };

  return (
    <div>
      <SyntaxHighlighter 
        language="typescript" 
        style={dark} 
        customStyle={{backgroundColor: 'black', border: 'none', marginTop: '24px', marginBottom: '24px'}}
      >
        {codeString}
      </SyntaxHighlighter>
      <Button onClick={() => copyButtonHandler(codeString)}>Copy to clipboard</Button>
    </div>
  )
}
