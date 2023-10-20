import moment from "moment";

import { Card, CardContent } from "@/components/ui/card.tsx";
import { AgreementMember } from "@/features/payment-agreements/models";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table.tsx";
import { AddressCell } from "@/features/token-operations/components/token-operations-table/address-cell.tsx";
import { PaginationButtons, usePagination } from "@/components/shared/pagination";

type Props = {
  members: AgreementMember[];
}

export function MembersListPartial(props: Props) {
  const { members } = props;

  const { data: paginatedMembers, ...rest} =
    usePagination(members, 5);

  return (
    <Card>
      <CardContent className="p-0">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Member</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Added</TableHead>
              <TableHead>Last Charge</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {paginatedMembers.map((item, index: number) => (
              <TableRow key={index}>
                <AddressCell value={item.member} />
                <TableCell>{item.status}</TableCell>
                <TableCell>{moment(item.createdAt).format('ll')}</TableCell>
                <TableCell>{moment(item.lastChargedAt).format('ll')}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <PaginationButtons {...{...rest}} />
      </CardContent>
    </Card>
  )
}