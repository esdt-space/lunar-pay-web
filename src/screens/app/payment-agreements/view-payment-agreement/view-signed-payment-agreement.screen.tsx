import { Link2 } from "lucide-react";
import { Link, useParams } from "react-router-dom"

import { RoutesConfig } from "@/navigation"
import { useCreatedPaymentAgreement } from "@/features/payment-agreements/hooks";

import { Card } from "@/components/ui/card.tsx"
import { Button } from "@/components/ui/button.tsx"

import { AgreementDetails } from "./partials/agreement-details.tsx";

export const ViewSignedPaymentAgreementScreen = () => {
  const { id } = useParams()

  const { data: agreement } = useCreatedPaymentAgreement(id);

  if(!agreement) return;

  return (
    <div className="container mx-auto p-4 sm:p-12 xl:p-16 space-y-6">
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
        </div>
      </div>

      <Card className={'p-6'}>
        <AgreementDetails agreement={agreement} signedList={true}/>
      </Card>
    </div>
  )
}