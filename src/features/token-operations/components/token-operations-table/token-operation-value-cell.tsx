import { TableCell } from "@/components/ui/table.tsx";
import { TokenOperation } from "@/features/token-operations/models";
import {FormatAmount} from "@multiversx/sdk-dapp/UI";

type Props = {
  operation: TokenOperation;
}

export function TokenOperationValueCell(props: Props) {
  return (
    <TableCell className={'whitespace-nowrap font-medium'}>
      <FormatAmount
        token={props.operation.tokenIdentifier}
        value={props.operation.amount.toString()}
      />
    </TableCell>
  )
}