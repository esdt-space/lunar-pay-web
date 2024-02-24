import { Button } from "@/components/ui/button.tsx";
import { CheckoutOrder } from "@/screens/app/checkout/checkout-order.model.ts";

type Params = {
  order: CheckoutOrder;
}

export function PayButton({ order }: Params) {
  return (
    <Button variant={'primary'} className={'w-full'}>
      Pay {order.total.toHumanReadableString()} {order.currency}
    </Button>
  )
}