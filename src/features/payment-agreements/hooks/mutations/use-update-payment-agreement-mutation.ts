import { useMutation, useQueryClient } from "react-query";
import { useGetAccount } from "@multiversx/sdk-dapp/hooks";

import { accountPaymentAgreementsCreatedQueryKey } from "@/features/payment-agreements/query-keys.ts";
import { PaymentAgreementsService } from "../../payment-agreements.service";
import { UpdateAgreementDto } from "../../dto";

type UpdateAgreementInput = {
  id: string;
  input: UpdateAgreementDto
}

export function useUpdatePaymentAgreementMutation() {
  const client = useQueryClient();
  const { address } = useGetAccount();

  const getCallback = async () => {
    await client.invalidateQueries({queryKey: accountPaymentAgreementsCreatedQueryKey(address)})
  }

  return useMutation({
    mutationFn: ({id, input}: UpdateAgreementInput) => {
      return PaymentAgreementsService.updateAgreement(id, input)
    },
    onSuccess: async () => {
      await getCallback()
    },
  });
}