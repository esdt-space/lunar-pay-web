import { useQuery } from "react-query";
import { useGetAccount } from "@multiversx/sdk-dapp/hooks";

import { PaymentAgreementsService } from "../../payment-agreements.service.ts";

const queryKey = (address: string) => ['account-agreements-signed', address]

export function usePaymentAgreementsSignedQuery() {
  const { address } = useGetAccount();

  return useQuery({
    queryKey: queryKey(address),
    queryFn: PaymentAgreementsService.fetchAgreementsSigned,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchInterval: 60 * 1000, // 1 minute
  })
}