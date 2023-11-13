import { Copy } from "lucide-react";

export const CopyIconComponent = ({address}: {address: string}) => {
  const copyButtonHandler = () => {
    return navigator.clipboard.writeText(address)
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
