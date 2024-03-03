import { useCallback } from "react";
import { WalletConnectLoginContainer } from "@multiversx/sdk-dapp/UI";
import { OnLoginRedirectOptionsType } from "@multiversx/sdk-dapp/types/login.types";

import { defaultWalletConnectButtonConfig } from "@/lib/mvx";

import "./qr-code.css";

type Params = {
  payCallback: () => void;
}

export function QrCode({ payCallback }: Params) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const loginFinished = useCallback((_callbackRoute: string, _options?: OnLoginRedirectOptionsType) => {
    payCallback();
  }, [payCallback])

  return (
    <>
      <WalletConnectLoginContainer
        title={''}
        loginButtonText={''}
        showLoginContent={true}
        showScamPhishingAlert={false}
        wrapContentInsideModal={false}

        onLoginRedirect={loginFinished}
        logoutRoute={window.location.href}
        callbackRoute={window.location.href}

        // loginButtonText="xPortal Login"
        // lead="Scan the QR code to pay"
        {...defaultWalletConnectButtonConfig}
      />
    </>

  )
}