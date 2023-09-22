import { useState } from 'react'

import { AuthButtons } from '../components/auth-buttons'
import { MobileConnectContent } from './partials/mobile-connect-content'
import { Card } from '@/components/ui/card'
import { AppEnvironment } from '@/environment'
import { Info } from 'lucide-react'

type Props = {
  callbackRoute: string
}

type FlowContentStep = 'mobile-wallet' | 'default'

export function AuthForm(props: Props) {
  const { callbackRoute } = props
  const [flowStep, setFlowStep] = useState<FlowContentStep>('default')

  return (
    <div className={'flex flex-col flex-1 gap-4'}>
      <Card className={'p-4 space-y-2 bg-muted/50'}>	
          <div className={'flex items-center gap-1'}>	
            <Info className={'w-4 h-4'} />	
            <p className={'text-sm font-medium'}>	
              Beware of scams and phishing attempts!	
            </p>	
          </div>	
          <p className={'text-xs text-muted-foreground'}>	
            Check the website link carefully:{' '}	
            <a className={'text-green-600 font-medium'} href={AppEnvironment.appUrl}>	
              {AppEnvironment.appUrl}	
            </a>	
          </p>	
      </Card>

      {flowStep === 'default' && (
        <>
        <AuthButtons
          callbackRoute={callbackRoute}
          mobileAppButtonClickHandler={() => setFlowStep('mobile-wallet')}
        />

        <div className={'text-center mt-8'}>
          <h3 className={'text-lg font-bold'}>New to MultiversX?</h3>
          <div className={'text-muted-foreground'}>Easily create your own MultiversX wallet using xPortal</div>
        </div>
        </>
      )}

      {flowStep === 'mobile-wallet' && <MobileConnectContent logoutRoute={callbackRoute} />}
    </div>
  )
}
