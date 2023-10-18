import { useQuery } from "react-query";
import { useGetAccount } from "@multiversx/sdk-dapp/hooks";

import { PaymentAgreementsService } from "../../payment-agreements.service.ts";

const queryKey = (address: string) => ['account-agreements-created', address]

export function usePaymentAgreementsCreatedQuery() {
  const { address } = useGetAccount();

  return useQuery({
    queryKey: queryKey(address),
    queryFn: PaymentAgreementsService.fetchAgreementsCreated,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchInterval: 60 * 1000, // 1 minute
  })
}