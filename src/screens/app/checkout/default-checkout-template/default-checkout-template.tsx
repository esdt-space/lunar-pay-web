import {CheckoutOrder} from "@/screens/app/checkout/checkout-order.model.ts";
import {OrderItem} from "./order-item.tsx";

type Params = {
  order: CheckoutOrder;
}

export function DefaultCheckoutTemplate({order}: Params) {
  return (
    <div className="max-w-4xl mx-auto p-4 bg-white shadow-lg rounded-lg">
      <div className="divide-y divide-gray-200">
        {order.items.map((item, index) => (
          <OrderItem key={`${index}_${item.name}`} item={item}/>
        ))}
      </div>

      <div className="pt-6">
        <div className="text-2xl font-semibold text-gray-900">Total amount</div>
        <div className="text-xl text-gray-800">{order.total.toHumanReadableString()}</div>
      </div>
    </div>
  )
}