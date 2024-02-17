import { ContainedScreen } from "@/components/prefab/contained-screen.tsx"
import {useSearchParams} from "react-router-dom";
import {CheckoutOrder} from "@/screens/app/checkout/checkout-order.model.ts";
import {defaultWalletConnectButtonConfig} from "@/lib/mvx";
import {WalletConnectLoginContainer} from "@multiversx/sdk-dapp/UI";
import {useIsAuthenticated} from "@/features/auth";
import {OnLoginRedirectOptionsType} from "@multiversx/sdk-dapp/types/login.types";
import {useState} from "react";
import _ from "lodash";
import {DefaultCheckoutTemplate} from "@/screens/app/checkout/default-checkout-template";
import {usePaymentMutation} from "@/features/payments/hooks/mutations";
import {useTokensMap} from "@/core/tokens";

/*

  https://localhost:5174/checkout?receiver=erd1yng4ajnxp03lx5erwcq57m5502m6t9nxajf5hv9nw0k27t8zcq4qq3vu4v
  &itemName[]=iPhone 15 PRO
  &itemPrice[]=1
  &itemQuantity[]=1
  &itemName[]=MacBook PRO
  &itemPrice[]=1
  &itemQuantity[]=1
  &currency=EGLD

  https://localhost:5174/checkout?receiver=erd1yng4ajnxp03lx5erwcq57m5502m6t9nxajf5hv9nw0k27t8zcq4qq3vu4v&itemName[]=iPhone 15 PRO&itemPrice[]=1&itemQuantity[]=1&itemName[]=MacBook PRO&itemPrice[]=1&itemQuantity[]=1&currency=EGLD
 */



export const CheckoutScreen = () => {
  const [searchParams] = useSearchParams();
  const defaultLoginVisibility = _.isBoolean(searchParams.get('isLoginVisible')) || true;

  const order = CheckoutOrder.fromParams(searchParams);
  const {mutate: createPayment} = usePaymentMutation();

  const [isLoginVisible, setIsLoginVisible] = useState<boolean>(defaultLoginVisibility);
  const isAuthenticated = useIsAuthenticated();

  const tokens = useTokensMap()
  const paymentToken = tokens[order.currency];

  const paymentCreated = () => {

  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const payOrder = (_callbackRoute: string, _options?: OnLoginRedirectOptionsType) => {
    console.log("logged in");

    createPayment({
      amount: order.total.toBigNumber(),
      receiver: order.receiver,
      token: paymentToken,
    }, { onSuccess: paymentCreated})
  }

  return (
    <ContainedScreen className="space-y-6">
      <DefaultCheckoutTemplate order={order} />

      {isLoginVisible &&
        <WalletConnectLoginContainer
          title={''}
          loginButtonText={''}
          showScamPhishingAlert={false}
          wrapContentInsideModal={false}

          onLoginRedirect={payOrder}
          logoutRoute={window.location.href}
          callbackRoute={window.location.href}

          // loginButtonText="xPortal Login"
          // lead="Scan the QR code to pay"
          {...defaultWalletConnectButtonConfig}
        />
      }
    </ContainedScreen>
  )
}