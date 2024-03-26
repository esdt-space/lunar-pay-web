import { Link2, Pencil } from "lucide-react"
import { useGetAccount } from "@multiversx/sdk-dapp/hooks"
import { Link, useNavigate, useParams } from "react-router-dom"

import { RoutesConfig } from "@/navigation"
import { useCreatedSubscription } from "@/features/subscriptions/hooks"

import { Card } from "@/components/ui/card.tsx"
import { Button } from "@/components/ui/button.tsx"
import { ContainedScreen } from "@/components/prefab/contained-screen.tsx"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs.tsx"

import { SubscriptionDetails } from "./partials/subscription-details.tsx"
import { MembersListPartial } from "./partials/members-list-partial.tsx"
import { SubscriptionTriggersPartial } from "./partials/subscription-triggers-partial.tsx"
import {
  RedirectAndWebhooksSettings
} from "@/screens/app/subscriptions/view-subscription/redirect-and-webhooks-settings/redirect-and-webhooks-settings.tsx";

import { SubscriptionsService } from "@/features/subscriptions/subscriptions.service.ts"
import { useEffect, useState } from "react"
import { SubscriptionMember } from "@/features/subscriptions/models"

export const ViewSubscriptionScreen = () => {
  const [ memberships, setMemberships ] = useState<SubscriptionMember[]>([])
  const { address } = useGetAccount()
  const { id } = useParams()
  const navigate = useNavigate()

  const { data: subscription } = useCreatedSubscription(id);

  useEffect(() => {
    console.log(memberships)
  }, [memberships])

  useEffect(() => {
    if(subscription !== undefined) {
      SubscriptionsService.getAllSubscriptionMembers(subscription?.id).then((res) => {
        setMemberships(res)
      })
    }
  }, [])

  if(!subscription) return;
  
  if(subscription && subscription.owner !== address) {
    navigate(RoutesConfig.dashboard, { replace: true });
  }

  const totalAmountPerMonth = 300;
  const totalAmountCharged = 30000;

  return (
    <ContainedScreen className="space-y-6">
      <div className={'flex justify-between items-top'}>
        <h2 className={'text-lg font-medium'}>
          {subscription.itemName ?? 'Unnamed subscription'}
        </h2>

        <div className={'flex gap-2'}>
          <Button asChild variant={'ghost'} size={'sm'} className={'ml-2'}>
            <Link to={`${RoutesConfig.subscription}/${subscription._id}`}>
              Preview
              <Link2 className={'ml-2 w-4 h-4'} />
            </Link>
          </Button>

          <Button asChild size={'sm'} className="w-[100px]">
            <Link to={`${RoutesConfig.subscriptions}/${id}/edit`}>
              Edit
              <Pencil className={'ml-2 w-3 h-3'}/>
            </Link>
          </Button>
        </div>
      </div>

      <Tabs defaultValue="overview">
        <TabsList className={'self-start mb-2'}>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="members">Members</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className={'space-y-4'}>
          <Card className={'p-6'}>
            <SubscriptionDetails subscription={subscription}/>
          </Card>

          <SubscriptionTriggersPartial subscriptionId={subscription.id} />
        </TabsContent>

        <TabsContent value="members" className={'space-y-4'}>
          <MembersListPartial subscriptionId={subscription.id} />
        </TabsContent>

        <TabsContent value="settings" className={'space-y-4'}>
          <RedirectAndWebhooksSettings subscription={subscription} />
        </TabsContent>

        <TabsContent value="analytics" className={'space-y-4'}>
          <Card className={'p-6'}>
            <div className="flex flex-col">
              <div className="text-2xl bold mb-4">Analytics</div>
              <div>Total Amount per Month: {totalAmountPerMonth}</div>
              <div>Total Amount Charged: {totalAmountCharged}</div>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </ContainedScreen>
  )
}