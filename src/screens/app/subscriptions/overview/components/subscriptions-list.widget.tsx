import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs.tsx";
import { SubscriptionsList } from "./subscriptions-list";

export const SubscriptionsOverviewList = () => {
  return <div className="p-8">
    <Tabs defaultValue="active" className="space-y-4">
      <TabsList>
        <TabsTrigger value="active">Active</TabsTrigger>
        <TabsTrigger value="drafts">
          Drafts
        </TabsTrigger>
        <TabsTrigger value="other">
          Other
        </TabsTrigger>
      </TabsList>

      <TabsContent value="active" >
        <div className="flex flex-col">
          <SubscriptionsList />
        </div>
      </TabsContent>
      <TabsContent value="drafts" className="space-y-4">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          Drafts
        </div>
      </TabsContent>
      <TabsContent value="other" className="space-y-4">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          Other
        </div>
      </TabsContent>
    </Tabs>
  </div>
}
