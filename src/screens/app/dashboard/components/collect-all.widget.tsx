import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Wallet } from "lucide-react"

export const DashboarCollectAllWidget = () => {
    return <Card className={'flex flex-col flex-1 p-8 gap-4 shadow'}>
      <h2 className={'text-sm font-semibold uppercase tracking-wide'}>Pending Amount</h2>
      <div className={'text-2xl font-black'}>$1111.00</div>
      <div className={'w-full'}>
        <Button size={'sm'} variant={'outline'} className={'justify-self-end'}>
          Collect All
          <Wallet className={'ml-2 w-3 h-3'} />
        </Button>
      </div>
  </Card>
}