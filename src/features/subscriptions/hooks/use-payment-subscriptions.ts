import { useSubscriptionMembersQuery } from "./queries/use-subscription-members-query.ts";

export function useSubscriptionMembers(pageNumber: number, id: string | undefined){
  const {data, ...props} = useSubscriptionMembersQuery(pageNumber, id);

  return { data, ...props };
}