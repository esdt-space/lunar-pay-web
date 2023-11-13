import { useMutation, useQueryClient } from "react-query";
import { useGetAccount } from "@multiversx/sdk-dapp/hooks";

import { accountPaymentAgreementById } from "@/features/payment-agreements/query-keys.ts";
import { useNavigate } from "react-router-dom";
import { RoutesConfig } from "@/navigation";

export function useCreatedPaymentAgreementMutation(id: string, isSigned?: boolean) {
  const client = useQueryClient();
  const { address } = useGetAccount();
  const navigate = useNavigate()

  const navigateToAgreement = () => {
    const signed = isSigned ? "/signed" : ""

    return Promise.resolve(navigate(`${RoutesConfig.paymentAgreements}/${id}${signed}`))
  }

  return useMutation({
    mutationFn: () => navigateToAgreement(),
    onSuccess: async () => {
      await client.resetQueries({queryKey: accountPaymentAgreementById(address, id), exact: true})
    },
  });
}