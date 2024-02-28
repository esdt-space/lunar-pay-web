import { useSearchParams } from "react-router-dom";

import { useTokensMap } from "@/core/tokens";
import { useIsAuthenticated } from "@/features/auth";
import { usePaymentMutation } from "@/features/payments/hooks/mutations";
import { CheckoutOrder } from "@/screens/app/checkout/checkout-order.model.ts";

import { QrCode } from "./pay-methods/qr-code.tsx";
import { DefaultCheckoutTemplate } from "./default-checkout-template";

export const CheckoutScreen = () => {
  const isAuthenticated = useIsAuthenticated();
  const tokens = useTokensMap()
  const [searchParams] = useSearchParams();
  const {mutate: createPayment} = usePaymentMutation();

  const order = CheckoutOrder.fromParams(searchParams);
  const paymentToken = tokens[order.currency];

  const paymentCreated = () => {
    if(order.redirectUrl) {
      window.location.href = order.redirectUrl
    }
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
        <DefaultCheckoutTemplate order={order} payComponent={<QrCode payCallback={payOrder} />} />
      </div>
    </div>
  )
}