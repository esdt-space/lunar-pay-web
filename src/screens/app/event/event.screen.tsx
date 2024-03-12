import { ContainedScreen } from '@/components/prefab/contained-screen'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useState } from 'react'

enum EventTabs {
  ActionsPerformed = 'actions-performed',
  DonationsReceived = 'donations-received',
}

export const EventScreen = () => {
  const [selectedTab, setSelectedTab] = useState<EventTabs>(EventTabs.ActionsPerformed);

  const onTabChange = (value: string) => {
    setSelectedTab(value as EventTabs);
  }

  return (
    <ContainedScreen>
      <Card>
        <CardHeader className='text-xl font-bold'>
          Lunar Pay Event
        </CardHeader>
        <CardContent>
          <Tabs value={selectedTab} className="flex flex-col space-y-0" onValueChange={onTabChange}>
            <TabsList className={'flex'}>
              <TabsTrigger className={'flex-1'} value={EventTabs.ActionsPerformed}>
                Actions
              </TabsTrigger>
              <TabsTrigger className={'flex-1'} value={EventTabs.DonationsReceived}>
                Donations
              </TabsTrigger>
            </TabsList>

            <CardContent className={'p-8'}>
              <TabsContent className={'flex flex-1 flex-col gap-4 mt-0'} value={EventTabs.ActionsPerformed}>
                <div>Actions</div>
              </TabsContent>

              <TabsContent className={'flex flex-col flex-1 gap-4 mt-0'} value={EventTabs.DonationsReceived}>
                <div>Donations</div>
              </TabsContent>
            </CardContent>
          </Tabs>
        </CardContent>
      </Card>
    </ContainedScreen>
  )
}
