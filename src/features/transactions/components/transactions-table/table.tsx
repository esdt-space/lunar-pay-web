import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { TransactionItem } from "../../models"
import moment from "moment/moment";

type Props = {
  transactions: TransactionItem[];
}

export const AgreementsTransactionsTable = ({transactions}: Props) => {
  return <Table>
    <TableHeader>
        <TableRow>
          <TableHead />
          <TableHead>Address</TableHead>
          <TableHead>Token</TableHead>
          <TableHead>Amount</TableHead>
          <TableHead className={'max-lg:hidden'}>Date</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {transactions.map((item, index) => (
          <TableRow key={index}>
            <TableCell>{item.status}</TableCell>
            <TableCell>{item.address}</TableCell>
            <TableCell>{item.token}</TableCell>
            <TableCell>{item.amount}</TableCell>
            <TableCell>{moment(item.date).format('ll')}</TableCell>
          </TableRow>
        ))}
      </TableBody>
  </Table>
}
