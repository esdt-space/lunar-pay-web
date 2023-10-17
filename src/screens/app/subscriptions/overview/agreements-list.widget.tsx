import { Dot, Star, Users } from "lucide-react"
import { Switch } from "@/components/ui/switch"
import { useAgreementsQuery } from "@/features/subscription/hooks"
import { MembersSection, ScreenTabs } from "../agreement.screen"

type Props = {
  setSelectedTab: React.Dispatch<React.SetStateAction<ScreenTabs>>
  setAgreementMembers: React.Dispatch<React.SetStateAction<MembersSection>>
}

export const SubscriptionsListScreen = ({setSelectedTab, setAgreementMembers}: Props) => {
  const { data: agreementsList = []} = useAgreementsQuery();

  const getMembers = (subName: string, subFrequency: string, subPrice: number, subToken: string, benefits: string[], members: string[]) => {
    const input = {
      agreementDetails: {
        name: subName,
        frequency: subFrequency,
        price: subPrice,
        tokenIdentifier: subToken,
        benefits: benefits,
      },
      membersList: members
    }

    setAgreementMembers(input)
    setSelectedTab(ScreenTabs.AgreementMembersList)
  }

  return <div className={'container mx-auto space-y-4 sm:p-12 xl:p-16'}>
    {agreementsList.map((item: any, index: number) => {
      return <div key={index} className="flex flex-1 justify-between rounded-md border p-4 shadow">
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
                {item.agreementType.amountType.amount} {item.tokenIdentifier}
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center mr-2 gap-4">
          <div className="mr-8 cursor-pointer" onClick={() => getMembers(item.name, item.agreementType.frequency, item.agreementType.amountType.amount, item.tokenIdentifier, item.benefits, item.agreementType.senders)}>
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