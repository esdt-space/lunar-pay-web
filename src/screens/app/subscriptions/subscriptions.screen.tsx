import { CreateSubscriptionWidget, SubscriptionConfirmation } from "./components"

export const SubscriptionsScreen = () => {
  return <div className={'container mx-auto p-4 sm:p-12 xl:p-16'}>
    <CreateSubscriptionWidget />
    <SubscriptionConfirmation />
  </div>
}
