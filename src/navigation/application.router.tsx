import React, { useMemo } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'

import { RoutesConfig } from './routes.config'
import { useScrollToTopHandler } from './hooks/useScrollToTopHandler'

import { PublicLayout } from "@/components/layout/public-layout";

import { HomeScreen } from "@/screens/landing/home";
import { ApproveSubscriptionScreen } from "@/screens/app/subscriptions";

export function ApplicationRouter() {
  useScrollToTopHandler()
  const location = useLocation()
  const state = useMemo(() => location.state as { backgroundLocation?: Location }, [location])

  return (
    <React.Suspense fallback={<></>}>
      <Routes location={state?.backgroundLocation || location}>
        <Route path={''} element={<PublicLayout />}>
          <Route index element={<HomeScreen />} />
        </Route>

        <Route path={''}>
          <Route path={`${RoutesConfig.approveSubscription}/:id`} element={<ApproveSubscriptionScreen />} />
        </Route>
      </Routes>
    </React.Suspense>
  )
}
