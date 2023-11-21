import { useAgreementMembershipByIdQuery } from "./queries";

export function useAgreementMembership(id: string | undefined){
  const {data, ...props} = useAgreementMembershipByIdQuery(id);

  return { data, ...props };
}