import { ReactNode } from "react";
import { Link } from "react-router-dom";

import { cn } from "@/theme/utils.ts";
import { RoutesConfig } from "@/navigation";

import { AppIcon } from "@/components/shared/app-icon.tsx";
import { CheckoutOrder } from "@/screens/app/checkout/checkout-order.model.ts";

import { OrderItem } from "./order-item.tsx";

type Params = {
  order: CheckoutOrder;
  payComponent: ReactNode;
}

export function DefaultCheckoutTemplate({order, payComponent}: Params) {
  return (
    <div className={cn([
      "flex flex-1 flex-col relative max-md:h-[100dvh] max-h-[100dvh] bg-white overflow-hidden",
      "md:max-w-xl md:shadow-lg md:rounded-lg"
    ])}>
      <div className={'bg-white/20 backdrop-blur relative top-0'}>
        <div className={'flex h-3 bg-gradient-to-l from-primary to-secondary'}/>
        <div className={'p-8'}>
          <Link to={RoutesConfig.home}>
            <AppIcon/>
          </Link>
        </div>
      </div>

      <div className={'h-full overflow-scroll'}>
        <div className={'p-8 space-y-8'}>
          <div>
            <div className={'mb-1 text-sm text-slate-400 font-semibold'}>SUMMARY</div>
            <div className={'bg-slate-100 p-6 rounded'}>
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
      </div>

      <div className="px-8 py-4 pt-4 mt-4 flex justify-between border-t font-semibold sticky bottom-0 bg-inherit">
        {payComponent}
      </div>
    </div>
  )
}