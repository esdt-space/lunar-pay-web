import { useSubscriptionTriggersQuery } from "./queries";

export function useSubscriptionTriggers(pageNumber: number, id: string | undefined){
  const {data, ...props} = useSubscriptionTriggersQuery(pageNumber, id);

  return { data, ...props };
}
