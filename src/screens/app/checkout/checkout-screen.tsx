import { useSearchParams } from "react-router-dom";

import { useTokensMap } from "@/core/tokens";
import { useIsAuthenticated } from "@/features/auth";
import { usePaymentMutation } from "@/features/payments/hooks/mutations";
import { CheckoutOrder } from "@/screens/app/checkout/checkout-order.model.ts";

import { QrCode } from "./pay-methods/qr-code.tsx";
import { DefaultCheckoutTemplate } from "./default-checkout-template";

/*
  erd127klw7q8q970ke6tg6vddz9fvuzyqfnn8fpzt5vdt757t05w7jgqe4dcuy
  https://localhost:5174/checkout?receiver=erd1yng4ajnxp03lx5erwcq57m5502m6t9nxajf5hv9nw0k27t8zcq4qq3vu4v
  &itemName[]=iPhone 15 PRO
  &itemPrice[]=1
  &itemQuantity[]=1

  &itemName[]=MacBook PRO
  &itemPrice[]=1
  &itemQuantity[]=1

  &currency=EGLD
  
  &thankYouMessage=Thank you!
  &callbackUrl=https://...
  &redirectUrl=https://...

  https://localhost:5174/checkout?receiver=erd1yng4ajnxp03lx5erwcq57m5502m6t9nxajf5hv9nw0k27t8zcq4qq3vu4v&itemName[]=iPhone 15 PRO&itemPrice[]=1&itemQuantity[]=1&itemName[]=MacBook PRO&itemPrice[]=1&itemQuantity[]=1&currency=EGLD
 */

export const CheckoutScreen = () => {
  const isAuthenticated = useIsAuthenticated();
  const tokens = useTokensMap()
  const [searchParams] = useSearchParams();
  const {mutate: createPayment} = usePaymentMutation();

  const order = CheckoutOrder.fromParams(searchParams);
  const paymentToken = tokens[order.currency];

  const paymentCreated = () => {

  }

  const payOrder = () => {
    createPayment({
      amount: order.total.toBigNumber(),
      receiver: order.receiver,
      token: paymentToken,
    }, { onSuccess: paymentCreated })
  }

  return (
    <div className="flex flex-1 h-screen bg-slate-50">
      <div className="flex flex-1 items-center justify-center">
        {/*<DefaultCheckoutTemplate order={order} payComponent={<PayButton order={order} />} />*/}
        <DefaultCheckoutTemplate order={order} payComponent={<QrCode payCallback={payOrder} />} />
      </div>
    </div>
  )
}