import { Link2, Pencil } from "lucide-react"
import { useGetAccount } from "@multiversx/sdk-dapp/hooks"
import { Link, useNavigate, useParams } from "react-router-dom"

import { RoutesConfig } from "@/navigation"
import { useCreatedPaymentAgreement } from "@/features/payment-agreements/hooks"

import { Card } from "@/components/ui/card.tsx"
import { Button } from "@/components/ui/button.tsx"
import { ContainedScreen } from "@/components/prefab/contained-screen.tsx"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs.tsx"

import { AgreementDetails } from "./partials/agreement-details.tsx"
import { MembersListPartial } from "./partials/members-list-partial.tsx"
import { AgreementTriggersPartial } from "./partials/agreement-triggers-partial.tsx"
import {
  RedirectAndWebhooksSettings
} from "@/screens/app/payment-agreements/view-payment-agreement/redirect-and-webhooks-settings/redirect-and-webhooks-settings.tsx";

export const ViewPaymentAgreementScreen = () => {
  const { address } = useGetAccount()
  const { id } = useParams()
  const navigate = useNavigate()

  const { data: agreement } = useCreatedPaymentAgreement(id);

  if(!agreement) return;

  if(agreement && agreement.owner !== address) {
    navigate(RoutesConfig.dashboard, { replace: true });
  }

  return (
    <ContainedScreen className="space-y-6">
      <div className={'flex justify-between items-top'}>
        <h2 className={'text-lg font-medium'}>
          {agreement.itemName ?? 'Unnamed agreement'}
        </h2>

        <div className={'flex gap-2'}>
          <Button asChild variant={'ghost'} size={'sm'} className={'ml-2'}>
            <Link to={`${RoutesConfig.paymentAgreements}/${agreement.id}`}>
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
          <TabsTrigger value="members">Members</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className={'space-y-4'}>
          <Card className={'p-6'}>
            <AgreementDetails agreement={agreement}/>
          </Card>

          <AgreementTriggersPartial agreementId={agreement.id} />
        </TabsContent>

        <TabsContent value="members" className={'space-y-4'}>
          <MembersListPartial agreementId={agreement.id} />
        </TabsContent>

        <TabsContent value="settings" className={'space-y-4'}>
          <RedirectAndWebhooksSettings agreement={agreement} />
        </TabsContent>
      </Tabs>
    </ContainedScreen>
  )
}