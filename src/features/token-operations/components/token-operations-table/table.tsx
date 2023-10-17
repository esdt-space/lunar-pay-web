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
import { useSortByDate } from "../../hooks/useSortByDate.ts";
import { useState } from "react";
import { DatePickerWithRange } from "./date-range-picker.tsx";
import { DateRange } from "react-day-picker";
import { useFilterByDateRange } from "../../hooks/useFilterByDate.tsx";

type Props = {
  operations: TokenOperation[]
  operationType?: TokenOperationType | 'all'
}

export const TokenOperationsTable = (props: Props) => {
  const { operations, operationType } = props;
  const isAllOrTransfer = [TokenOperationType.Transfer, "all", undefined].includes(operationType);

  const [date, setDate] = useState<DateRange | undefined>(undefined)

  const filteredData = useFilterByDateRange(operations, date)

  const [sortDescending, setSortDescending] = useState(false)
  const [sortOrder, setSortOrder] = useState('desc')
  const renderValues = useSortByDate(date !== undefined ? filteredData : operations, sortOrder)

  const handleSorting = () => {
    const updateSortOrder = sortDescending ? "desc" : "asc"

    setSortDescending(!sortDescending)
    setSortOrder(updateSortOrder)
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
          <TableHead 
            className={'max-lg:hidden flex items-center cursor-pointer space-x-4'}>
              <div onClick={handleSorting}>
                Date
              </div>
              <DatePickerWithRange date={date} setDate={setDate} />
          </TableHead>
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