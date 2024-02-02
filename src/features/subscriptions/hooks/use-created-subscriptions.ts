import { useSubscriptionsCreatedQuery } from "./queries";

export function useCreatedSubscriptions(pageNumber: number){
  const {data = [], ...props} = useSubscriptionsCreatedQuery(pageNumber);

  return { data, ...props };
}