import { useState, useEffect } from 'react';
import { TokenOperation } from '../models';

type DateFilterParams = {
  startDate?: string | null;
  endDate?: string | null;
}

export const useFilterByDateRange = (initialObjects: TokenOperation[], { startDate, endDate }: DateFilterParams): TokenOperation[] => {
  const [filteredData, setFilteredData] = useState<TokenOperation[]>(initialObjects);

  useEffect(() => {
    function filterByDateRange() {
      if (!startDate && !endDate) {
        setFilteredData(initialObjects);
        return;
      }

      let start = startDate ? new Date(startDate).getTime() : -Infinity;
      let end = endDate ? new Date(endDate).getTime() : Infinity;

      if ((startDate && isNaN(start)) || (endDate && isNaN(end))) {
        throw new Error('Invalid date format');
      }

      const result = initialObjects.filter((obj) => {
        const objTime = new Date(obj.createdAt).getTime();
        return objTime >= start && objTime <= end;
      });

      setFilteredData(result);
    }

    if (initialObjects) {
      filterByDateRange();
    }
  }, [initialObjects, startDate, endDate]);

  return filteredData;
}
