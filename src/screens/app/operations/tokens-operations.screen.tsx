import { useMemo, useState } from "react";

import { Input } from "@/components/ui/input.tsx";
import { Card, CardContent } from "@/components/ui/card.tsx";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ContainedScreen } from "@/components/prefab/contained-screen.tsx"
import { usePagination, PaginationButtons } from "@/components/shared/pagination";

import { TokenOperationType } from "@/features/token-operations/enums";
import { TokenOperationsTable } from "@/features/token-operations/components";
import { useTokenOperationsQuery } from "@/features/token-operations/hooks/queries";
import { useLoadingStateContent, useEmptyStateContent } from "@/screens/app/operations/hooks";
import { TokenOperationsService } from "@/features/token-operations/token-operations.service";

export const TokensOperationsScreen = () => {
  let currentPage = 0;

  const { data: operations = [], isFetching, isFetched } = useTokenOperationsQuery(currentPage);

  const [filterValue, setFilterValue] = useState("")
  const [operationType, setOperationType] = useState<TokenOperationType | "all">("all");

  const operationsFilteredByType = useMemo(() => {
    if(operationType === "all") return operations;

    return operations.filter(item => item.type === operationType);
  }, [operations, operationType]);

  const operationsFilteredByValue = useMemo(() => {
    if(filterValue === "") return operationsFilteredByType;
    const lowercaseFilterValue = filterValue.toLocaleLowerCase();

    return operationsFilteredByType.filter(item =>
      item.sender.toLocaleLowerCase().includes(lowercaseFilterValue) ||
      item.receiver.toLocaleLowerCase().includes(lowercaseFilterValue) ||
      item.tokenIdentifier.toLocaleLowerCase().includes(lowercaseFilterValue)
    );
  }, [operationsFilteredByType, filterValue]);

  const isLoadingFirstTime = !isFetched && isFetching;
  const isLoadedAndHasData = isFetched && operations.length > 0;
  const isLoadedAndHasNoData = isFetched && operations.length === 0;

  const emptyStateContent = useEmptyStateContent(isLoadedAndHasNoData);
  const loadingStateContent = useLoadingStateContent(isLoadingFirstTime);

  const { data: paginatedOperations, ...rest} =
    usePagination(operationsFilteredByValue, 5);

  const nextPage = () => {
    currentPage += 1;

    // TODO: Turn this into a mutation
    TokenOperationsService.getAllTokenOperations(currentPage)
  }

  const previousPage = () => {
    currentPage = Math.max(0, currentPage - 1);

    // TODO: Turn this into a mutation
    TokenOperationsService.getAllTokenOperations(currentPage)
  }

  return (
    <ContainedScreen className={'space-y-3'}>
      <div>
        <button className="mr-4" onClick={previousPage}>Previous</button>
        <button onClick={nextPage}>Next</button>
      </div>
      <div className={'flex justify-between max-sm:flex-col max-sm:space-y-2'}>
        <Tabs defaultValue="all" onValueChange={(value) => setOperationType(value as TokenOperationType)}>
          <TabsList className={'self-start mb-2 mr-2 max-sm:w-full'}>
            <TabsTrigger value={'all'} disabled={isLoadingFirstTime}>All</TabsTrigger>
            <TabsTrigger value={TokenOperationType.Deposit} disabled={isLoadingFirstTime}>Deposits</TabsTrigger>
            <TabsTrigger value={TokenOperationType.Withdraw} disabled={isLoadingFirstTime}>Withdrawals</TabsTrigger>
            <TabsTrigger value={TokenOperationType.Transfer} disabled={isLoadingFirstTime}>Transfers</TabsTrigger>
            <TabsTrigger value={TokenOperationType.Charge} disabled={isLoadingFirstTime}>Charges</TabsTrigger>
          </TabsList>
        </Tabs>

        <Input
          value={filterValue}
          onChange={e => setFilterValue(e.target.value)}
          placeholder={'Filter ...'}
          className={'justify-self-end max-w-sm'}
        />
      </div>

      <Card>
        <CardContent className={'p-0'}>
          {emptyStateContent}
          {loadingStateContent}

          {isLoadedAndHasData && (
            <div>
              <TokenOperationsTable 
                operationType={operationType} 
                operations={paginatedOperations} />
              <PaginationButtons {...{...rest}} />
            </div>
          )}
        </CardContent>
      </Card>
    </ContainedScreen>
  )
}