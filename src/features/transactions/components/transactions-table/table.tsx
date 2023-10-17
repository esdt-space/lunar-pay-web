import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { TransactionItem } from "../../models"

type Props = {
  transactions: TransactionItem[];
}

export const Transactionstable = ({transactions}: Props) => {
  return <Table>
    <TableHeader>
        <TableRow>
          <TableHead>Address</TableHead>
          <TableHead>Amount</TableHead>
          <TableHead>Token</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className={'max-lg:hidden'}>Date</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {transactions.map((item, index) => (
          <TableRow key={index}>
            <TableCell>{item.address}</TableCell>
            <TableCell>{item.amount}</TableCell>
            <TableCell>{item.token}</TableCell>
            <TableCell>{item.status}</TableCell>
            <TableCell>{item.date}</TableCell>
          </TableRow>
        ))}
      </TableBody>
  </Table>
}
