import { useEffect, useMemo, useState } from "react"

import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { ContainedScreen } from "@/components/prefab/contained-screen"
import { PaginationButtons, usePagination } from "@/components/shared/pagination"

import { useChargesOperations } from "@/features/token-operations/hooks"
import { useParams } from "react-router-dom"
import { useEmptyStateContent, useLoadingStateContent } from "./hooks"
import { ChargeOperationTable } from "@/features/token-operations/components"

export const ChargesOperationsScreen = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const { id } = useParams()
  const {data: chargesOperations = [], isFetching, isFetched, refetch } = useChargesOperations(currentPage, id)

  useEffect(() => {
    setCurrentPage(1);
    refetch();
  }, [])

  const [filterValue, setFilterValue] = useState("")

  const operationsFilteredByValue = useMemo(() => {
    if(filterValue === "") return chargesOperations
    const lowercaseFilterValue = filterValue.toLocaleLowerCase();

    return chargesOperations.filter(item =>
      item.sender.toLocaleLowerCase().includes(lowercaseFilterValue) ||
      item.receiver.toLocaleLowerCase().includes(lowercaseFilterValue) ||
      item.tokenIdentifier.toLocaleLowerCase().includes(lowercaseFilterValue)
    );
  }, [chargesOperations, filterValue]);

  const isLoadingFirstTime = !isFetched && isFetching;
  const isLoadedAndHasData = isFetched && chargesOperations.length > 0;
  const isLoadedAndHasNoData = isFetched && chargesOperations.length === 0;

  const emptyStateContent = useEmptyStateContent(isLoadedAndHasNoData);
  const loadingStateContent = useLoadingStateContent(isLoadingFirstTime);

  const { data: paginatedOperations, ...rest} =
    usePagination(operationsFilteredByValue, 5);

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
              operations={paginatedOperations} />
            <PaginationButtons {...{...rest}} />
          </div>
        )}
      </CardContent>
    </Card>
  </ContainedScreen>
}