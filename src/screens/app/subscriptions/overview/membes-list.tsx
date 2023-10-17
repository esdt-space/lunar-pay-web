import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

type Props = {
  membersList: string[]
}

export const MembersList = ({ membersList }: Props) => {
  return <>
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Member</TableHead>
          <TableHead>Amount</TableHead>
          <TableHead />
          <TableHead />
        </TableRow>
      </TableHeader>
      <TableBody>
        {membersList.map((item: string, index: number) => {
          return <TableRow key={index}>
            <TableCell>{item}</TableCell>
            <TableCell>Subscriber Amount To Claim</TableCell>
            <TableCell>
              <Button>Claim</Button>
            </TableCell>
            <TableCell>
              <Button className="bg-red-500 hover:bg-red-500">Remove</Button>
            </TableCell>
          </TableRow>
        })}
      </TableBody>
    </Table>
  </>
}