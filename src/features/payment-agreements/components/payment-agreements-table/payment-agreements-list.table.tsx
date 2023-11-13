import moment from "moment";
import { FormatAmount } from "@multiversx/sdk-dapp/UI";

import { formatFrequency } from "@/utils";
import { useTokensMap } from "@/features/tokens";
import { PaymentAgreement } from "@/features/payment-agreements/models";
import { useCreatedPaymentAgreementMutation } from "../../hooks";

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Eye } from "lucide-react";

type Props = {
  agreementsList: PaymentAgreement[];
  signedList?: boolean
}

type AgreementRowProps = {
  agreement: PaymentAgreement;
  signedList?: boolean
}

function AgreementRow(props: AgreementRowProps) {
  const { agreement, signedList } = props;

  const { mutate: refetchAgreement } = useCreatedPaymentAgreementMutation(agreement._id as string, signedList)

  const tokensMap = useTokensMap();
  const token = tokensMap[agreement.tokenIdentifier];

  return (
    <TableRow
      className="cursor-pointer"
      onClick={() => refetchAgreement()}
    >
      <TableCell className="flex">
        <Eye className={'w-4 h-4 mr-2'} />
        {agreement.itemName ? agreement.itemName : 
          <Badge
            variant={'outline'}
            className={'text-yellow-500 border-yellow-500'}
          >
            Missing Data
          </Badge>}
      </TableCell>
      <TableCell>
        <FormatAmount value={agreement.fixedAmount as string} decimals={token.decimals} />
      </TableCell>
      <TableCell>{formatFrequency(agreement.frequency)}</TableCell>
      {!signedList && <TableCell>{agreement.accountsCount}</TableCell>}
      <TableCell className="max-sm:hidden">{moment(agreement.createdAt).format('ll')}</TableCell>
    </TableRow>
  )
}

export const PaymentAgreementListTable = ({ agreementsList, signedList }: Props) => { 
  return <div>
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Value</TableHead>
          <TableHead>Frequency</TableHead>
          {!signedList && <TableHead>Subscribers</TableHead>}
          <TableHead className="max-sm:hidden">Date</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {agreementsList.map((item) => <AgreementRow key={item._id} agreement={item} signedList={signedList}/>)}
      </TableBody>
    </Table>
  </div>
}
