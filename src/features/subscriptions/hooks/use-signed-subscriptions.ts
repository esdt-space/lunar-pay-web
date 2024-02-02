import { useSubscriptionsSignedQuery } from "./queries";

export function useSignedSubscriptions(pageNumber: number){
  const {data = [], ...props} = useSubscriptionsSignedQuery(pageNumber);

  return { data, ...props };
}