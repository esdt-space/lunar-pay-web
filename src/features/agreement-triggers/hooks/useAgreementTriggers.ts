import { useAgreementTriggersQuery } from "./queries";

export function useAgreementTriggers(pageNumber: number, id: string | undefined){
  const {data, ...props} = useAgreementTriggersQuery(pageNumber, id);

  return { data, ...props };
}
