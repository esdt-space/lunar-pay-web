import { useMutation, useQueryClient } from "react-query";
import { useGetAccount } from "@multiversx/sdk-dapp/hooks";

import { accountPaymentAgreementsCreatedQueryKey } from "@/features/payment-agreements/query-keys.ts";
import { PaymentAgreementsService } from "../../payment-agreements.service";
import { useNavigate } from "react-router-dom";
import { RoutesConfig } from "@/navigation";

export function useGetPaymentAgreementsMutation() {
  const client = useQueryClient();
  const { address } = useGetAccount();
  const navigate = useNavigate()

  return useMutation({
    mutationFn: () => PaymentAgreementsService.fetchAgreementsCreated(),
    onSuccess: async () => {
      await client.resetQueries({queryKey: accountPaymentAgreementsCreatedQueryKey(address), exact: true})
      navigate(RoutesConfig.paymentAgreements)
    },
  });
}
