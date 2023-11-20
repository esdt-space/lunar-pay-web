import { Egld } from "@/core/tokens";
import { useGetEgldPrice } from "@multiversx/sdk-dapp/hooks";

export function useEgld() {
  const egld = new Egld();
  const {price} = useGetEgldPrice();

  egld.price = price || 0;

  return egld;
}