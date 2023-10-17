import {ChevronLeft, ChevronRight} from "lucide-react";

import { Button } from "@/components/ui/button.tsx";
import { PaginatedData } from "./hooks/use-pagination.ts";

type Props = Omit<PaginatedData<unknown>, 'data'>

export function PaginationButtons(props: Props) {
  const {previousPageHandler, nextPageHandler, currentPage, lastPage} = props;

  return (
    <div className="flex justify-end items-center m-2 p-2 space-x-2">
      <span className={'text-sm text-muted-foreground'}>Page {currentPage} of {lastPage}</span>

      <Button size={'sm'} onClick={previousPageHandler} disabled={currentPage === 1}>
        <ChevronLeft className={'w-4 h-4 mr-2'} />
        Previous
      </Button>

      <Button size={'sm'} onClick={nextPageHandler} disabled={currentPage === lastPage}>
        Next
        <ChevronRight className={'w-4 h-4 ml-2'} />
      </Button>
    </div>
  )
}