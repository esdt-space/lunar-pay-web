import { useSubscriptionByIdQuery } from "./queries";

export function useCreatedSubscription(id: string | undefined){
  const {data, ...props} = useSubscriptionByIdQuery(id);

  return { data, ...props };
}