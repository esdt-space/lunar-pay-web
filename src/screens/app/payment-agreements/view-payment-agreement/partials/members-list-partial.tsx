import moment from "moment";

import { Card, CardContent } from "@/components/ui/card.tsx";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table.tsx";
import { AddressCell } from "@/features/token-operations/components/token-operations-table/address-cell.tsx";
import { PaginationButtonsNew } from "@/components/shared/pagination";
import { usePaymentAgreementsMembersQuery } from "@/features/payment-agreements/hooks/queries/use-payment-agreements-members-query";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function MembersListPartial() {
  const { id } = useParams()
  const [currentPage, setCurrentPage] = useState(1);
  
  const { data: members, refetch } = usePaymentAgreementsMembersQuery(currentPage, id);

  const memberships = members?.memberships ?? []
  const numberOfPages = members?.numberOfPages

  useEffect(() => {
    setCurrentPage(1);
    refetch();
  }, [])

  const nextPageHandler = () => setCurrentPage(page => page + 1);
  const previousPageHandler = () => setCurrentPage(page => Math.max(1, page - 1));

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
        <PaginationButtonsNew 
          previousPageHandler={previousPageHandler} 
          nextPageHandler={nextPageHandler}
          currentPage={currentPage}
          lastPage={numberOfPages} />
      </CardContent>
    </Card>
  )
}