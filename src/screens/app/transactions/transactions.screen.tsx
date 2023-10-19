import { Card, CardContent } from "@/components/ui/card"
import { AgreementsTransactionsTable } from "@/features/transactions"
import { transactionsMockData } from "./transactions-mock.data"
import { PaginationButtons, usePagination } from "@/components/shared/pagination";
import { useMemo, useState } from "react";
import { Input } from "@/components/ui/input";

export const TransactionsScreen = () => {
  const [filterValue, setFilterValue] = useState("")

  // TODO: Replace the mock data with the with the data that comes from the db
  const filteredTransactions = useMemo(() => {
    if(filterValue === "") return transactionsMockData;
    const lowercaseFilterValue = filterValue.toLocaleLowerCase();

    return transactionsMockData.filter(item =>
      item.address.toLocaleLowerCase().includes(lowercaseFilterValue) ||
      item.status.toLocaleLowerCase().includes(lowercaseFilterValue)
    );
  }, [transactionsMockData, filterValue]);

  const { data: paginatedTransactions, ...rest} =
    usePagination(filteredTransactions, 5);
    
  return <div className={'container mx-auto p-4 sm:p-12 xl:p-16'}>
    <Input
      value={filterValue}
      onChange={e => setFilterValue(e.target.value)}
      placeholder={'Filter ...'}
      className={'justify-self-end max-w-sm mb-4'}
    />

    <Card>
      <CardContent>
        <AgreementsTransactionsTable transactions={paginatedTransactions} />
        <PaginationButtons {...{...rest}} />
      </CardContent>
    </Card>
  </div>
}
