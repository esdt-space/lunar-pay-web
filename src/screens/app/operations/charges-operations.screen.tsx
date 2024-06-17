import { useEffect, useState } from "react"

import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { ContainedScreen } from "@/components/prefab/contained-screen"
import {  PaginationButtons } from "@/components/shared/pagination"

import { useChargesOperations } from "@/features/token-operations/hooks"
import { useParams } from "react-router-dom"
import { useEmptyStateContent, useLoadingStateContent } from "./hooks"
import { ChargeOperationTable } from "@/features/token-operations/components"

export const ChargesOperationsScreen = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [filterValue, setFilterValue] = useState("")

  const { id } = useParams()
  const {data: chargesOperations, isFetching, isFetched, refetch } = useChargesOperations(currentPage, id, filterValue)

  useEffect(() => {
    setCurrentPage(1);
    refetch();
  }, [filterValue])

  const nextPageHandler = () => setCurrentPage(page => page + 1);
  const previousPageHandler = () => setCurrentPage(page => Math.max(1, page - 1));

  const operations = chargesOperations?.data ?? [];
  const numberOfPages = chargesOperations?.meta.totalPages

  const isLoadingFirstTime = !isFetched && isFetching;
  const isLoadedAndHasData = isFetched && operations.length > 0;
  const isLoadedAndHasNoData = isFetched && operations.length === 0;

  const emptyStateContent = useEmptyStateContent(isLoadedAndHasNoData);
  const loadingStateContent = useLoadingStateContent(isLoadingFirstTime);

  return <ContainedScreen className={'space-y-3'}>
    <div className={'flex justify-between max-sm:flex-col max-sm:space-y-2'}>
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
            <ChargeOperationTable 
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
  </ContainedScreen>
}
