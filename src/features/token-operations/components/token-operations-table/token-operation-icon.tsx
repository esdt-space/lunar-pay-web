import { ArrowUpRight } from "lucide-react";
import { useGetAccount } from "@multiversx/sdk-dapp/hooks";

import { TokenOperation } from "@/features/token-operations/models";

type Props = {
  operation: TokenOperation;
}

export function TokenOperationIcon(props: Props) {
  const { address } = useGetAccount()
  const isIncomingTransaction = props.operation.receiver === address;

  if(isIncomingTransaction)
    return <ArrowUpRight className={'w-4 h-4 sm:w-6 sm:h-6 text-green-700 rotate-180'} />

  return <ArrowUpRight className={'w-4 h-4 sm:w-6 sm:h-6 text-red-700'} />
}