import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { TransactionItem } from "../../models"
import moment from "moment/moment";
import { AppEnvironment } from "@/environment";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { AddressCell } from "./address-cell";

type Props = {
  transactions: TransactionItem[];
}

export const AgreementsTransactionsTable = ({transactions}: Props) => {
  return <Table>
    <TableHeader>
        <TableRow>
          <TableHead />
          <TableHead>Amount</TableHead>
          <TableHead>Type</TableHead>
          <TableHead>From</TableHead>
          <TableHead>To</TableHead>
          <TableHead className={'max-lg:hidden'}>Date</TableHead>
          <TableHead className="max-w-[150px]"></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {transactions.map((item, index) => (
          <TableRow key={index}>
            <TableCell>{item.status}</TableCell>
            <TableCell>{item.amount} {item.token}</TableCell>
            <TableCell>Charge</TableCell>
            <AddressCell value={item.address} />
            <AddressCell value={item.address} />
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
