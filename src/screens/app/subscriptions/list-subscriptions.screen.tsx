import { Plus } from "lucide-react";
import { Link } from "react-router-dom";
import { RoutesConfig } from "@/navigation";

import { Card, CardContent } from "@/components/ui/card.tsx";
import { Button } from "@/components/ui/button.tsx";
import { EmptyStateWithAction } from "@/components/shared/empty-states";
import { ContainedScreen } from "@/components/prefab/contained-screen.tsx";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs.tsx";

import { SubscriptionListTable } from "@/features/subscriptions/components";
import { useSubscriptionsCreatedQuery, useSubscriptionsSignedQuery } from "@/features/subscriptions/hooks";
import { PaginationButtons } from "@/components/shared/pagination";
import { useEffect, useState } from "react";

enum ScreenTabs {
  Created = 'subscriptions-created',
  Signed = 'subscriptions-signed',
}

export function ListSubscriptionsScreen() {
  const [currentPage, setCurrentPage] = useState(1);
  const { data: subscriptionsResponse, isFetched, refetch } = useSubscriptionsCreatedQuery(currentPage)
  const {
    data: signedSubscriptionsResponse,
    isFetched: isFetchedSignedSubscription,
    isFetching: isFetchingSignedSubscription,
  } = useSubscriptionsSignedQuery(currentPage)

  const subscriptions = subscriptionsResponse?.data ?? []
  const numberOfPages = subscriptionsResponse?.meta.totalPages

  const signedSubscriptions = signedSubscriptionsResponse?.data ?? []
  const numberOfPagesSignedSubscriptions = signedSubscriptionsResponse?.meta.totalPages

  useEffect(() => {
    setCurrentPage(1);
    refetch();
  }, [ScreenTabs])

  const nextPageHandler = () => setCurrentPage(page => page + 1);
  const previousPageHandler = () => setCurrentPage(page => Math.max(1, page - 1));

  const emptySubscriptionsCreated = isFetched && subscriptions.length === 0;

  const emptySubscriptionsSigned = isFetchedSignedSubscription && signedSubscriptions.length === 0;
  const isFetchingFirstTimeSignedSubscription = !isFetchedSignedSubscription && isFetchingSignedSubscription;

  return (
    <ContainedScreen className={'space-y-8'}>
      <h1 className={'text-xl font-bold'}>Subscriptions</h1>

      <Tabs className={'space-y-4'} defaultValue={ScreenTabs.Created}>
        <div className={'flex justify-between max-sm:flex-col max-sm:space-y-2'}>
          <TabsList>
            <TabsTrigger value={ScreenTabs.Created}>Subscriptions Created</TabsTrigger>
            <TabsTrigger
              value={ScreenTabs.Signed}
              disabled={emptySubscriptionsSigned || isFetchingFirstTimeSignedSubscription}
            >
              Subscriptions Signed
              {!emptySubscriptionsSigned && !isFetchingFirstTimeSignedSubscription && ` (${signedSubscriptions.length})`}
            </TabsTrigger>
          </TabsList>

          <Button asChild>
            <Link to={RoutesConfig.createSubscription}>
              Create Subscription
              <Plus className={'ml-2 w-4 h-4'}/>
            </Link>
          </Button>
        </div>

        <TabsContent className={'flex flex-1 flex-col gap-4 mt-0'} value={ScreenTabs.Created}>
          <Card>
            <CardContent className="p-0">
              {emptySubscriptionsCreated && (
                <div className={'p-12'}>
                  <EmptyStateWithAction
                    title={'No subscriptions created'}
                    description={"Payment subscription that you create will appear here"}
                    action={<></>}
                  />
                </div>
              )}
              {!emptySubscriptionsCreated && (
                <div>
                  <SubscriptionListTable subscriptionsList={subscriptions}/>
                  <PaginationButtons 
                    previousPageHandler={previousPageHandler} 
                    nextPageHandler={nextPageHandler}
                    currentPage={currentPage}
                    lastPage={numberOfPages} />
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent className={'flex flex-1 flex-col gap-4 mt-0'} value={ScreenTabs.Signed}>
          <Card>
            <CardContent className="p-0">
              <SubscriptionListTable subscriptionsList={signedSubscriptions} signedList={true}/>
              <PaginationButtons 
                previousPageHandler={previousPageHandler} 
                nextPageHandler={nextPageHandler}
                currentPage={currentPage}
                lastPage={numberOfPagesSignedSubscriptions} />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </ContainedScreen>
  )
}