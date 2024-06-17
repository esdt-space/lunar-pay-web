import { useChargesOperationsQuery } from "./queries";

export function useChargesOperations(pageNumber: number, id: string | undefined, addressFilter?: string){
  const {data, ...props} = useChargesOperationsQuery(pageNumber, id, addressFilter);

  return { data, ...props };
}