import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs.tsx";

import { ProtocolSettings } from "./partials/protocol-settings.tsx";

export function AdminScreen() {
  return (
    <div className={'container mx-auto p-4 sm:p-12 xl:p-16'}>
      <Tabs defaultValue="protocol-settings">
        <TabsList className={'self-start mb-2'}>
          <TabsTrigger value="protocol-settings">
            Protocol Settings
          </TabsTrigger>
          <TabsTrigger value="subscriptions">
            Subscriptions
          </TabsTrigger>
        </TabsList>

        <TabsContent value="protocol-settings">
          <ProtocolSettings />
        </TabsContent>
        <TabsContent value="subscriptions"></TabsContent>
      </Tabs>
    </div>
  )
}
