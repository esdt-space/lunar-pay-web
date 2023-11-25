import { useMutation, useQueryClient } from "react-query";
import { useGetAccount } from "@multiversx/sdk-dapp/hooks";

import { accountPaymentAgreementById, accountPaymentAgreementsCreatedQueryKey } from "@/features/payment-agreements/query-keys.ts";
import { PaymentAgreementsService } from "../../payment-agreements.service";
import { UpdateAgreementDto } from "../../dto";

type UpdateAgreementInput = {
  id: string;
  input: UpdateAgreementDto
}

export function useUpdatePaymentAgreementMutation(agreementId: string) {
  const client = useQueryClient();
  const { address } = useGetAccount();

  return useMutation({
    mutationFn: ({id, input}: UpdateAgreementInput) => PaymentAgreementsService.updateAgreement(id, input),
    onSuccess: async () => {
      await client.invalidateQueries({queryKey: accountPaymentAgreementsCreatedQueryKey(address)})
      await client.invalidateQueries({queryKey: accountPaymentAgreementById(address, agreementId)})
    },
  });
}