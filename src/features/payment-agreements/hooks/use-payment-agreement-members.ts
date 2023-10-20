import { usePaymentAgreementsMembersQuery } from "./queries/use-payment-agreements-members-query.ts";

export function usePaymentAgreementMembers(id: string | undefined){
  const {data = [], ...props} = usePaymentAgreementsMembersQuery(id);

  return { data, ...props };
}