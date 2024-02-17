import BigNumber from "bignumber.js";

import { Token } from "@/core/tokens";
import { W3Number } from "@/utils/number/W3Number.ts";

export type Item = {
  name: string;
  price: W3Number;
  quantity: number;
  total: W3Number;
}

export class CheckoutOrder {
  items: Item[];
  receiver: string;
  currency: Token['identifier'];
  total: W3Number;

  constructor() {
    this.items = [];
    this.receiver = '';
    this.currency = '';
  }

  static fromParams(params: URLSearchParams) {
    const order = new CheckoutOrder();
    order.receiver = params.get('receiver') || '';
    order.currency = params.get('currency') || '';

    let orderTotal = new BigNumber(0);

    const items: Item[] = [];
    const itemCount = params.getAll('itemName[]').length;

    for (let i = 0; i < itemCount; i++) {
      const price = new BigNumber(params.getAll('itemPrice[]')[i]);
      const quantity = parseInt(params.getAll('itemQuantity[]')[i], 10);
      const itemTotal = price.multipliedBy(quantity);

      orderTotal = orderTotal.plus(itemTotal);

      items.push({
        name: params.getAll('itemName[]')[i] || '',
        price: new W3Number(price),
        quantity: parseInt(params.getAll('itemQuantity[]')[i], 10) || 0,
        total: new W3Number(itemTotal)
      });
    }

    order.items = items;
    order.total = new W3Number(orderTotal);

    return order;
  }
}