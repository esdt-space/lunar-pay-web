import {Item} from "@/screens/app/checkout/checkout-order.model.ts";

type Params = {
  item: Item;
  currency: string;
}

export function OrderItem({item, currency}: Params) {
  return (
    <div className="flex flex-col border rounded-md p-4 px-6 bg-gradient-to-r from-primary to-secondary text-white">
      <div className="border-b border-white pb-3 mb-1">
        <div className="text-lg font-semibold">{item.name}</div> 
      </div>
      <div className="flex justify-between items-center">
        <div>Qty: {item.quantity}</div>
        {item.price.toHumanReadableString()} {currency}
      </div>
    </div>
  )
}