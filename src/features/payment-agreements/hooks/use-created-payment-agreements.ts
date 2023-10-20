import { usePaymentAgreementsCreatedQuery } from "./queries";

export function useCreatedPaymentAgreements(){
  const {data = [], props} = usePaymentAgreementsCreatedQuery();

  return { data, ...props };
}