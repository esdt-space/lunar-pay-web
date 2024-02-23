import {CheckoutOrder} from "@/screens/app/checkout/checkout-order.model.ts";
import {OrderItem} from "./order-item.tsx";

type Params = {
  order: CheckoutOrder;
}

export function DefaultCheckoutTemplate({order}: Params) {
  return (
    <div className="max-w-xl flex-1 p-4 bg-white shadow-lg rounded-lg">
      <div className="space-y-2">
        {order.items.map((item, index) => (
          <OrderItem key={`${index}_${item.name}`} item={item} currency={order.currency}/>
        ))}
      </div>

      <div className="p-2 mt-4 flex justify-between">
        <div className="text-2xl font-semibold text-gray-900">Total</div>
        <div className="text-xl text-gray-800 pt-1">{order.total.toHumanReadableString()} {order.currency}</div>
      </div>
    </div>
  )
}