import { CheckoutOrder } from "@/features/checkout/models";

import { OrderItem } from "./order-item.tsx";
import {cn} from "@/theme/utils.ts";

type Params = {
  order: CheckoutOrder;
}

export function OrderInformation({order}: Params) {
  return (
    <div className={cn([
      'md:flex-1 space-y-2 md:space-y-12 bg-white/80 backdrop-blur',
      "p-4 md:p-8",
      'max-md:border-b max-md:sticky'
    ])}>
      <div className={'flex items-center gap-2'}>
        <div className={'size-8 rounded-full bg-muted'}></div>
        <h1>Store Name</h1>
      </div>

      <div className={"md:hidden"}>
        <div>{order.total.toHumanReadableString()} {order.currency}</div>
      </div>

      <div className={'max-md:hidden'}>
        <div className={'mb-1 text-sm text-slate-400 font-semibold'}>ORDER SUMMARY</div>
        <div className={'bg-muted/50 p-6 rounded'}>
          <div className="space-y-3">
            {order.items.map((item, index) => (
              <OrderItem key={`${index}_${item.name}`} item={item} currency={order.currency}/>
            ))}
          </div>

          <div
            className="pt-4 mt-4 flex justify-between border-t font-semibold">
            <div>Total Amount</div>
            <div>{order.total.toHumanReadableString()} {order.currency}</div>
          </div>
        </div>
      </div>
    </div>
  )
}