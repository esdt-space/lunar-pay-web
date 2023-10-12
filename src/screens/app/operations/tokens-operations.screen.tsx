import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DepositsWidget, WithdrawalsWidget, TransfersWidget } from "./components"
import { useEffect } from "react"
import { TokenOperationsService } from "@/features/tokens/services/token-operations.service"
import { AllOperationsWidget } from "./components/all-token-operations.widget"

export const TokensOperationsScreen = () => {

  useEffect(() => {
    TokenOperationsService.getAllTokenOperations()
  }, [])

  return <div className={'container mx-auto p-4 sm:p-12 xl:p-16'}>
  <Tabs defaultValue="all">
    <TabsList className={'self-start mb-2'}>
      <TabsTrigger value="all">
        All
      </TabsTrigger>
      <TabsTrigger value="deposits">
        Deposits
      </TabsTrigger>
      <TabsTrigger value="withdrawals">
        Withdrawals
      </TabsTrigger>
      <TabsTrigger value="transfers">
        Transfers
      </TabsTrigger>
    </TabsList>

    <TabsContent value="all">
      <AllOperationsWidget />
    </TabsContent>
    <TabsContent value="deposits">
      <DepositsWidget />
    </TabsContent>
    <TabsContent value="withdrawals">
      <WithdrawalsWidget />
    </TabsContent>
    <TabsContent value="transfers">
      <TransfersWidget />
    </TabsContent>
  </Tabs>
</div>
}