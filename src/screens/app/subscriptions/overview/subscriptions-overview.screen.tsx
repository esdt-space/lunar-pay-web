import { Button } from "@/components/ui/button"
import { SubscriptionsListScreen } from "."
import { ScreenTabs } from ".."
import { mockSubscriptions } from "./mock-data-subscriptions"

type Props = {
  setSelectedTab: React.Dispatch<React.SetStateAction<ScreenTabs>>
}

export const SubscriptionsOverviewScreen = ({setSelectedTab}: Props) => {
  return <div>
    <div className="flex justify-between pl-10 pr-10">
      <h1>Subscriptions List</h1>
      <Button onClick={() => setSelectedTab(ScreenTabs.PaymentDetails)}>
        Create Subscription
      </Button>
    </div>
    <SubscriptionsListScreen subscriptionsList={mockSubscriptions} />
  </div>
}