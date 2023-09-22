import { useState } from 'react'

import { AuthButtons } from '../components/auth-buttons'
import { MobileConnectContent } from './partials/mobile-connect-content'

type Props = {
  callbackRoute: string
}

type FlowContentStep = 'mobile-wallet' | 'default'

export function AuthForm(props: Props) {
  const { callbackRoute } = props
  const [flowStep, setFlowStep] = useState<FlowContentStep>('default')

  return (
    <div className={'flex flex-col flex-1 gap-8'}>

      <div>
        <p className='text-lg font-bold'>Connect Wallet</p>
      </div>      

      {flowStep === 'default' && (
        <>
        <AuthButtons
          callbackRoute={callbackRoute}
          mobileAppButtonClickHandler={() => setFlowStep('mobile-wallet')}
        />

        <div className={'text-center'}>
          <h3 className={'text-lg font-bold'}>New to MultiversX?</h3>
          <div className={'text-muted-foreground'}>Easily create your own MultiversX wallet using xPortal</div>
        </div>
        </>
      )}

      {flowStep === 'mobile-wallet' && <MobileConnectContent logoutRoute={callbackRoute} />}
    </div>
  )
}
