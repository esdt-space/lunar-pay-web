import { Copy } from "lucide-react";
import { useToast } from "@/components/ui/use-toast.ts";

export const CopyIconComponent = ({address}: {address: string}) => {
  const { toast } = useToast()

  const copyButtonHandler = () => {
    return navigator.clipboard.writeText(address).then(() => {
      toast({
        description: 'Address copied to clipboard'
      })
    })
  };

  return (
    <span
      onClick={copyButtonHandler}
      className={'ml-1 px-1 py-1 cursor-pointer'}
    >
      <Copy className={'w-4 h-4'} />
    </span>
  )
}
