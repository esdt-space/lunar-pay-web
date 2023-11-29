import { Link2, Pencil } from "lucide-react";
import { useGetAccount } from "@multiversx/sdk-dapp/hooks";
import { Link, useNavigate, useParams } from "react-router-dom"

import { RoutesConfig } from "@/navigation"
import { useCreatedPaymentAgreement } from "@/features/payment-agreements/hooks";
import { usePaymentAgreementMembers } from "@/features/payment-agreements/hooks";
import { useAgreementTriggersQuery } from "@/features/agreement-triggers/hooks";

import { Card, CardContent } from "@/components/ui/card.tsx"
import { Button } from "@/components/ui/button.tsx"
import { ContainedScreen } from "@/components/prefab/contained-screen.tsx"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs.tsx"

import { AgreementDetails } from "./partials/agreement-details.tsx";
import { MembersListPartial } from "./partials/members-list-partial.tsx";
import { AgreementTriggersTable } from "@/features/agreement-triggers/components";
import { useTokensMap } from "@/core/tokens";
import { PaginationButtons, usePagination } from "@/components/shared/pagination";
import { EmptyStateWithAction } from "@/components/shared/empty-states/index.ts";

export const ViewPaymentAgreementScreen = () => {
  const { address } = useGetAccount()
  const { id } = useParams()
  const navigate = useNavigate()

  const { data: agreement } = useCreatedPaymentAgreement(id);
  const {
     data: members = [], 
     isFetched: isFetchedMembersList  
    } = usePaymentAgreementMembers(id);

  const { 
    data: agreementTriggers = [],
    isFetched: isFetchedAgreementsTriggers
   } = useAgreementTriggersQuery(id);

  const { data: paginatedTriggers, ...rest} =
    usePagination(agreementTriggers, 5);

  const tokensMap = useTokensMap();

  if(!agreement) return;

  const token = tokensMap[agreement.tokenIdentifier];

  if(agreement && agreement.owner !== address) {
    navigate(RoutesConfig.dashboard, { replace: true });
  }

  const emptyMembersList = isFetchedMembersList && members.length === 0;

  const emptyAgreementTriggers = isFetchedAgreementsTriggers && agreementTriggers.length === 0;


  return (
    <ContainedScreen className="space-y-6">
      <div className={'flex justify-between items-top'}>
        <h2 className={'text-lg font-medium'}>
          {agreement.itemName ?? 'Unnamed agreement'}
        </h2>

        <div className={'flex gap-2'}>
          <Button asChild variant={'ghost'} size={'sm'} className={'ml-2'}>
            <Link to={`${RoutesConfig.agreement}/${agreement._id}`}>
              Preview
              <Link2 className={'ml-2 w-4 h-4'} />
            </Link>
          </Button>

          <Button asChild size={'sm'} className="w-[100px]">
            <Link to={`${RoutesConfig.paymentAgreements}/${id}/edit`}>
              Edit
              <Pencil className={'ml-2 w-3 h-3'}/>
            </Link>
          </Button>
        </div>
      </div>

      <Tabs defaultValue="overview">
        <TabsList className={'self-start mb-2'}>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger disabled value="analytics">Analytics</TabsTrigger>
          <TabsTrigger disabled value="settings">Settings</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className={'space-y-4'}>
          <Card className={'p-6'}>
            <AgreementDetails agreement={agreement}/>
          </Card>
              {emptyMembersList && (
                <Card> 
                  <div className={'p-12'}>
                    <EmptyStateWithAction
                      title={'No current members'}
                      description={"Members will appear here"}
                      action={<></>}
                    />
                  </div>
                </Card> 
              )}
              {!emptyMembersList && (
                <div>
                  <MembersListPartial members={members}/>
                </div>
              )}
          <Card>
            <CardContent className="p-0">
              {emptyAgreementTriggers && (
                <div className={'p-12'}>
                  <EmptyStateWithAction
                    title={'No current agreement triggers'}
                    description={"Agreement triggers will appear here"}
                    action={<></>}
                  />
                </div>
              )}
              {!emptyAgreementTriggers && (
                <div>
                  <AgreementTriggersTable triggersList={paginatedTriggers} token={token} />
                  <PaginationButtons {...{...rest}} />
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </ContainedScreen>
  )
}