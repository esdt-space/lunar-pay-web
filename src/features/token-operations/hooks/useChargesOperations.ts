import { useChargesOperationsQuery } from "./queries";

export function useChargesOperations(id: string | undefined){
  const {data, ...props} = useChargesOperationsQuery(id);

  return { data, ...props };
}