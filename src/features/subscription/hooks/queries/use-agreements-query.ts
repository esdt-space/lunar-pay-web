import { useGetAccount } from "@multiversx/sdk-dapp/hooks";
import { useQuery } from "react-query";
import { AgreementsService } from "../../subscriptions.service";

const queryKey = (address: string) => ['account-agreements', address]

export function useAgreementsQuery() {
  const { address } = useGetAccount();

  return useQuery({
    queryKey: queryKey(address),
    queryFn: AgreementsService.fetchAgreements,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchInterval: 60 * 1000, // 1 minute
  })
}