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

import { TokenOperation } from "../../models";
import { TokenOperationType } from "../../enums";

import { AddressCell } from "./address-cell.tsx";
import { TokenOperationIcon } from "./token-operation-icon.tsx";
import { TokenOperationValueCell } from "./token-operation-value-cell.tsx";
import { AgreementNameCell } from "./agreement-name-cell.tsx";
import { useNavigate } from "react-router-dom";
import { RoutesConfig } from "@/navigation/index.ts";

type Props = {
  operations: TokenOperation[];
  operationType?: TokenOperationType | 'all';
}

export const TokenOperationsTable = (props: Props) => {
  const { operations, operationType } = props;
  const isAllOrTransfer = [TokenOperationType.Transfer, "all", undefined].includes(operationType);
  const isCharge = operationType === "payment-agreement-charge"

  const navigate = useNavigate()

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead />
          <TableHead>Amount</TableHead>
          {isAllOrTransfer && <TableHead className={'max-md:hidden'}>Type</TableHead>}
          {(isAllOrTransfer || isCharge) && <TableHead>From</TableHead>}
          {(isAllOrTransfer || isCharge) && <TableHead>To</TableHead>}
          {isCharge && <TableHead className={'max-lg:hidden'}>Agreement</TableHead>}
          <TableHead className={'max-lg:hidden'}>Date</TableHead>
          <TableHead className="max-w-[150px]"></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {operations.map((item, index) => (
          <TableRow key={index} onClick={() => {
            if(item.type === "payment-agreement-charge") {
              navigate(`${RoutesConfig.tokensOperations}/${item._id}`)
            }
          }}>
            <TableCell>
              <TokenOperationIcon operation={item} />
            </TableCell>
            <TokenOperationValueCell operation={item} />
            {isAllOrTransfer && <TableCell className={'max-md:hidden'}>
              {item.type === TokenOperationType.Charge ? "charge" : item.type}
            </TableCell>}
            {(isAllOrTransfer || isCharge) && (item.sender ? <AddressCell value={item.sender} /> : "-")}
            {(isAllOrTransfer || isCharge) && (item.receiver ? <AddressCell value={item.receiver} /> : "-")}
            {isCharge && <AgreementNameCell tokenOperationItem={item} />}
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