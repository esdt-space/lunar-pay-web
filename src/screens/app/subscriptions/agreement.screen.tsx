import { useState } from "react"
import { PaymentDetailsWidget, AgreementDetailsWidget } from "./components"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent } from "@/components/ui/tabs"

export enum ScreenTabs {
  AgreementDetails = 'agreement-details',
  PaymentDetails = 'payment-details',
}

export const AgreementScreen = () => {
  const [selectedTab, setSelectedTab] = useState<ScreenTabs>(ScreenTabs.PaymentDetails)
  
  return <div className={'container mx-auto sm:p-12 xl:p-16'}>
    <Card className="p-4">
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
    </Card>
  </div>
}
