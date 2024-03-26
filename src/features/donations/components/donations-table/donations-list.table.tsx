import moment from "moment";
import { FormatAmount } from "@multiversx/sdk-dapp/UI";
import { Eye } from "lucide-react";
import { useNavigate } from "react-router-dom";

import { useTokensMap } from "@/core/tokens";
import { RoutesConfig } from "@/navigation";

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Donation } from "../../models";

type Props = {
  donationsList: Donation[] | undefined;
  signedList?: boolean
}

type DonationRowProps = {
  donation: Donation;
}

function DonationRow(props: DonationRowProps) {
  const { donation } = props;
  const navigate = useNavigate()

  const navigateToDonation = () => {
    return navigate(`${RoutesConfig.donations}/${donation.id}`)
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
        <FormatAmount value={donation.totalAmount as string} decimals={token.decimals} />
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
          <TableHead>Total Amount</TableHead>
          <TableHead>Type</TableHead>
          <TableHead>Target</TableHead>
          <TableHead className="max-sm:hidden">Date</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {donationsList && donationsList.map((item) => <DonationRow key={item.id} donation={item} />)}
      </TableBody>
    </Table>
  </div>
}
