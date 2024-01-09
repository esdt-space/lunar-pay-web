import { useChargesOperationsQuery } from "./queries";

export function useChargesOperations(pageNumber: number, id: string | undefined){
  const {data, ...props} = useChargesOperationsQuery(pageNumber, id);

  return { data, ...props };
}