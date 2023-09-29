import { Switch } from "@/components/ui/switch"
import { Star, Users } from "lucide-react"

type SubscriptionItem = {
  id: string
  favorite: boolean
  name: string
  recurrencePeriod: string
  subscriptionCost: string
  subscribers: number
}

const items: SubscriptionItem[] = [{
  id: "889714f8-db9f-448c-9308-844379fd155f",
  favorite: true,
  name: "Netflix PRO",
  recurrencePeriod: "Charged Monthly",
  subscriptionCost: "2 EGLD / Month",
  subscribers: 10
},{
  id: "00b7086f-35b8-4294-bfc1-d30340f9d3f1",
  favorite: true,
  name: "Netflix PRO",
  recurrencePeriod: "Charged Monthly",
  subscriptionCost: "2 EGLD / Month",
  subscribers: 10
},{
  id: "4aa597fb-e825-45ee-8d31-48c56aaf0192",
  favorite: false,
  name: "Netflix PRO",
  recurrencePeriod: "Charged Monthly",
  subscriptionCost: "2 EGLD / Month",
  subscribers: 10
}]

export const SubscriptionsList = () => {
  return (
    <div className="flex flex-col gap-4 w-full">
      {items.map((item, index) => {
        return <div key={index} className="flex flex-1 justify-between rounded-md border border-blue-500 bg-gradiant-to-r from-blue-500 to-red-500 p-4 shadow">
          <div className="flex items-center ml-2 gap-4">
            <Star className="cursor-pointer" />
            <div className="flex flex-col">
              <div>{item.name}</div>
              <div className="text-sm text-muted-foreground">{item.recurrencePeriod}</div>
            </div>
            <div className="ml-4">
              {item.subscriptionCost}
            </div>
          </div>

          <div className="flex items-center mr-2 gap-4">
            <div className="mr-8">
              <Users />
              {item.subscribers}
            </div>
            <div className="flex space-x-2">
              <Switch id="airplane-mode" />
            </div>
          </div>
        </div>
      })}
    </div>
  )
}