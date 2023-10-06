import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

type Props = {
  operationsList: any[]
  operations: string
}

export const OperationsTable = ({ operationsList, operations }: Props) => {
  return (
    <Table>
    <TableCaption>A list of your recent {`${operations}`}.</TableCaption>
    <TableHeader>
      <TableRow className="flex justify-between">
        <TableHead className="flex-1">Token</TableHead>
        <TableHead className="flex-1">Amount</TableHead>
        <TableHead className="flex-1">Status</TableHead>
        <TableHead className="flex-1">From</TableHead>
        <TableHead className="flex-1">To</TableHead>
        <TableHead className="flex-1">Created</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      {operationsList.map((item, index) => (
        <TableRow key={index} className="flex justify-between">
          <TableCell className="flex-1">{item.token}</TableCell>
          <TableCell className="flex-1">{item.totalAmount}</TableCell>
          <TableCell className="flex-1">{item.paymentStatus}</TableCell>
          <TableCell className="flex-1">{item.from}</TableCell>
          <TableCell className="flex-1">{item.to}</TableCell>
          <TableCell className="flex-1">{item.createdAt}</TableCell>
        </TableRow>
      ))}
    </TableBody>
    </Table>
  )
}