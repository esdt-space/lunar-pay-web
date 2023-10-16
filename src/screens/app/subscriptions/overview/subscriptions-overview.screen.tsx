import { Button } from "@/components/ui/button"
import { SubscriptionsListScreen } from "."
import { MembersSection, ScreenTabs } from "../agreement.screen"

type Props = {
  setSelectedTab: React.Dispatch<React.SetStateAction<ScreenTabs>>
  setAgreementMembers: React.Dispatch<React.SetStateAction<MembersSection>>
}

export const SubscriptionsOverviewScreen = ({setSelectedTab, setAgreementMembers}: Props) => {
  return <div>
    <div className="flex justify-between pl-10 pr-10">
      <h1>Subscriptions List</h1>
      <Button onClick={() => setSelectedTab(ScreenTabs.PaymentDetails)}>
        Create Subscription
      </Button>
    </div>
    <SubscriptionsListScreen setSelectedTab={setSelectedTab} setAgreementMembers={setAgreementMembers}/>
  </div>
}