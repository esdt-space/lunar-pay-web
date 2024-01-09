import { usePaymentAgreementsSignedQuery } from "./queries";

export function useSignedPaymentAgreements(pageNumber: number){
  const {data = [], ...props} = usePaymentAgreementsSignedQuery(pageNumber);

  return { data, ...props };
}