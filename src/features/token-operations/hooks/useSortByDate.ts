import { useState, useEffect } from 'react';
import { TokenOperation } from '../models';

export const useSortByDate = (initialObjects: TokenOperation[], sortOrder: string): TokenOperation[] => {
  const [sortedOperations, setSortedOperations] = useState<TokenOperation[]>([]);

  useEffect(() => {
    function sortByDate() {
      const result = [...initialObjects].sort((a, b) => {
        const dateA = new Date(a.createdAt).getTime();
        const dateB = new Date(b.createdAt).getTime();

        return sortOrder === 'asc' ? dateA - dateB : dateB - dateA;
      });

      setSortedOperations(result);
    }

    if (initialObjects) {
      sortByDate();
    }
  }, [initialObjects, sortOrder]);

  return sortedOperations;
}