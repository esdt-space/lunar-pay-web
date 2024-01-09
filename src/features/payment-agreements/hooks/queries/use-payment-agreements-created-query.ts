import { useQuery } from "react-query";
import { useGetAccount } from "@multiversx/sdk-dapp/hooks";

import { PaymentAgreementsService } from "../../payment-agreements.service.ts";
import { accountPaymentAgreementsCreatedQueryKey } from "@/features/payment-agreements/query-keys.ts";

export function usePaymentAgreementsCreatedQuery(pageNumber: number) {
  const { address } = useGetAccount();

  return useQuery({
    queryKey: accountPaymentAgreementsCreatedQueryKey(address),
    queryFn: () => PaymentAgreementsService.fetchAgreementsCreated(pageNumber),
    refetchOnMount: true,
    refetchOnWindowFocus: false,
    refetchInterval: 60 * 1000, // 1 minute
  })
}