import { useQuery } from "react-query";
import { useGetAccount } from "@multiversx/sdk-dapp/hooks";

import { PaymentAgreementsService } from "../../payment-agreements.service.ts";
import { accountPaymentAgreementById } from "@/features/payment-agreements/query-keys.ts";

export function usePaymentAgreementByIdQuery(id: string) {
  const { address } = useGetAccount();

  return useQuery({
    queryKey: accountPaymentAgreementById(address, id),
    queryFn: () => PaymentAgreementsService.agreementById(id),
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchInterval: 60 * 1000, // 1 minute
  })
}