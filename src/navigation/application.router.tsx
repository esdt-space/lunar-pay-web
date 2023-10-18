import React, { useMemo } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'

import {AuthenticatedRouteOutlet, AuthRoutesOutlet} from "./outlets";
import { RoutesConfig } from './routes.config'
import { useScrollToTopHandler } from './hooks/useScrollToTopHandler'

import { AppLayout } from "@/components/layout/app-layout";
import { PublicLayout } from "@/components/layout/public-layout";

import { HomeScreen } from "@/screens/landing/home";
import { AdminScreen } from '@/screens/admin';
import { ApproveSubscriptionScreen, AgreementScreen } from "@/screens/app/subscriptions";
import { AuthenticationScreen } from "@/screens/auth/authentication-screen.tsx";
import { DashboardScreen } from "@/screens/app/dashboard";
import { TokensOperationsScreen } from '@/screens/app/operations';
import {Payroll} from "@/screens/landing/payroll";
import {Subscriptions} from "@/screens/landing/subscriptions";
import {Donations} from "@/screens/landing/donations";
import {PortfolioManagement} from "@/screens/landing/portfolio-management";
import { TransactionsScreen } from '@/screens/app/transactions';
import {
  CreatePaymentAgreementScreen
} from "@/screens/app/payment-agreements/create-payment-agreement/create-payment-agreement.screen.tsx";
import {
  CreatePaymentAgreementIndexScreen
} from "@/screens/app/payment-agreements/create-payment-agreement/create-payment-agreement-index.screen.tsx";
import {ListPaymentAgreementsScreen} from "@/screens/app/payment-agreements/list-payment-agreements.screen.tsx";

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
          <Route path={RoutesConfig.landingPayroll} element={<Payroll></Payroll>} />
          <Route path={RoutesConfig.landingSubscriptions} element={<Subscriptions></Subscriptions>} />
          <Route path={RoutesConfig.landingVesting} element={<></>} />
          <Route path={RoutesConfig.landingPortfolioManagement} element={<PortfolioManagement></PortfolioManagement>} />
          <Route path={RoutesConfig.landingDonations} element={<Donations></Donations>} />
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
              <Route index element={<AgreementScreen />} />
            </Route>

            <Route path={RoutesConfig.paymentAgreements}>
              <Route index element={<ListPaymentAgreementsScreen />} />
              <Route path={RoutesConfig.createPaymentAgreementIndex} element={<CreatePaymentAgreementIndexScreen />} />
              <Route path={RoutesConfig.createPaymentAgreementSubscription} element={<CreatePaymentAgreementScreen />} />
            </Route>

            <Route path={RoutesConfig.tokensOperations}>
              <Route index element={<TokensOperationsScreen />} />
            </Route>

            <Route path={RoutesConfig.transactions}>
              <Route index element={<TransactionsScreen />} />
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
