import { cn } from "@/theme/utils.ts";
import { CheckoutOrder } from "@/features/checkout/models";

type Params = {
  order: CheckoutOrder;
}

export function Template({ order }: Params) {
  return (
    <div className={cn(["flex flex-1"])}>
      POS TEMPLATE
      <div>{order.total.toHumanReadableString()} {order.currency}</div>
    </div>
  )
}