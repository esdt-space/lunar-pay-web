import { Card, CardContent } from "@/components/ui/card.tsx";
import { PaymentAgreementMembersTable } from "@/features/payment-agreements/components/payment-agreements-table";

type Props = {
  members: unknown[];
}

export function MembersListPartial(props: Props) {
  return (
    <Card>
      <CardContent className="p-0">
        <PaymentAgreementMembersTable membersList={props.members} />
      </CardContent>
    </Card>
  )
}