import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { TransactionItem } from "../../models"
import moment from "moment/moment";
import { AppEnvironment } from "@/environment";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

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
          <TableHead className="max-w-[150px]"></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {transactions.map((item, index) => (
          <TableRow key={index}>
            <TableCell>{item.status}</TableCell>
            <TableCell>{item.address}</TableCell>
            <TableCell>{item.token}</TableCell>
            <TableCell>{item.amount}</TableCell>
            <TableCell className={'max-lg:hidden text-muted-foreground'}>{moment(item.date).format('ll')}</TableCell>
            <TableCell className="truncate text-right">
              <Button asChild variant={'ghost'} size={'sm'}>
                <a
                  target={'_blank'}
                  className={'text-xs'}
                  href={`${AppEnvironment.mvx.explorerUrl}/transactions/${item.txHash}`}
                >
                  Explorer
                  <ArrowUpRight className={'ml-1 w-4 h-4'} />
                </a>
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
  </Table>
}
