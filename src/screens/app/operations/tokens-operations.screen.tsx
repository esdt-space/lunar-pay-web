import { useMemo, useState } from "react";

import { Card, CardContent } from "@/components/ui/card.tsx";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

import { TokenOperationType } from "@/features/token-operations/enums";
import { TokenOperationsTable } from "@/features/token-operations/components";
import { useTokenOperationsQuery } from "@/features/token-operations/hooks/queries";
import { useLoadingStateContent, useEmptyStateContent } from "@/screens/app/operations/hooks";
import { usePagination } from "@/screens/app/operations/hooks/use-pagination";
import { PaginationButtons } from "./pagination";

export const TokensOperationsScreen = () => {
  const { data: operations = [], isFetching, isFetched } = useTokenOperationsQuery();
  const [operationType, setOperationType] = useState<TokenOperationType | "all">("all");
  const itemsPerPage = 10;

  const operationsFilteredByType = useMemo(() => {
    if(operationType === "all") return operations;

    return operations.filter(item => item.type === operationType);
  }, [operations, operationType]);

  const isLoadingFirstTime = !isFetched && isFetching;
  const isLoadedAndHasData = isFetched && operations.length > 0;
  const isLoadedAndHasNoData = isFetched && operations.length === 0;

  const emptyStateContent = useEmptyStateContent(isLoadedAndHasNoData);
  const loadingStateContent = useLoadingStateContent(isLoadingFirstTime);

  const {
    next,
    prev,
    currentPage,
    currentData,
    maxPage
  } = usePagination(operationsFilteredByType, itemsPerPage);

  return (
    <div className={'container mx-auto p-4 sm:p-12 xl:p-16 space-y-3'}>
      <Tabs defaultValue="all" onValueChange={(value) => setOperationType(value as TokenOperationType)}>
        <TabsList className={'self-start mb-2'}>
          <TabsTrigger value={'all'} disabled={isLoadingFirstTime}>All</TabsTrigger>
          <TabsTrigger value={TokenOperationType.Deposit} disabled={isLoadingFirstTime}>Deposits</TabsTrigger>
          <TabsTrigger value={TokenOperationType.Withdraw} disabled={isLoadingFirstTime}>Withdrawals</TabsTrigger>
          <TabsTrigger value={TokenOperationType.Transfer} disabled={isLoadingFirstTime}>Transfers</TabsTrigger>
        </TabsList>
      </Tabs>

      <Card>
        <CardContent className={'p-0'}>
          {emptyStateContent}
          {loadingStateContent}

          {isLoadedAndHasData && (
            <div>
              <TokenOperationsTable operationType={operationType} operations={currentData}/>
              <PaginationButtons currentPage={currentPage} maxPage={maxPage} prev={prev} next={next} />
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}