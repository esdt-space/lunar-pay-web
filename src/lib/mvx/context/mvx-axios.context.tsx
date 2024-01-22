import _ from "lodash";
import { PropsWithChildren } from 'react'
import { AxiosInterceptorContext } from '@multiversx/sdk-dapp/wrappers'

import { AppEnvironment } from '@/environment'

export default function MvxAxiosContext(props: PropsWithChildren) {
  const { children } = props

  const nativeAuthDomains = _.concat(
    AppEnvironment.mvx.nativeAuthDomains,
    AppEnvironment.auth.nativeAuthDomains,
  );

  return (
    <AxiosInterceptorContext.Provider>
      <AxiosInterceptorContext.Interceptor authenticatedDomains={nativeAuthDomains}>
        {children}
      </AxiosInterceptorContext.Interceptor>
    </AxiosInterceptorContext.Provider>
  )
}
