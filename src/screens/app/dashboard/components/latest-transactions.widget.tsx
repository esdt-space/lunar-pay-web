import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export const DashboardLatestTransactionsWidget = () => {
    return <Card className={'flex flex-col flex-1 p-8 gap-4 shadow'}>
        <h2 className={'text-sm font-semibold uppercase tracking-wide'}>Latest Transactions</h2>
        <div className={'flex flex-col gap-3'}>
        <div  className={'flex justify-between items-center'}>
          <div>
            Transaction
          </div>
          <div className={'self-end space-x-2'}>
            <Button size={'sm'} variant={'outline'}>
              Click
            </Button>
          </div>
        </div>
        <div  className={'flex justify-between items-center'}>
          <div>
            Transaction
          </div>
          <div className={'self-end space-x-2'}>
            <Button size={'sm'} variant={'outline'}>
              Click
            </Button>
          </div>
        </div>
        <div  className={'flex justify-between items-center'}>
          <div>
            Transaction
          </div>
          <div className={'self-end space-x-2'}>
            <Button size={'sm'} variant={'outline'}>
              Click
            </Button>
          </div>
        </div>
    </div>
  </Card>
}