import moment from "moment";
import { useState } from "react";

import { Card, CardContent } from "@/components/ui/card.tsx";
import { PaginationButtons } from "@/components/shared/pagination";
import { EmptyStateWithAction } from "@/components/shared/empty-states";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table.tsx";

import { AddressCell } from "@/features/token-operations/components/token-operations-table/address-cell.tsx";
import { usePaymentAgreementMembers } from "@/features/payment-agreements/hooks";

type Props = {
  agreementId: string;
}

export function MembersListPartial({ agreementId }: Props) {
  const [currentPage, setCurrentPage] = useState(1);
  
  const {
    data: members,
    isFetched: isFetchedMembersList
  } = usePaymentAgreementMembers(currentPage, agreementId);

  const numberOfPages = members?.numberOfPages
  const memberships = members?.memberships ?? []

  const nextPageHandler = () => setCurrentPage(page => page + 1);
  const previousPageHandler = () => setCurrentPage(page => Math.max(1, page - 1));

  const emptyMembersList = isFetchedMembersList && memberships.length === 0;

  if (emptyMembersList) {
    return (
      <Card>
        <div className={'p-12'}>
          <EmptyStateWithAction
            title={'No current members'}
            description={"Members will appear here"}
            action={<></>}
          />
        </div>
      </Card>
    )
  }

  return (
    <Card>
      <CardContent className="p-0">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead />
              <TableHead>Member</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Added</TableHead>
              <TableHead>Last Charge</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {memberships.map((item, index: number) => (
              <TableRow key={index}>
                <TableCell />
                <AddressCell value={item.member} />
                <TableCell>{item.status}</TableCell>
                <TableCell>{moment(item.createdAt).format('ll')}</TableCell>
                <TableCell>{moment(item.lastSuccessfulCharge).format('ll')}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <PaginationButtons 
          previousPageHandler={previousPageHandler} 
          nextPageHandler={nextPageHandler}
          currentPage={currentPage}
          lastPage={numberOfPages} />
      </CardContent>
    </Card>
  )
}