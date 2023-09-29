import { SubscriptionsList, SubscriptionsOverviewDashboard } from "./components"

export const SubscriptionsOverviewScreen = () => {
    return <div className={'container mx-auto p-4 sm:p-12 xl:p-16'}>
      <SubscriptionsOverviewDashboard />
      <SubscriptionsList />
    </div>
}