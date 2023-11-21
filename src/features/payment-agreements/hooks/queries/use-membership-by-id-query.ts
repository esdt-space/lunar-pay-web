import { useQuery } from "react-query";
import { useGetAccount } from "@multiversx/sdk-dapp/hooks";

import { PaymentAgreementsService } from "../../payment-agreements.service.ts";
import { agreementMembershipQueryKey } from "@/features/payment-agreements/query-keys.ts";

export function useAgreementMembershipByIdQuery(id: string | undefined) {
  const { address } = useGetAccount();

  return useQuery({
    enabled: id !== undefined,
    queryKey: agreementMembershipQueryKey(address, id as string),
    queryFn: () => PaymentAgreementsService.fetchAgreementMembership(id as string),
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchInterval: 60 * 1000, // 1 minute
  })
}