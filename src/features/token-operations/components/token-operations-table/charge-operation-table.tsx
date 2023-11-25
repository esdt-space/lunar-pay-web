import moment from "moment/moment";
import { ArrowUpRight } from "lucide-react";

import AppEnvironment from "@/environment/app.environment.ts";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table.tsx"
import { Button } from "@/components/ui/button.tsx";

import { TokenOperation } from "../../models/index.ts";

import { AddressCell } from "./address-cell.tsx";
import { TokenOperationValueCell } from "./token-operation-value-cell.tsx";
import { AgreementNameCell } from "./agreement-name-cell.tsx";

type Props = {
  operations: TokenOperation[];
}

export const ChargeOperationTable = (props: Props) => {
  const { operations } = props;

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Amount</TableHead>
          <TableHead>From</TableHead>
          <TableHead className={'max-lg:hidden'}>Agreement</TableHead>
          <TableHead className={'max-lg:hidden'}>Date</TableHead>
          <TableHead className="max-w-[150px]"></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {operations.map((item, index) => (
          <TableRow key={index}>
            <TokenOperationValueCell operation={item} />
            <AddressCell value={item.sender} />
            <AgreementNameCell tokenOperationItem={item} />
            <TableCell className={'max-lg:hidden text-muted-foreground'}>{moment(item.createdAt).format('ll')}</TableCell>
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
  )
}