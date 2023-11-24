import { useEffect, useState } from "react";

import { Input } from "@/components/ui/input.tsx";
import { Card, CardContent } from "@/components/ui/card.tsx";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ContainedScreen } from "@/components/prefab/contained-screen.tsx"

import { TokenOperationType } from "@/features/token-operations/enums";
import { TokenOperationsTable } from "@/features/token-operations/components";
import { useTokenOperationsQuery } from "@/features/token-operations/hooks/queries";
import { useLoadingStateContent, useEmptyStateContent } from "@/screens/app/operations/hooks";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const TokensOperationsScreen = () => {
  const [currentPage, setCurrentPage] = useState(0)

  const [filterValue, setFilterValue] = useState("")
  const [operationType, setOperationType] = useState<TokenOperationType | "all">("all");
  
  const typeFilter = operationType === "all" ? "" : operationType
  const { data, isFetching, isFetched, refetch } = useTokenOperationsQuery(currentPage, typeFilter);
  const operations = data?.operations ?? []
  const numberOfPages = data?.numberOfPages

  const nextPageHandler = () => setCurrentPage(page => page + 1);
  const previousPageHandler = () => setCurrentPage(page => Math.max(0, page - 1));

  useEffect(() => {
    refetch()
  }, [operationType, currentPage, refetch])

  const isLoadingFirstTime = !isFetched && isFetching;
  const isLoadedAndHasData = isFetched && operations.length > 0;
  const isLoadedAndHasNoData = isFetched && operations.length === 0;

  const emptyStateContent = useEmptyStateContent(isLoadedAndHasNoData);
  const loadingStateContent = useLoadingStateContent(isLoadingFirstTime);

  return (
    <ContainedScreen className={'space-y-3'}>
      <div className={'flex justify-between max-sm:flex-col max-sm:space-y-2'}>
        <Tabs defaultValue="all" onValueChange={(value) => setOperationType(value as TokenOperationType)}>
          <TabsList className={'self-start mb-2 mr-2 max-sm:w-full'}>
            <TabsTrigger value={'all'} disabled={isLoadingFirstTime}>All</TabsTrigger>
            <TabsTrigger value={TokenOperationType.Deposit} disabled={isLoadingFirstTime}>Deposits</TabsTrigger>
            <TabsTrigger value={TokenOperationType.Withdraw} disabled={isLoadingFirstTime}>Withdrawals</TabsTrigger>
            <TabsTrigger value={TokenOperationType.Transfer} disabled={isLoadingFirstTime}>Transfers</TabsTrigger>
            {/* <TabsTrigger value={TokenOperationType.Charge} disabled={isLoadingFirstTime}>Charges</TabsTrigger> */}
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
                operations={operations} />
              <div className="flex justify-end items-center m-2 p-2 space-x-2">
                <span className={'text-sm text-muted-foreground'}>Page {currentPage + 1} of {numberOfPages}</span>

                <Button size={'sm'} onClick={previousPageHandler} disabled={currentPage === 0}>
                  <ChevronLeft className={'w-4 h-4 mr-2'} />
                  Previous
                </Button>

                <Button size={'sm'} onClick={nextPageHandler} disabled={currentPage + 1 === numberOfPages}>
                  Next
                  <ChevronRight className={'w-4 h-4 ml-2'} />
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </ContainedScreen>
  )
}