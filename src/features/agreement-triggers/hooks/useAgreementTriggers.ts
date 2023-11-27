import { useAgreementTriggersQuery } from "./queries";

export function useAgreementTriggers(id: string | undefined){
  const {data, ...props} = useAgreementTriggersQuery(id);

  return { data, ...props };
}
