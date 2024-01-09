import { usePaymentAgreementsCreatedQuery } from "./queries";

export function useCreatedPaymentAgreements(pageNumber: number){
  const {data = [], ...props} = usePaymentAgreementsCreatedQuery(pageNumber);

  return { data, ...props };
}