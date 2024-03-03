import { Item } from "@/features/checkout/models";

type Params = {
  item: Item;
  currency: string;
}

export function OrderItem({item, currency}: Params) {
  return (
    <div className="flex justify-between">
      <div className="flex items-center gap-2">
        <div className="">{item.name}</div>
        <div>x {item.quantity}</div>
      </div>

      <div className="flex justify-between items-center">
        {item.price.toHumanReadableString()} {currency}
      </div>
    </div>
  )
}