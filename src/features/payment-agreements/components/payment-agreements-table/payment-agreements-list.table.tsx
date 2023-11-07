import moment from "moment";
import { useNavigate } from "react-router-dom";
import { FormatAmount } from "@multiversx/sdk-dapp/UI";

import { formatFrequency } from "@/utils";
import { RoutesConfig } from "@/navigation";
import { useTokensMap } from "@/features/tokens";
import { PaymentAgreement } from "@/features/payment-agreements/models";

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

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
  console.log(token)

  return (
    <TableRow
      onClick={() => navigate(`${RoutesConfig.paymentAgreements}/${agreement.id}`)}
    >
      <TableCell>
        {agreement.itemName !== "" ? agreement.itemName : 
          <Badge
            variant={'outline'}
            className={'text-yellow-500 border-yellow-500'}
          >
            Missing Data !!!
          </Badge>}
      </TableCell>
      <TableCell>
        <FormatAmount value={agreement.fixedAmount as string} />
      </TableCell>
      <TableCell>{formatFrequency(agreement.frequency)}</TableCell>
      <TableCell>{agreement.accountsCount}</TableCell>
      <TableCell className="max-sm:hidden">{moment(agreement.createdAt).format('ll')}</TableCell>
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
          <TableHead className="max-sm:hidden">Date</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {agreementsList.map((item) => <AgreementRow key={item.id} agreement={item} />)}
      </TableBody>
    </Table>
  </div>
}
