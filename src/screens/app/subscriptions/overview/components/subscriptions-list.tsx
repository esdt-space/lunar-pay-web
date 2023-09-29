import { Button } from "@/components/ui/button"

type SubscriptionItem = {
  id: string
  favorite: boolean
  name: string
  subscriptionRate: string
  subscribers: number
}

const items: SubscriptionItem[] = [{
  id: "889714f8-db9f-448c-9308-844379fd155f",
  favorite: true,
  name: "Netflix PRO",
  subscriptionRate: "Charged Monthly",
  subscribers: 10
},{
  id: "00b7086f-35b8-4294-bfc1-d30340f9d3f1",
  favorite: true,
  name: "Netflix PRO",
  subscriptionRate: "Charged Monthly",
  subscribers: 10
},{
  id: "4aa597fb-e825-45ee-8d31-48c56aaf0192",
  favorite: false,
  name: "Netflix PRO",
  subscriptionRate: "Charged Monthly",
  subscribers: 10
}]

export const SubscriptionsList = () => {
  return (
    <div className="flex flex-col gap-4 w-full">
      {items.map((item, index) => {
        return <div key={index} className="flex flex-1 justify-between rounded-md border border-blue-500 bg-gradiant-to-r from-blue-500 to-red-500 p-6 shadow">
          <div className="flex gap-4">
            <div>Icon</div>
            <div>{item.name}</div>
          </div>
          <div className="flex gap-4">
            <div>{item.subscribers}</div>
            <div><Button>Click</Button></div>
          </div>
        </div>
      })}
    </div>
  )
}