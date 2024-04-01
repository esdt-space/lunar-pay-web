import moment from "moment";
import { useState } from "react";
import { UserX } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card.tsx";
import { PaginationButtons } from "@/components/shared/pagination";
import { EmptyStateWithAction } from "@/components/shared/empty-states";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table.tsx";

import { AddressCell } from "@/features/token-operations/components/token-operations-table/address-cell.tsx";
import { useCancelSubscriptionMutation, useSubscriptionMembers } from "@/features/subscriptions/hooks";

type Props = {
  subscriptionId: string;
  subscriptionIdentifier: number;
}

export function MembersListPartial({ subscriptionId,subscriptionIdentifier }: Props) {
  const [currentPage, setCurrentPage] = useState(1);
  
  const {
    data: members,
    isFetched: isFetchedMembersList
  } = useSubscriptionMembers(currentPage, subscriptionId);

  const { mutate: cancelSubscription} = useCancelSubscriptionMutation();
  
  const memberships = members?.data ?? []
  const numberOfPages = members?.meta.totalPages

  const nextPageHandler = () => setCurrentPage(page => page + 1);
  const previousPageHandler = () => setCurrentPage(page => Math.max(1, page - 1));

  const emptyMembersList = isFetchedMembersList && memberships.length === 0;


  const cancelSubscriptionButtonHandler = (input: string) => {
    const id = subscriptionIdentifier
    const address = input

    cancelSubscription({id, address})
  }

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
                <TableCell>
                  <UserX 
                    onClick={() => cancelSubscriptionButtonHandler(item.member)} 
                    className={'ml-4 -mr-6 h-5 w-5 cursor-pointer'} 
                  />
                </TableCell>
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