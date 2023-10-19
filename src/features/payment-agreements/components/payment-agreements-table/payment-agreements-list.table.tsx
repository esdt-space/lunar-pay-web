import moment from "moment";
import { useNavigate } from "react-router-dom";
import { FormatAmount } from "@multiversx/sdk-dapp/UI";

import { formatFrequency } from "@/utils";
import { RoutesConfig } from "@/navigation";
import { useTokensMap } from "@/features/tokens";
import { PaymentAgreement } from "@/features/payment-agreements/models";

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

type Props = {
  agreementsList: PaymentAgreement[];
}

type AgreementRowProps = {
  agreement: PaymentAgreement;
}

function AgreementRow(props: AgreementRowProps) {
  const { agreement } = props;
  const navigate = useNavigate()

  const tokensMap = useTokensMap();
  const token = tokensMap[agreement.tokenIdentifier];

  return (
    <TableRow
      onClick={() => navigate(`${RoutesConfig.paymentAgreements}/${agreement.id}`)}
    >
      <TableCell>{agreement.name}</TableCell>
      <TableCell>
        <FormatAmount value={agreement.fixedAmount} decimals={token.decimals} />
      </TableCell>
      <TableCell>{formatFrequency(agreement.frequency)}</TableCell>
      <TableCell>{agreement.accountsCount}</TableCell>
      <TableCell>{moment(agreement.createdAt).format('ll')}</TableCell>
    </TableRow>
  )
}

export const PaymentAgreementListTable = ({ agreementsList }: Props) => {
  return <div>
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Value</TableHead>
          <TableHead>Frequency</TableHead>
          <TableHead>Subscribers</TableHead>
          <TableHead>Date</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {agreementsList.map((item) => <AgreementRow key={item.id} agreement={item} />)}
      </TableBody>
    </Table>
  </div>
}
