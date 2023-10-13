import { TableCell } from "@/components/ui/table.tsx";
import { useTokenOperationAddressText } from "@/features/token-operations/hooks";

type AddressCellProps = { value: string };

export function AddressCell(props: AddressCellProps) {
  const addressText = useTokenOperationAddressText(props.value)

  return (
    <TableCell>
      <span className={'text-xs font-medium ring-1 bg-slate-50 ring-slate-200 px-2 py-1 rounded-sm whitespace-nowrap'}>
        {addressText}
      </span>
    </TableCell>
  )
}