import { Copy } from "lucide-react";

import { formatAddress } from "@/utils/address";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useToast } from "@/components/ui/use-toast";
import { Props, UserAction, UserRowProps } from "./types";

function UserRow(props: UserRowProps) {
  const { user } = props;

  const { toast } = useToast()

  const copyButtonHandler = () => {
    return navigator.clipboard.writeText(user.userId).then(() => {
      toast({
        description: 'Address copied to clipboard'
      })
    })
  };

  if (user.userId === null) return;

  return (
    <TableRow
      className="cursor-pointer"
    >
      <TableCell className="flex items-center">
        <span className={'ring-1 bg-slate-50 ring-slate-200 px-2 py-1 rounded-sm whitespace-nowrap'}>
          {formatAddress(user.userId)}
        </span>
        <span
          onClick={copyButtonHandler}
          className={'ml-1 ring-1 bg-slate-50 ring-slate-200 px-1 py-1 rounded-sm hover:shadow'}
        >
          <Copy className={'w-4 h-4'} />
        </span>
      </TableCell>
      <TableCell>
        {getCount(user.actions, 'donation-created')}
      </TableCell>
      <TableCell>
        {getCount(user.actions, 'agreement-created')}
      </TableCell>
      <TableCell>
        {getCount(user.actions, 'payment-agreement-charge')}
      </TableCell>
      <TableCell>
        {getCount(user.actions, 'transfer')}
      </TableCell>
      <TableCell>
        {getCount(user.actions, 'deposit')}
      </TableCell>
      <TableCell>
        {getCount(user.actions, 'withdraw')}
      </TableCell>
      <TableCell>
        {getCount(user.actions, 'donation')}
      </TableCell>
      <TableCell>
        {getCount(user.actions, 'payment')}
      </TableCell>
      <TableCell>
        {user.allActions}
      </TableCell>
    </TableRow>
  )
}

export const UsersActionsTable = ({ actionsList }: Props) => { 
  return <div>
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Users</TableHead>
          <TableHead>Donations Created</TableHead>
          <TableHead>Agreements Created</TableHead>
          <TableHead>Charges</TableHead>
          <TableHead>Transfers</TableHead>
          <TableHead>Deposits</TableHead>
          <TableHead>Withdrawals</TableHead>
          <TableHead>Donations</TableHead>
          <TableHead>Payments</TableHead>
          <TableHead>All Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className='p-0'>
        {actionsList && actionsList.map((item) => item.userId !== undefined && <UserRow key={item.userId} user={item} />)}
      </TableBody>
    </Table>
  </div>
}

const getCount = (actions: UserAction[], actionType: string) => {
  const action = actions.find((a: UserAction) => a.type === actionType)

  return action ? action.count : 0;
}
