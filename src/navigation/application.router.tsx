import React, { useMemo } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'

import {AuthenticatedRouteOutlet, AuthRoutesOutlet} from "./outlets";
import { RoutesConfig } from './routes.config'
import { useScrollToTopHandler } from './hooks/useScrollToTopHandler'

import { AppLayout } from "@/components/layout/app-layout";
import { PublicLayout } from "@/components/layout/public-layout";

import { HomeScreen } from "@/screens/landing/home";
import { AdminScreen } from '@/screens/admin';
import { AuthenticationScreen } from "@/screens/auth/authentication-screen.tsx";
import { DashboardScreen } from "@/screens/app/dashboard";
import { ChargesOperationsScreen, TokensOperationsScreen } from '@/screens/app/operations';
import {Payroll} from "@/screens/landing/payroll";
import {Subscriptions} from "@/screens/landing/subscriptions";
import {Donations} from "@/screens/landing/donations";
import {PortfolioManagement} from "@/screens/landing/portfolio-management";
import {
  CreateSubscriptionScreen,
  ViewSubscriptionScreen,
  ListSubscriptionsScreen,
  UpdateSubscriptionScreen, SignSubscriptionScreen, ViewSignedSubscriptionScreen
} from "@/screens/app/subscriptions";
import { DemoPage } from '@/screens/app/demo';
import { ContactScreen } from '@/screens/app/contact';
import { FrequentlyAskedQuestionsScreen } from '@/screens/app/static-pages/frequently-asked-questions/frequently-asked-questions.screen';
import { TermsAndConditionsScreen } from '@/screens/app/static-pages/terms-and-conditions/terms-and-conditions-screen';
import { WhitepaperScreen } from '@/screens/app/static-pages/white-paper/whitepaper.screen';
import { CreateOneTimeDonationScreen, CreateDonationWidgetScreen, DonationDashboardScreen, ContentCreatorDonationPublicScreen, DonationsListScreen, ViewDonationScreen } from '@/screens/app/donations';
import { ActionsPerformedRankingScreen, DonationsReceivedRankingScreen } from '@/screens/app/event';

export function ApplicationRouter() {
  useScrollToTopHandler()
  const location = useLocation()
  const state = useMemo(() => location.state as { backgroundLocation?: Location }, [location])

  return (
    <React.Suspense fallback={<></>}>
      <Routes location={state?.backgroundLocation || location}>
        <Route path={"/demo-page"} element={<DemoPage />} />

        <Route element={<PublicLayout />}>
          <Route index element={<HomeScreen />} />

          <Route path={RoutesConfig.landingInvoices} element={<></>} />
          <Route path={RoutesConfig.landingPayroll} element={<Payroll></Payroll>} />
          <Route path={RoutesConfig.landingSubscriptions} element={<Subscriptions></Subscriptions>} />
          <Route path={RoutesConfig.landingVesting} element={<></>} />
          <Route path={RoutesConfig.landingPortfolioManagement} element={<PortfolioManagement></PortfolioManagement>} />
          <Route path={RoutesConfig.landingDonations} element={<Donations></Donations>} />
          <Route path={RoutesConfig.landingExpensesAndAllowances} element={<></>} />

          <Route path={RoutesConfig.frequentlyAskedQuestions} element={<FrequentlyAskedQuestionsScreen />} />
          <Route path={RoutesConfig.termsAndConditions} element={<TermsAndConditionsScreen />} />
          <Route path={RoutesConfig.whitepaper} element={<WhitepaperScreen />} />
          <Route path={RoutesConfig.contactUs} element={<ContactScreen />} />
          
          <Route path={RoutesConfig.donationPublic} element={<ContentCreatorDonationPublicScreen />} />

          <Route path={RoutesConfig.eventActions} element={<ActionsPerformedRankingScreen />} />
          <Route path={RoutesConfig.eventDonations} element={<DonationsReceivedRankingScreen />} />
        </Route>

        <Route path={RoutesConfig.subscription}>
          <Route path={RoutesConfig.signSubscription} element={<SignSubscriptionScreen />} />
        </Route>

        <Route element={<AuthenticatedRouteOutlet />}>
          <Route element={<AppLayout />}>


            <Route index element={<DashboardScreen />} />
            <Route path={RoutesConfig.dashboard} element={<DashboardScreen />} />

            <Route path={RoutesConfig.donations}>
              <Route index element={<DonationsListScreen />} />
              <Route path={':id'} element={<ViewDonationScreen />} />

              <Route path={RoutesConfig.createDonationIndex}>
                <Route index element={<DonationDashboardScreen />} />
                <Route path={RoutesConfig.createDonationWidget} element={<CreateDonationWidgetScreen />} />
                <Route path={RoutesConfig.createOneTimeDonation} element={<CreateOneTimeDonationScreen />} />
              </Route>
            </Route>

            <Route path={RoutesConfig.admin}>
              <Route index element={<AdminScreen />} />
            </Route>

            <Route path={RoutesConfig.subscriptions}>
              <Route index element={<ListSubscriptionsScreen />} />
              <Route path={RoutesConfig.viewSubscription} element={<ViewSubscriptionScreen />} />
              <Route path={RoutesConfig.signedSubscription} element={<ViewSignedSubscriptionScreen />} />
              <Route path={RoutesConfig.createSubscription} element={<CreateSubscriptionScreen />} />
              <Route path={RoutesConfig.updateSubscription} element={<UpdateSubscriptionScreen />} />
            </Route>

            <Route path={RoutesConfig.tokensOperations}>
              <Route index element={<TokensOperationsScreen />} />
              <Route path={':id'} element={<ChargesOperationsScreen />} />
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
