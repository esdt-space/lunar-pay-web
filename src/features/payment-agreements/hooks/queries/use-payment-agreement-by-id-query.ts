import { useQuery } from "react-query";
import { useGetAccount } from "@multiversx/sdk-dapp/hooks";

import { PaymentAgreementsService } from "../../payment-agreements.service.ts";
import { accountPaymentAgreementById } from "@/features/payment-agreements/query-keys.ts";

export function usePaymentAgreementByIdQuery(id: string | undefined) {
  const { address } = useGetAccount();

  return useQuery({
    enabled: id !== undefined,
    queryKey: accountPaymentAgreementById(address, id as string),
    queryFn: () => PaymentAgreementsService.agreementById(id as string),
    refetchOnMount: true,
    refetchOnWindowFocus: false,
    refetchInterval: 60 * 1000, // 1 minute
  })
}