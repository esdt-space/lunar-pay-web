import { useQuery } from "react-query";
import { useGetAccount } from "@multiversx/sdk-dapp/hooks";

import { agreementTriggersQueryKey } from "@/features/agreement-triggers/query-keys.ts";
import { AgreementTriggersService } from "../../agreement-triggers.service";

export function useAgreementTriggersQuery(id: string | undefined) {
  const { address} = useGetAccount();

  return useQuery({
    enabled: id !== undefined,
    queryKey: agreementTriggersQueryKey(address, id as string),
    queryFn: () => AgreementTriggersService.getAgreementTriggersById(id as string),
    refetchOnMount: true,
    refetchOnWindowFocus: false,
    refetchInterval: 60 * 1000, // 1 minute
  })
}
