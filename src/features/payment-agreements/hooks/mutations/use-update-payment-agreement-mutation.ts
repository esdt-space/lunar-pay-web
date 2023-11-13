import { useMutation, useQueryClient } from "react-query";
import { useGetAccount } from "@multiversx/sdk-dapp/hooks";

import { accountPaymentAgreementsCreatedQueryKey } from "@/features/payment-agreements/query-keys.ts";
import { PaymentAgreementsService } from "../../payment-agreements.service";
import { UpdateAgreementDto } from "../../dto";
import { useNavigate } from "react-router-dom";
import { RoutesConfig } from "@/navigation";

type UpdateAgreementInput = {
  id: string;
  input: UpdateAgreementDto
}

export function useUpdatePaymentAgreementMutation() {
  const client = useQueryClient();
  const { address } = useGetAccount();
  const navigate = useNavigate()

  return useMutation({
    mutationFn: ({id, input}: UpdateAgreementInput) => PaymentAgreementsService.updateAgreement(id, input),
    onSuccess: async () => {
      await client.resetQueries({queryKey: accountPaymentAgreementsCreatedQueryKey(address), exact: true})
      navigate(RoutesConfig.paymentAgreements)
    },
  });
}