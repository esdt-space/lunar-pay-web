import { Copy } from "lucide-react";
import { TableCell } from "@/components/ui/table.tsx";

import { formatAddress } from "@/utils/address";
import { TokenOperationAddressType } from "@/features/token-operations/enums";
import { useTokenOperationAddressType } from "@/features/token-operations/hooks";

type AddressCellProps = { value: string };

export function AddressCell(props: AddressCellProps) {
  const addressType = useTokenOperationAddressType(props.value);

  const copyButtonHandler = () => {
    return navigator.clipboard.writeText(props.value)
  };

  return (
    <TableCell>
      <span className={'flex items-center text-xs font-medium'}>
        <span className={'ring-1 bg-slate-50 ring-slate-200 px-2 py-1 rounded-sm whitespace-nowrap'}>
          {addressType === TokenOperationAddressType.Self && "You"}
          {addressType === TokenOperationAddressType.LunarPayVault && "Lunar Pay Vault"}
          {addressType === TokenOperationAddressType.ActualAddress && formatAddress(props.value)}
        </span>

        {addressType === TokenOperationAddressType.ActualAddress && (
          <span
            onClick={copyButtonHandler}
            className={'ml-1 ring-1 bg-slate-50 ring-slate-200 px-1 py-1 rounded-sm hover:shadow'}
          >
            <Copy className={'w-4 h-4'} />
          </span>
        )}
      </span>
    </TableCell>
  )
}