import {useEffect, useState} from 'react';

export type PaginatedData<T> = {
  data: T[];
  nextPageHandler: () => void;
  previousPageHandler: () => void;

  lastPage: number;
  currentPage: number;
}

export function usePagination<T>(data: T[], itemsPerPage: number = 10): PaginatedData<T> {
  const [currentPage, setCurrentPage] = useState(1);
  const lastPage = Math.ceil(data.length / itemsPerPage);

  const currentItems = (): T[] => {
    const begin = (currentPage - 1) * itemsPerPage;
    const end = begin + itemsPerPage;
    
    return data.slice(begin, end);
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [data]);

  const nextPageHandler = () =>
    setCurrentPage((currentPage) => Math.min(currentPage + 1, lastPage));

  const previousPageHandler = () =>
    setCurrentPage((currentPage) => Math.max(currentPage - 1, 1));

  return { data: currentItems(), nextPageHandler, previousPageHandler, currentPage, lastPage};
}
