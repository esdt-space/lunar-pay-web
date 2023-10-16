import { AgreementsService } from "@/features/subscription/subscriptions.service"
import { useEffect, useState } from "react"
import { Dot, Star, Users } from "lucide-react"
import { Switch } from "@/components/ui/switch"

type Props = {
  subscriptionsList: any[];
}

export const SubscriptionsListScreen = ({subscriptionsList}: Props) => {
  const [agreementsList, setAgreementsList] = useState<any[]>([])

  useEffect(() => {
    AgreementsService.fetchAgreements().then((res) => {
      console.log(res)
    })

    setAgreementsList(subscriptionsList)
  }, [])

  return <div className={'container mx-auto space-y-4 sm:p-12 xl:p-16'}>
    {agreementsList.map((item: any, index: number) => {
      return <div key={index} className="flex flex-1 justify-between rounded-md border border-blue-500 bg-gradiant-to-r from-blue-500 to-red-500 p-4 shadow">
        <div className="flex flex-1 items-center ml-2 gap-4">
          <Star className="cursor-pointer" />
          <div className="flex flex-col">
            <div>{item.name}</div>
            <div className="flex text-sm text-muted-foreground">
              <div className="flex">
                {item.agreementType.frequency}
                <Dot />
              </div>
              <div>
                {item.agreementType.amountType.amount}
              </div>
            </div>
          </div>
          
        </div>

        <div className="flex items-center mr-2 gap-4">
          <div className="mr-8">
            <Users />
            {item.agreementType.senders.length}
          </div>
          <div className="flex space-x-2">
            <Switch id="airplane-mode" />
          </div>
        </div>
      </div>
    })}
  </div>
}