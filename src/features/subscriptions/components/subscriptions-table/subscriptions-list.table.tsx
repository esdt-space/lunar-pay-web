import moment from "moment";
import { FormatAmount } from "@multiversx/sdk-dapp/UI";

import { formatFrequency } from "@/utils";
import { useTokensMap } from "@/core/tokens";
import { Subscription } from "@/features/subscriptions/models";

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Eye } from "lucide-react";
import { RoutesConfig } from "@/navigation";
import { useNavigate } from "react-router-dom";

type Props = {
  subscriptionsList: Subscription[];
  signedList?: boolean
}

type SubscriptionRowProps = {
  subscription: Subscription;
  signedList?: boolean
}

function SubscriptionRow(props: SubscriptionRowProps) {
  const { subscription, signedList } = props;
  const navigate = useNavigate()

  const navigateToSubscription = () => {
    const signed = signedList ? "/signed" : ""

    return navigate(`${RoutesConfig.paymentAgreements}/${subscription._id}${signed}`)
  }

  const tokensMap = useTokensMap();
  const token = tokensMap[subscription.tokenIdentifier];

  return (
    <TableRow
      className="cursor-pointer"
      onClick={navigateToSubscription}
    >
      <TableCell className="flex items-center">
        <Eye className={'w-4 h-4 mr-2'} />
        {subscription.itemName ? subscription.itemName : 
          <Badge
            variant={'outline'}
            className={'text-yellow-500 border-yellow-500'}
          >
            Missing Data
          </Badge>}
      </TableCell>
      <TableCell>
        <FormatAmount value={subscription.fixedAmount as string} decimals={token.decimals} />
      </TableCell>
      <TableCell>{formatFrequency(subscription.frequency)}</TableCell>
      {!signedList && <TableCell>{subscription.accountsCount}</TableCell>}
      <TableCell className="max-sm:hidden">{moment(subscription.createdAt).format('ll')}</TableCell>
    </TableRow>
  )
}

export const PaymentAgreementListTable = ({ subscriptionsList, signedList }: Props) => { 
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
        {subscriptionsList.map((item) => <SubscriptionRow key={item._id} subscription={item} signedList={signedList}/>)}
      </TableBody>
    </Table>
  </div>
}
