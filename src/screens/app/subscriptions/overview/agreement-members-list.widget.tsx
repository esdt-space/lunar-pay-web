import { ArrowLeft, Dot } from "lucide-react";
import { MembersSection, ScreenTabs } from "../agreement.screen"
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

type Props = {
  setSelectedTab: React.Dispatch<React.SetStateAction<ScreenTabs>>
  agreementMembers: MembersSection;
}

export const AgreementMembersList = ({setSelectedTab, agreementMembers}: Props) => {
  return <div className={'container mx-auto space-y-4 sm:p-12 xl:p-16'}>

    <div className="flex space-x-2 cursor-pointer" onClick={() => setSelectedTab(ScreenTabs.AgreementsList)}>
      <ArrowLeft />
      <div>Back</div>
    </div>

    <div className="flex flex-col space-y-4 rounded-md border border-blue-500 bg-gradiant-to-r from-blue-500 to-red-500 p-4 shadow">
      <div className="flex justify-between">
        <div>{agreementMembers.agreementDetails.name}</div>
        <div className="flex">
          <div className="flex">
            {agreementMembers.agreementDetails.frequency}
            <Dot />
          </div>
          <div>
            {agreementMembers.agreementDetails.price} {agreementMembers.agreementDetails.tokenIdentifier}
          </div>
        </div>
      </div>
      <Separator />
      <div className="flex justify-between">
        <div>{agreementMembers.agreementDetails.benefits.map((item, index) => {
          return <div key={index} className="flex"><Dot /> {item}</div>
        })}</div>
        <div className="flex space-x-2 items-center">
          <div>Total Amount</div>
          <Button>Claim</Button>
        </div>
      </div>
    </div>
    
    {agreementMembers.membersList.map((item: any, index: number) => {
      return <div key={index} className="flex flex-1 justify-between rounded-md border border-blue-500 bg-gradiant-to-r from-blue-500 to-red-500 p-4 shadow">
        <div className="flex flex-1 items-center ml-2 gap-4">
          <div>{item}</div>
        </div>
        <div className="flex items-center space-x-2">
          <div>Display User Amount</div>
          <Button>Claim</Button>
          <Button className="bg-red-500 hover:bg-red-500">Remove</Button>
        </div>
      </div>
    })}
  </div>
}