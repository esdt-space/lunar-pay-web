import { Button } from "@/components/ui/button";

type Props = {
    currentPage: number;
    maxPage: number;
    prev: () => void;
    next: () => void;
}

export const PaginationButtons = ({currentPage, maxPage, prev, next}: Props) => {
    return <div className="flex justify-end items-center m-2 p-2 space-x-2">
    <Button onClick={prev} disabled={currentPage === 1}>
      Previous
    </Button>

    <span>Page {currentPage} of {maxPage}</span>

    <Button onClick={next} disabled={currentPage === maxPage}>
      Next
    </Button>
    </div>
}