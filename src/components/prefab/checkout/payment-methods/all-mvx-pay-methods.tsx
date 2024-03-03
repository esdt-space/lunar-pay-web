import { ExtendedQrCode } from "./extended-qr-code.tsx";
import { BrowserExtension } from "./browser-extension.tsx";

type Params = {
  payOrder: () => void;
}

export function AllMvxPayMethods({payOrder}: Params) {
  return (
    <div className={'flex flex-col space-y-2'}>
      <ExtendedQrCode payCallback={payOrder} />
      <BrowserExtension />
    </div>
  )
}