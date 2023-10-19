import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { PaymentAgreement } from "../../models"
import moment from "moment";
import { AddressCell } from "@/features/token-operations/components/token-operations-table/address-cell";
import { useNavigate } from "react-router-dom";
import { RoutesConfig } from "@/navigation";

type Props = {
  agreementsList: PaymentAgreement[] | undefined;
}

export const PaymentAgreementListTable = ({ agreementsList }: Props) => {
  const navigate = useNavigate()

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
          const selectedAgreement = item

          return <TableRow 
              key={index} 
              onClick={() => navigate(`${RoutesConfig.paymentAgreements}/${item.id}`, { state: { selectedAgreement }})}
            >
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
