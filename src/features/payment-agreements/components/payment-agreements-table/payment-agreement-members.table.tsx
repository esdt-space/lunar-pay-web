import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { formatAddress } from "@/utils/address";
import { Copy } from "lucide-react";
import moment from "moment";

export type Member = {
  address: string;
  lastCharged: string;
  isPastDue: boolean;
  subDate: string;
}

type Props = {
  membersList: Member[];
}

export const PaymentAgreementMembersTable = ({membersList}: Props) => {

  const AddressCopyIcon = ({input}: {input: string}) => {
    return <span
      onClick={() => navigator.clipboard.writeText(input)}
      className={'ml-1 ring-1 bg-slate-50 ring-slate-200 px-1 py-1 rounded-sm hover:shadow'}
    >
      <Copy className={'w-4 h-4'} />
    </span>
  }

  return <div>
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Address</TableHead>
          <TableHead>Last Charged</TableHead>
          <TableHead>Is Past Due</TableHead>
          <TableHead>Date</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {membersList?.map((item, index) => {
          return <TableRow key={index}>
            <TableCell className="flex">{formatAddress(item.address)} <AddressCopyIcon input={item.address} /></TableCell>
            <TableCell>{moment(item.lastCharged).format('ll')}</TableCell>
            <TableCell>{item.isPastDue === true ? "True" : "False"}</TableCell>
            <TableCell>{moment(item.subDate).format('ll')}</TableCell>
          </TableRow>
        })}
      </TableBody>
    </Table>
  </div>
}
