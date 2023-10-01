import React, { useMemo } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'

import {AuthenticatedRouteOutlet, AuthRoutesOutlet} from "./outlets";
import { RoutesConfig } from './routes.config'
import { useScrollToTopHandler } from './hooks/useScrollToTopHandler'

import { AppLayout } from "@/components/layout/app-layout";
import { PublicLayout } from "@/components/layout/public-layout";

import { HomeScreen } from "@/screens/landing/home";
import { AdminScreen } from '@/screens/admin';
import { ApproveSubscriptionScreen, SubscriptionsOverviewScreen } from "@/screens/app/subscriptions";
import { AuthenticationScreen } from "@/screens/auth/authentication-screen.tsx";
import { DashboardScreen } from "@/screens/app/dashboard/dashboard.screen.tsx";

export function ApplicationRouter() {
  useScrollToTopHandler()
  const location = useLocation()
  const state = useMemo(() => location.state as { backgroundLocation?: Location }, [location])

  return (
    <React.Suspense fallback={<></>}>
      <Routes location={state?.backgroundLocation || location}>
        <Route element={<PublicLayout />}>
          <Route index element={<HomeScreen />} />

          <Route path={RoutesConfig.landingInvoices} element={<></>} />
          <Route path={RoutesConfig.landingPayroll} element={<></>} />
          <Route path={RoutesConfig.landingSubscriptions} element={<></>} />
          <Route path={RoutesConfig.landingVesting} element={<></>} />
          <Route path={RoutesConfig.landingDonations} element={<></>} />
          <Route path={RoutesConfig.landingExpensesAndAllowances} element={<></>} />
        </Route>

        <Route element={<AuthenticatedRouteOutlet />}>
          <Route path={RoutesConfig.approveSubscription}>
            <Route path={`:id`} element={<ApproveSubscriptionScreen />} />
          </Route>

          <Route element={<AppLayout />}>
            <Route index element={<DashboardScreen />} />
            <Route path={RoutesConfig.dashboard} element={<DashboardScreen />} />

            <Route path={RoutesConfig.admin}>
              <Route index element={<AdminScreen />} />
            </Route>

            <Route path={RoutesConfig.subscriptions}>
              <Route index element={<SubscriptionsOverviewScreen />} />
            </Route>
          </Route>
        </Route>

        <Route path={RoutesConfig.auth} element={<AuthRoutesOutlet />}>
          <Route index element={<AuthenticationScreen />} />
        </Route>
      </Routes>
    </React.Suspense>
  )
}
