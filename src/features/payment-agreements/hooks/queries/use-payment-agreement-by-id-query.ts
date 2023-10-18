import { useQuery } from "react-query";
import { useGetAccount } from "@multiversx/sdk-dapp/hooks";

import { PaymentAgreementsService } from "../../payment-agreements.service.ts";

const queryKey = (address: string, id: string) => ['account-agreements-created', address, id]

export function usePaymentAgreementByIdQuery(id: string) {
  const { address } = useGetAccount();

  return useQuery({
    queryKey: queryKey(address, id),
    queryFn: () => PaymentAgreementsService.agreementById(id),
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchInterval: 60 * 1000, // 1 minute
  })
}