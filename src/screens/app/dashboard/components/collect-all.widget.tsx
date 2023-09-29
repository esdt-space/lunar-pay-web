import { Wallet } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const DashboardCollectAllWidget = () => {
  return (
    <Card className={'flex-1 shadow p-2'}>
      <CardHeader>
        <CardTitle className={'text-sm font-semibold uppercase tracking-wide'}>
          Pending Amount
        </CardTitle>
      </CardHeader>

      <CardContent className={'space-y-4'}>
        <div className={'text-2xl font-black'}>$1111.00</div>
        <div className={'w-full'}>
          <Button size={'sm'} variant={'outline'} className={'justify-self-end'}>
            Collect All
            <Wallet className={'ml-2 w-3 h-3'}/>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}