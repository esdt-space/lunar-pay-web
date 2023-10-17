import { useState } from "react"
import { PaymentDetailsWidget, AgreementDetailsWidget } from "./components"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent } from "@/components/ui/tabs"
import { AgreementMembersList, SubscriptionsOverviewScreen } from "./overview"
import { AgreementBasicDetails } from "./overview/agreement-details"

export enum ScreenTabs {
  AgreementsList = 'agreements-list',
  PaymentDetails = 'payment-details',
  AgreementDetails = 'agreement-details',
  AgreementMembersList = 'agreement-members-list'
}

export type MembersSection = {
  agreementDetails: AgreementBasicDetails;
  membersList: string[];
}

export const AgreementScreen = () => {
  const [selectedTab, setSelectedTab] = useState<ScreenTabs>(ScreenTabs.AgreementsList)
  const [agreementMembers, setAgreementMembers] = useState<MembersSection>({agreementDetails: {
    name: '',
    frequency: '',
    tokenIdentifier: "",
    price: undefined,
    benefits: []
  }, membersList: []})
  
  return <div className={'container mx-auto sm:p-12 xl:p-16'}>
    {selectedTab === ScreenTabs.AgreementsList 
      && <SubscriptionsOverviewScreen setSelectedTab={setSelectedTab} setAgreementMembers={setAgreementMembers}/>}
    {selectedTab === ScreenTabs.AgreementMembersList 
      && <AgreementMembersList setSelectedTab={setSelectedTab} agreementMembers={agreementMembers} />}
    {(selectedTab !== ScreenTabs.AgreementsList && selectedTab !== ScreenTabs.AgreementMembersList) 
      && <Card className="p-4">
      <CardHeader>
        <CardTitle>
          {selectedTab === ScreenTabs.AgreementDetails ? 'Update Agreement' : 'Payment Details'}
        </CardTitle>
      </CardHeader>

      <CardContent>
        <Tabs value={selectedTab} className="flex flex-col space-y-0">
          <TabsContent className={'space-y-3 mt-0'} value="payment-details">
            <PaymentDetailsWidget setSelectedTab={setSelectedTab} />
          </TabsContent>
          <TabsContent className={'space-y-3 mt-0'} value="agreement-details">
            <AgreementDetailsWidget />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>}
  </div>
}
