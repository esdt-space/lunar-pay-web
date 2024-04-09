import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

type Props = {
  previousPageHandler: () => void,
  nextPageHandler: () => void,
  currentPage: number
}

export const PaginationComponent = (props: Props) => {
  const { previousPageHandler, nextPageHandler, currentPage } = props;

  return (
    <div className="flex items-center m-2">
      <Pagination className="justify-end">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" onClick={previousPageHandler}/>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">{currentPage}</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" onClick={nextPageHandler}/>
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  )
}
