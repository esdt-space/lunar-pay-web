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

import { Badge } from "@/components/ui/badge.tsx";
import { AgreementTrigger } from "../../models";
import { FormatAmount } from "@multiversx/sdk-dapp/UI";

type Props = {
  triggersList: AgreementTrigger[];
  tokenDecimals: number;
}

export const AgreementTriggersTable = (props: Props) => {
  const { triggersList, tokenDecimals } = props;

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead />
          <TableHead>Successful</TableHead>
          <TableHead>Failed</TableHead>
          <TableHead className={'max-lg:hidden'}>Date</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {triggersList.map((item, index) => (
          <TableRow key={index}>
            <TableCell></TableCell>
            <TableCell>
              {item.successfulChargeAmount ?
                <FormatAmount value={item.successfulChargeAmount as string} decimals={tokenDecimals} /> : 
                <Badge
                  variant={'outline'}
                  className={'text-yellow-500 border-yellow-500'}
                >
                  Missing Data
                </Badge>}
            </TableCell>
            <TableCell>
              {item.failedChargeAmount ?
                <FormatAmount value={item.failedChargeAmount as string} decimals={tokenDecimals} /> : 
                <Badge
                  variant={'outline'}
                  className={'text-yellow-500 border-yellow-500'}
                >
                  Missing Data
                </Badge>}
            </TableCell>
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