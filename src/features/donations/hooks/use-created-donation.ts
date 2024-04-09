import { useDonationByIdQuery } from "./queries";

export function useCreatedDonation(id: string | undefined){
  const {data, ...props} = useDonationByIdQuery(id);

  return { data, ...props };
}
