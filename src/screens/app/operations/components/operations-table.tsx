import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { useGetAccount } from "@multiversx/sdk-dapp/hooks"

type Props = {
  operationsList: any[]
  operations: string
}

export const OperationsTable = ({ operationsList, operations }: Props) => {
  const { address } = useGetAccount()

  return (
    <Table>
    <TableHeader>
      <TableRow className="flex justify-between">
        <TableHead className="flex-1">Token</TableHead>
        <TableHead className="flex-1">Amount</TableHead>
        {(operations === "all" || operations === "transfers") && <TableHead className="flex-1">Type</TableHead>}
        {(operations === "all" || operations === "transfers") && <TableHead className="flex-1">From</TableHead>}
        {(operations === "all" || operations === "transfers") && <TableHead className="flex-1">To</TableHead>}
        <TableHead className="flex-1">Date</TableHead>
        <TableHead className="flex-1 max-w-[150px]">View On Explorer</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      {operationsList.map((item, index) => (
        <TableRow key={index} className="flex justify-between">
          <TableCell className="flex-1">{item.token}</TableCell>
          <TableCell className="flex-1">{item.totalAmount}</TableCell>
          {(operations === "all" || operations === "transfers") && <TableCell className="flex-1">{item.type}</TableCell>}
          {(operations === "all" || operations === "transfers") && <TableCell className="flex-1">{item.from === address ? "You" : item.from}</TableCell>}
          {(operations === "all" || operations === "transfers") && <TableCell className="flex-1">{item.to === address ? "You" : item.to}</TableCell>}
          <TableCell className="flex-1">{item.createdAt}</TableCell>
          <TableCell className="flex-1 max-w-[150px] truncate">{item.txHash}</TableCell>
        </TableRow>
      ))}
    </TableBody>
    </Table>
  )
}