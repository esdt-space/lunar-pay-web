import moment from "moment/moment";
import { ArrowUpRight, Check, X } from "lucide-react";

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
          <TableHead>Status</TableHead>
          <TableHead>Amount</TableHead>
          <TableHead className={'max-lg:hidden'}>Date</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {triggersList.map((item, index) => (
          <TableRow key={index}>
            <TableCell>{item.successfulChargeAmount ? 
              <Check className={'w-4 h-4 sm:w-6 sm:h-6 text-green-700'} /> : 
              <X className={'w-4 h-4 sm:w-6 sm:h-6 text-red-700'} />}
            </TableCell>
            <TableCell>{item.successfulChargeAmount ? "Success" : "Failed"}</TableCell>
            <TableCell>
              {item.successfulChargeAmount ? 
                <FormatAmount value={item.successfulChargeAmount as string} decimals={tokenDecimals} /> :
                <FormatAmount value={item.failedChargeAmount as string} decimals={tokenDecimals} />
              }
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