import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { PaymentAgreement } from "../../models"
import moment from "moment";
import { AddressCell } from "@/features/token-operations/components/token-operations-table/address-cell";

type Props = {
  agreementsList: PaymentAgreement[] | undefined;
}

export const PaymentAgreementListTable = ({ agreementsList }: Props) => {
  return <div>
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Owner</TableHead>
          <TableHead>Frequency</TableHead>
          <TableHead>Token</TableHead>
          <TableHead>Date</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {agreementsList?.map((item, index) => {
          return <TableRow key={index}>
            <TableCell>{item.name}</TableCell>
            <AddressCell value={item.owner} />
            <TableCell>{item.frequency}</TableCell>
            <TableCell>{item.tokenIdentifier}</TableCell>
            <TableCell>{moment(item.createdAt).format('ll')}</TableCell>
          </TableRow>
        })}
      </TableBody>
    </Table>
  </div>
}
