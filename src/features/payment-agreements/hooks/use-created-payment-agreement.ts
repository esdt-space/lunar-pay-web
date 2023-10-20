import { usePaymentAgreementByIdQuery } from "./queries";

export function useCreatedPaymentAgreement(id: string){
  const {data, props} = usePaymentAgreementByIdQuery(id);

  return { data, ...props };
}