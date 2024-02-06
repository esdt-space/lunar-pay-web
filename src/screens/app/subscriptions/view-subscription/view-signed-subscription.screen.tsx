import { Link2 } from "lucide-react";
import { Link, useParams } from "react-router-dom"

import { RoutesConfig } from "@/navigation"
import { useCreatedSubscription } from "@/features/subscriptions/hooks";

import { Card } from "@/components/ui/card.tsx"
import { Button } from "@/components/ui/button.tsx"
import { ContainedScreen } from "@/components/prefab/contained-screen.tsx"

import { SubscriptionDetails } from "./partials/subscription-details.tsx";

export const ViewSignedSubscriptionScreen = () => {
  const { id } = useParams()

  const { data: subscription } = useCreatedSubscription(id);

  if(!subscription) return;

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
        </div>
      </div>

      <Card className={'p-6'}>
        <SubscriptionDetails subscription={subscription} signedList={true}/>
      </Card>
    </ContainedScreen>
  )
}