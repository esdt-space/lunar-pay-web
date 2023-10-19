import { useQuery } from "react-query";
import { useGetAccount } from "@multiversx/sdk-dapp/hooks";

import { PaymentAgreementsService } from "../../payment-agreements.service.ts";
import { accountPaymentAgreementsSignedQueryKey } from "@/features/payment-agreements/query-keys.ts";

export function usePaymentAgreementsSignedQuery() {
  const { address } = useGetAccount();

  return useQuery({
    queryKey: accountPaymentAgreementsSignedQueryKey(address),
    queryFn: PaymentAgreementsService.fetchAgreementsSigned,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchInterval: 60 * 1000, // 1 minute
  })
}