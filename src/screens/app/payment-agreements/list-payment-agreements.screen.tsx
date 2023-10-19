import { Link } from "react-router-dom";
import { RoutesConfig } from "@/navigation";

import { Card } from "@/components/ui/card.tsx";
import { Button } from "@/components/ui/button.tsx";
import {EmptyStateWithAction} from "@/components/shared/empty-states";

export function ListPaymentAgreementsScreen() {
  return (
    <div className={'container mx-auto sm:p-12 xl:p-16 space-y-12'}>
      <div className="flex justify-between pl-10 pr-10">
        <h1 className={'text-xl font-bold'}>Payment Agreements</h1>

        <Button asChild>
          <Link to={RoutesConfig.createPaymentAgreementIndex}>Create Agreement</Link>
        </Button>
      </div>

      <Card className={'p-12'}>
        <EmptyStateWithAction
          title={'No payment agreements created'}
          description={"Payment agreement that you create will appear here"}
          action={<></>}
        />
      </Card>

      <Card className={'p-12'}>
        <EmptyStateWithAction
          title={'No payment agreements signed'}
          description={"Payment agreement that you accept will appear here"}
          action={<></>}
        />
      </Card>
    </div>
  )
}