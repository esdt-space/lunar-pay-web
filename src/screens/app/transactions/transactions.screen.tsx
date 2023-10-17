import { Card, CardContent } from "@/components/ui/card"
import { AgreementsTransactionsTable } from "@/features/transactions"
import { transactionsMockData } from "./transactions-mock.data"
import { PaginationButtons, usePagination } from "@/components/shared/pagination";

export const TransactionsScreen = () => {

  const { data: paginatedTransactions, ...rest} =
    usePagination(transactionsMockData, 5);
    
  return <div className={'container mx-auto p-4 sm:p-12 xl:p-16'}>
    <Card>
      <CardContent>
        <AgreementsTransactionsTable transactions={paginatedTransactions} />
        <PaginationButtons {...{...rest}} />
      </CardContent>
    </Card>
  </div>
}
