import { usePaymentAgreementsSignedQuery } from "./queries";

export function useSignedPaymentAgreements(){
  const {data = [], ...props} = usePaymentAgreementsSignedQuery();

  return { data, ...props };
}