import { ContainedScreen } from "@/components/prefab/contained-screen.tsx"
import {Link, useSearchParams} from "react-router-dom";
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
import { AppIcon } from "@/components/shared/app-icon";
import { RoutesConfig } from "@/navigation";

import IllustrationImage from '@/assets/media/illustration.svg?react';

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
    <div className="flex flex-1 h-screen">
      <div className={'flex-1 relative hidden isolate lg:flex max-w-lg bg-[#F5F6FA] border-r p-12'}>
        <Link to={RoutesConfig.home}>
          <AppIcon />
        </Link>

        <IllustrationImage className={"absolute inset-0 z-0 w-full h-full object-cover"} />
      </div>

      <div className="flex flex-1 items-center justify-center">
        <DefaultCheckoutTemplate order={order} />
      </div>

      {isLoginVisible &&
        <WalletConnectLoginContainer
          title={''}
          loginButtonText={''}
          showScamPhishingAlert={false}
          wrapContentInsideModal={false}
          showLoginContent={false}

          onLoginRedirect={payOrder}
          logoutRoute={window.location.href}
          callbackRoute={window.location.href}

          // loginButtonText="xPortal Login"
          // lead="Scan the QR code to pay"
          {...defaultWalletConnectButtonConfig}
        />
      }
    </div>
  )
}