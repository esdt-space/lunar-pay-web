import { useQuery } from "react-query";
import { useGetAccount } from "@multiversx/sdk-dapp/hooks";

import { PaymentAgreementsService } from "../../payment-agreements.service.ts";
import { agreementMembersQueryKey } from "@/features/payment-agreements/query-keys.ts";

export function usePaymentAgreementsMembersQuery(pageNumber: number, id: string | undefined) {
  const { address } = useGetAccount();

  return useQuery({
    enabled: id !== undefined,
    queryKey: agreementMembersQueryKey(address, id as string),
    queryFn: () => PaymentAgreementsService.getAgreementMembers(pageNumber, id as string),
    refetchOnMount: true,
    refetchOnWindowFocus: false,
    refetchInterval: 60 * 1000, // 1 minute
  })
}