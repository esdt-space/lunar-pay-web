import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { PaymentAgreement } from "../../models"
import moment from "moment";
import { useNavigate } from "react-router-dom";
import { RoutesConfig } from "@/navigation";
import { formatFrequency } from "@/utils";

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
          <TableHead>Frequency</TableHead>
          <TableHead>Token</TableHead>
          <TableHead>Accounts Count</TableHead>
          <TableHead>Date</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {agreementsList?.map((item, index) => {
          return <TableRow 
              key={index} 
              onClick={() => navigate(`${RoutesConfig.paymentAgreements}/${item.id}`)}
            >
            <TableCell>{item.name}</TableCell>
            <TableCell>{formatFrequency(item.frequency)}</TableCell>
            <TableCell>{item.tokenIdentifier}</TableCell>
            <TableCell>{item.accountsCount}</TableCell>
            <TableCell>{moment(item.createdAt).format('ll')}</TableCell>
          </TableRow>
        })}
      </TableBody>
    </Table>
  </div>
}
