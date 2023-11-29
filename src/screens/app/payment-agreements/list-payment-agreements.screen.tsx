import { Plus } from "lucide-react";
import { Link } from "react-router-dom";
import { RoutesConfig } from "@/navigation";

import { Card, CardContent } from "@/components/ui/card.tsx";
import { Button } from "@/components/ui/button.tsx";
import { EmptyStateWithAction } from "@/components/shared/empty-states";
import { ContainedScreen } from "@/components/prefab/contained-screen.tsx";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs.tsx";

import { PaymentAgreementListTable } from "@/features/payment-agreements/components";
import { usePaymentAgreementsCreatedQuery, usePaymentAgreementsSignedQuery } from "@/features/payment-agreements/hooks";
import { PaginationButtonsNew } from "@/components/shared/pagination";
import { useEffect, useState } from "react";

enum ScreenTabs {
  Created = 'agreements-created',
  Signed = 'agreements-signed',
}

export function ListPaymentAgreementsScreen() {
  const [currentPage, setCurrentPage] = useState(1);
  const { data: agreementsResponse, isFetched, refetch } = usePaymentAgreementsCreatedQuery(currentPage)
  const {
    data: signedAgreementsResponse,
    isFetched: isFetchedSignedAgreement,
    isFetching: isFetchingSignedAgreement,
  } = usePaymentAgreementsSignedQuery(currentPage)

  const agreements = agreementsResponse?.agreements ?? []
  const numberOfPages = agreementsResponse?.numberOfPages

  const signedAgreements = signedAgreementsResponse?.agreements ?? []
  const numberOfPagesSignedAgreements = signedAgreementsResponse?.numberOfPages

  useEffect(() => {
    setCurrentPage(1);
    refetch();
  }, [ScreenTabs])

  const nextPageHandler = () => setCurrentPage(page => page + 1);
  const previousPageHandler = () => setCurrentPage(page => Math.max(1, page - 1));

  const emptyAgreementsCreated = isFetched && agreements.length === 0;

  const emptyAgreementsSigned = isFetchedSignedAgreement && signedAgreements.length === 0;
  const isFetchingFirstTimeSignedAgreement = !isFetchedSignedAgreement && isFetchingSignedAgreement;

  return (
    <ContainedScreen className={'space-y-8'}>
      <h1 className={'text-xl font-bold'}>Payment Agreements</h1>

      <Tabs className={'space-y-4'} defaultValue={ScreenTabs.Created}>
        <div className={'flex justify-between max-sm:flex-col max-sm:space-y-2'}>
          <TabsList>
            <TabsTrigger value={ScreenTabs.Created}>Agreements Created</TabsTrigger>
            <TabsTrigger
              value={ScreenTabs.Signed}
              disabled={emptyAgreementsSigned || isFetchingFirstTimeSignedAgreement}
            >
              Agreements Signed
              {!emptyAgreementsSigned && !isFetchingFirstTimeSignedAgreement && ` (${signedAgreements.length})`}
            </TabsTrigger>
          </TabsList>

          <Button asChild>
            <Link to={RoutesConfig.createPaymentAgreementIndex}>
              Create Agreement
              <Plus className={'ml-2 w-4 h-4'}/>
            </Link>
          </Button>
        </div>

        <TabsContent className={'flex flex-1 flex-col gap-4 mt-0'} value={ScreenTabs.Created}>
          <Card>
            <CardContent className="p-0">
              {emptyAgreementsCreated && (
                <div className={'p-12'}>
                  <EmptyStateWithAction
                    title={'No payment agreements created'}
                    description={"Payment agreement that you create will appear here"}
                    action={<></>}
                  />
                </div>
              )}
              {!emptyAgreementsCreated && (
                <div>
                  <PaymentAgreementListTable agreementsList={agreements}/>
                  <PaginationButtonsNew 
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
              <PaymentAgreementListTable agreementsList={signedAgreements} signedList={true}/>
              <PaginationButtonsNew 
                previousPageHandler={previousPageHandler} 
                nextPageHandler={nextPageHandler}
                currentPage={currentPage}
                lastPage={numberOfPagesSignedAgreements} />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </ContainedScreen>
  )
}