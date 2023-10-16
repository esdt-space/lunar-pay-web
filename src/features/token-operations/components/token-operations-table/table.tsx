import moment from "moment/moment";
import { ArrowDown, ArrowUp, ArrowUpRight } from "lucide-react";

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
import { useSortByDate } from "../../hooks/useSortByDate.ts";
import { useState } from "react";

type Props = {
  operations: TokenOperation[]
  operationType?: TokenOperationType | 'all'
}

export const TokenOperationsTable = (props: Props) => {
  const { operations, operationType } = props;
  const isAllOrTransfer = [TokenOperationType.Transfer, "all", undefined].includes(operationType);

  const [triggerSorting, setTriggerSorting] = useState(false)
  const [sortAscending, setSortAscending] = useState(false)
  const [sortOrder, setSortOrder] = useState('asc')
  const sortedOperations = useSortByDate(operations, sortOrder)

  const renderValues = triggerSorting ? sortedOperations : operations

  const handleSorting = () => {
    const updateSortOrder = sortAscending ? "asc" : "desc"

    setTriggerSorting(true)
    setSortAscending(!sortAscending)
    setSortOrder(updateSortOrder)
  }

  const SortingArrow = () => {
    if(!triggerSorting) {
      return
    }

    return <>
      {sortAscending ? <ArrowUp /> : <ArrowDown />}
    </>
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead />
          <TableHead>Amount</TableHead>
          {isAllOrTransfer && <TableHead className={'max-md:hidden'}>Type</TableHead>}
          {isAllOrTransfer && <TableHead>From</TableHead>}
          {isAllOrTransfer && <TableHead>To</TableHead>}
          <TableHead className={'max-lg:hidden flex items-center cursor-pointer space-x-2'} onClick={handleSorting}><div>Date</div> <SortingArrow /> </TableHead>
          <TableHead className="max-w-[150px]"></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {renderValues.map((item, index) => (
          <TableRow key={index}>
            <TableCell>
              <TokenOperationIcon operation={item} />
            </TableCell>
            <TokenOperationValueCell operation={item} />
            {isAllOrTransfer && <TableCell className={'max-md:hidden'}>{item.type}</TableCell>}
            {isAllOrTransfer && <AddressCell value={item.sender} />}
            {isAllOrTransfer && <AddressCell value={item.receiver} />}
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