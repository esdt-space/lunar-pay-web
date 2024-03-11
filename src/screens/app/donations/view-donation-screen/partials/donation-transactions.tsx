import { useState } from "react";

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { TokenOperationsTable } from "@/features/token-operations/components"
import { useTokenOperationsQuery } from "@/features/token-operations/hooks/queries";
import { useEmptyStateContent } from "../hooks";
import { useLoadingStateContent } from "@/screens/app/operations/hooks";
import { PaginationButtons } from "@/components/shared/pagination";

export const DonationTransactions = () => {
  const [currentPage, setCurrentPage] = useState(1)
  
  const { data, isFetching, isFetched } = useTokenOperationsQuery(currentPage, 'donation');
  const operations = data?.operations ?? [];
  const numberOfPages = data?.numberOfPages

  const nextPageHandler = () => setCurrentPage(page => page + 1);
  const previousPageHandler = () => setCurrentPage(page => Math.max(1, page - 1));

  const isLoadingFirstTime = !isFetched && isFetching;
  const isLoadedAndHasData = isFetched && operations.length > 0;
  const isLoadedAndHasNoData = isFetched && operations.length === 0;

  const emptyStateContent = useEmptyStateContent(isLoadedAndHasNoData);
  const loadingStateContent = useLoadingStateContent(isLoadingFirstTime);

  return (
    <Card>
      <CardHeader className='text-lg font-semibold'>
        Latest Donations
      </CardHeader>
      <CardContent className={'p-0'}>
        {emptyStateContent}
        {loadingStateContent}

        {isLoadedAndHasData && (
          <div>
            <TokenOperationsTable
              operations={operations} />
            <PaginationButtons 
              previousPageHandler={previousPageHandler} 
              nextPageHandler={nextPageHandler}
              currentPage={currentPage}
              lastPage={numberOfPages} />
          </div>
        )}
      </CardContent>
    </Card>
  )
}
