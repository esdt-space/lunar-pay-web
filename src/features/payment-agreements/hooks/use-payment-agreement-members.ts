import { usePaymentAgreementsMembersQuery } from "./queries/use-payment-agreements-members-query.ts";

export function usePaymentAgreementMembers(pageNumber: number, id: string | undefined){
  const {data = [], ...props} = usePaymentAgreementsMembersQuery(pageNumber, id);

  return { data, ...props };
}