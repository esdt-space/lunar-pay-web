import { useSearchParams } from "react-router-dom";

import { useTokensMap } from "@/core/tokens";
// import { useIsAuthenticated } from "@/features/auth";
import { CheckoutOrder } from "@/features/checkout/models";
import { usePaymentMutation } from "@/features/payments/hooks/mutations";

import { SideBySideTemplate } from "@/components/prefab/checkout/templates";
import { AllMvxPayMethods } from "@/components/prefab/checkout/payment-methods";

export const CheckoutScreen = () => {
  // const isAuthenticated = useIsAuthenticated();
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
        <SideBySideTemplate order={order} payComponent={<AllMvxPayMethods payOrder={payOrder} />} />
      </div>
    </div>
  )
}