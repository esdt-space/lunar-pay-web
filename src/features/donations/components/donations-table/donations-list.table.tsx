import moment from "moment";
import { FormatAmount } from "@multiversx/sdk-dapp/UI";

import { useTokensMap } from "@/core/tokens";
import { PaymentAgreement } from "@/features/payment-agreements/models";

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Eye } from "lucide-react";
import { RoutesConfig } from "@/navigation";
import { useNavigate } from "react-router-dom";

type Props = {
  donationsList: any[] | undefined;
  signedList?: boolean
}

type DonationRowProps = {
  donation: any;
}

function DonationRow(props: DonationRowProps) {
  const { donation } = props;
  const navigate = useNavigate()

  const navigateToDonation = () => {
    return navigate(`${RoutesConfig.donations}/${donation._id}`)
  }

  const tokensMap = useTokensMap();
  const token = tokensMap[donation.tokenIdentifier];

  return (
    <TableRow
      className="cursor-pointer"
      onClick={navigateToDonation}
    >
      <TableCell className="flex items-center">
        <Eye className={'w-4 h-4 mr-2'} />
        {donation.beneficiaryName ? donation.beneficiaryName : 
          <Badge
            variant={'outline'}
            className={'text-yellow-500 border-yellow-500'}
          >
            Missing Data
          </Badge>}
      </TableCell>
      <TableCell>
        <FormatAmount value={donation.fixedAmount as string} decimals={token.decimals} />
      </TableCell>
      <TableCell>
        {donation.donationType}
      </TableCell>
      <TableCell>
        {donation.donationTarget}
      </TableCell>
      <TableCell className="max-sm:hidden">{moment(donation.createdAt).format('ll')}</TableCell>
    </TableRow>
  )
}

export const DonationsListTable = ({ donationsList }: Props) => { 
  return <div>
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Value</TableHead>
          <TableHead>Type</TableHead>
          <TableHead>Target</TableHead>
          <TableHead className="max-sm:hidden">Date</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {donationsList && donationsList.map((item) => <DonationRow key={item._id} donation={item} />)}
      </TableBody>
    </Table>
  </div>
}
