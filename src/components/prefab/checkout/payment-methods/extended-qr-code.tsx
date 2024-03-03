import { QrCode } from "./qr-code";

type Params = {
  payCallback: () => void;
}

export function ExtendedQrCode({payCallback}: Params) {
  return (
    <div className={'flex md:flex-col lg:flex-row bg-muted/60 p-8 gap-4 rounded-xl'}>
      <div className={'flex-1 _text-white text-muted-foreground'}>
        <h2 className={'font-semibold text-lg'}>xPortal Mobile App</h2>
        <div className={'text-sm _text-muted'}>Scan this QR code with your app</div>
      </div>
      <div className={'flex-1 bg-white rounded-lg aspect-square max-w-72'}>
        <QrCode payCallback={payCallback}></QrCode>
      </div>
    </div>
  )
}