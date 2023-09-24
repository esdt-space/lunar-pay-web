import React, { useMemo } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'

import {AuthenticatedRouteOutlet, AuthRoutesOutlet} from "./outlets";
import { RoutesConfig } from './routes.config'
import { useScrollToTopHandler } from './hooks/useScrollToTopHandler'

import { PublicLayout } from "@/components/layout/public-layout";

import { HomeScreen } from "@/screens/landing/home";
import { ApproveSubscriptionScreen } from "@/screens/app/subscriptions";
import { AuthenticationScreen } from "@/screens/auth/authentication-screen.tsx";
import { DashboardScreen } from '@/screens/app/dashboard';

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

        <Route element={<AuthenticatedRouteOutlet />}>
          
          <Route path={''} element={<PublicLayout />}>
            <Route path={RoutesConfig.dashboard} element={<DashboardScreen />} />
          </Route>

          <Route path={RoutesConfig.approveSubscription}>
            <Route path={`:id`} element={<ApproveSubscriptionScreen />} />
          </Route>
        </Route>

        <Route path={RoutesConfig.auth} element={<AuthRoutesOutlet />}>
          <Route index element={<AuthenticationScreen />} />
        </Route>
      </Routes>
    </React.Suspense>
  )
}
