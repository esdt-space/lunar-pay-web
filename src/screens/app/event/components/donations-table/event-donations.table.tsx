import { Copy } from "lucide-react";
import { FormatAmount } from "@multiversx/sdk-dapp/UI";

import { formatAddress } from "@/utils/address";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useToast } from "@/components/ui/use-toast";
import { Props, UserRowProps } from "./types";
import { useTokensMap } from "@/core/tokens";

function UserRow(props: UserRowProps) {
  const { user } = props;

  const { toast } = useToast()
  const tokensMap = useTokensMap();
  const token = tokensMap[user.tokenIdentifier];

  const copyButtonHandler = () => {
    return navigator.clipboard.writeText(user.owner).then(() => {
      toast({
        description: 'Address copied to clipboard'
      })
    })
  };

  return (
    <TableRow
      className="cursor-pointer"
    >
      <TableCell className="flex items-center">
        <span className={'ring-1 bg-slate-50 ring-slate-200 px-2 py-1 rounded-sm whitespace-nowrap'}>
          {formatAddress(user.owner)}
        </span>
        <span
          onClick={copyButtonHandler}
          className={'ml-1 ring-1 bg-slate-50 ring-slate-200 px-1 py-1 rounded-sm hover:shadow'}
        >
          <Copy className={'w-4 h-4'} />
        </span>
      </TableCell>
      <TableCell>
        <FormatAmount value={user.amount as string} decimals={token.decimals} />
      </TableCell>
    </TableRow>
  )
}

export const UsersDonationsRankedTable = ({ usersDonationsList }: Props) => { 
  return <div>
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Users</TableHead>
          <TableHead>Total Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className='p-0'>
        {usersDonationsList && usersDonationsList.map((item) => <UserRow key={item._id} user={item} />)}
      </TableBody>
    </Table>
  </div>
}
