import { SubscriptionsOverviewList, SubscriptionsOverviewDashboard, CreateSubscriptionWidget } from "./components"
import { SubscriptionPaymentAgreement } from "./components/payment-agreement.widget"

export const SubscriptionsOverviewScreen = () => {
    return <div className={'container mx-auto p-4 sm:p-12 xl:p-16'}>
      <CreateSubscriptionWidget />
      <SubscriptionPaymentAgreement />
      <SubscriptionsOverviewDashboard />
      <SubscriptionsOverviewList />
    </div>
}