import { usePaymentAgreementByIdQuery } from "./queries";

export function useCreatedPaymentAgreement(id: string | undefined){
  const {data, ...props} = usePaymentAgreementByIdQuery(id);

  return { data, ...props };
}