import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DepositsWidget, WithdrawsWidget, TransfersWidget } from "./components"

export const TokensOperationsScreen = () => {
  return <div className={'container mx-auto p-4 sm:p-12 xl:p-16'}>
  <Tabs defaultValue="deposits">
    <TabsList className={'self-start mb-2'}>
      <TabsTrigger value="deposits">
        Deposits
      </TabsTrigger>
      <TabsTrigger value="withdraws">
        Withdraws
      </TabsTrigger>
      <TabsTrigger value="transfers">
        Transfers
      </TabsTrigger>
    </TabsList>

    <TabsContent value="deposits">
      <DepositsWidget />
    </TabsContent>
    <TabsContent value="withdraws">
      <WithdrawsWidget />
    </TabsContent>
    <TabsContent value="transfers">
      <TransfersWidget />
    </TabsContent>
  </Tabs>
</div>
}