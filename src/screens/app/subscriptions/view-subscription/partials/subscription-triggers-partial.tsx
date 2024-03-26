import { useState } from "react"

import { useTokensMap } from "@/core/tokens"
import { useSubscriptionTriggers } from "@/features/subscription-triggers/hooks"
import { useCreatedSubscription } from "@/features/subscriptions/hooks"
import { SubscriptionTriggersTable } from "@/features/subscription-triggers/components"

import { Card, CardContent } from "@/components/ui/card.tsx"
import { PaginationButtons } from "@/components/shared/pagination"
import { EmptyStateWithAction } from "@/components/shared/empty-states"

type Props = {
  subscriptionId: string;
}

export function SubscriptionTriggersPartial({ subscriptionId }: Props) {
  const tokensMap = useTokensMap();
  const [currentPage, setCurrentPage] = useState(1);

  const {data: subscription} = useCreatedSubscription(subscriptionId);
  const {
    data: triggers,
    isFetched: isFetchedSubscriptionsTriggers,
  } = useSubscriptionTriggers(currentPage, subscriptionId);

  if (!subscription) return null;

  const nextPageHandler = () => setCurrentPage(page => page + 1);
  const previousPageHandler = () => setCurrentPage(page => Math.max(1, page - 1));

  const token = tokensMap[subscription?.tokenIdentifier];
  const numberOfPages = triggers?.numberOfPages
  const subscriptionTriggers = triggers?.subscriptionTriggers ?? []
  const emptySubscriptionTriggers = isFetchedSubscriptionsTriggers && subscriptionTriggers.length === 0;

  return (
    <Card>
      <CardContent className="p-0">
        {emptySubscriptionTriggers && (
          <div className={'p-12'}>
            <EmptyStateWithAction
              title={'No current subscription triggers'}
              description={"Subscription triggers will appear here"}
              action={<></>}
            />
          </div>
        )}

        {!emptySubscriptionTriggers && (
          <Card>
            <CardContent className="p-0">
              <SubscriptionTriggersTable triggersList={subscriptionTriggers} token={token} />
              <PaginationButtons
                previousPageHandler={previousPageHandler}
                nextPageHandler={nextPageHandler}
                currentPage={currentPage}
                lastPage={numberOfPages} />
            </CardContent>
          </Card>
        )}
      </CardContent>
    </Card>
  )
}
