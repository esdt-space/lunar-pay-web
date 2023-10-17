import { useState, useEffect } from 'react';
import { TokenOperation } from '../models';
import { DateRange } from 'react-day-picker';

export const useFilterByDateRange = (initialData: TokenOperation[], dateRange: DateRange | undefined): TokenOperation[] => {
  const [filteredData, setFilteredData] = useState<TokenOperation[]>(initialData);

  useEffect(() => {
    function filterByDateRange() {
      if (!dateRange || (!dateRange.from && !dateRange.to)) {
        setFilteredData(initialData);

        return;
      }

      let start = dateRange.from ? dateRange.from : -Infinity;
      let end = dateRange.to ? dateRange.to : Infinity;

      const result = initialData.filter((item) => {
        const objTime = new Date(item.createdAt);

        return objTime >= start && objTime <= end;
      });

      setFilteredData(result);
    }

    if (initialData) {
      filterByDateRange();
    }
  }, [initialData, dateRange]);

  return filteredData;
}
