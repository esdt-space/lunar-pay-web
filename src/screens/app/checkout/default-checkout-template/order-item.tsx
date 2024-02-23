import {Item} from "@/screens/app/checkout/checkout-order.model.ts";

type Params = {
  item: Item;
}

export function OrderItem({item}: Params) {
  return (
    <div className="flex justify-between items-center py-2">
      <div className="text-gray-800 text-sm md:text-base">
        <div>{item.name}</div> 
        <div className="font-semibold">Quantity: {item.quantity}</div>
      </div>
      <div className="text-gray-900 font-semibold text-sm md:text-lg">
        {item.price.toHumanReadableString()} EGLD
      </div>
    </div>
  )
}