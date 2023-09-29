import { ArrowRight, File } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export type LatestTransaction = {
  transactionHash: string
  transactionFee: string
  method: string
  from: string
  to: string
  value: string
  age: string
}

type BasicDetailsTransaction = Pick<LatestTransaction, 'from' | 'to' | 'value' | 'age'>

const transactionsMockData: BasicDetailsTransaction[] = [
  {
    value: "100",
    age: "30 seconds ago",
    from: "address",
    to: "address",
  },
  {
    value: "123",
    age: "1 minute ago",
    from: "address",
    to: "address",
  },
  {
    value: "111",
    age: "2 minutes ago",
    from: "address",
    to: "address",
  },
]

export const DashboardLatestTransactionsWidget = () => {
  return (
    <Card className={'flex-1 shadow p-2'}>
      <CardHeader>
        <CardTitle className={'text-sm font-semibold uppercase tracking-wide'}>
          Latest Transactions
        </CardTitle>
      </CardHeader>

      <CardContent>
        {transactionsMockData.map((transaction, index) => (
          <div key={index} className={"flex flex-1 justify-between border-b border-gray-200"}>
            <div
              className="flex-1 mt-4 grid grid-cols-[25px_1fr] items-start pb-2"
            >
              <File className="mr-2 h-4 w-4" />
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">
                  {transaction.value}
                </p>
                <p className="text-sm text-muted-foreground">
                  {transaction.age}
                </p>
              </div>
            </div>
            <div
              className="flex-1 mt-4 pb-2 self-center"
            >
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">
                  From: {transaction.from}
                </p>
              </div>
            </div>
            <div
              className="flex-1 mt-4 pb-2 self-center"
            >
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">
                  To: {transaction.to}
                </p>
              </div>
            </div>
          </div>
        ))}
      </CardContent>
      <CardFooter>
        <Button className="w-full">
          View All Transactions
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  )
}