import { useState } from "react"

import { useTokensMap } from "@/core/tokens"
import { useAgreementTriggers } from "@/features/agreement-triggers/hooks"
import { useCreatedPaymentAgreement } from "@/features/payment-agreements/hooks"
import { AgreementTriggersTable } from "@/features/agreement-triggers/components"

import { Card, CardContent } from "@/components/ui/card.tsx"
import { PaginationButtons } from "@/components/shared/pagination"
import { EmptyStateWithAction } from "@/components/shared/empty-states"

type Props = {
  agreementId: string;
}

export function AgreementTriggersPartial({ agreementId }: Props) {
  const tokensMap = useTokensMap();
  const [currentPage, setCurrentPage] = useState(1);

  const {data: agreement} = useCreatedPaymentAgreement(agreementId);
  const {
    data: triggers,
    isFetched: isFetchedAgreementsTriggers,
  } = useAgreementTriggers(currentPage, agreementId);

  if (!agreement) return null;

  const nextPageHandler = () => setCurrentPage(page => page + 1);
  const previousPageHandler = () => setCurrentPage(page => Math.max(1, page - 1));

  const token = tokensMap[agreement?.tokenIdentifier];
  const numberOfPages = triggers?.numberOfPages
  const agreementTriggers = triggers?.agreementTriggers ?? []
  const emptyAgreementTriggers = isFetchedAgreementsTriggers && agreementTriggers.length === 0;

  return (
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
          <Card>
            <CardContent className="p-0">
              <AgreementTriggersTable triggersList={agreementTriggers} token={token} />
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
