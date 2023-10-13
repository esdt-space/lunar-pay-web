import { ArrowLeft } from "lucide-react";
import { ScreenTabs } from "../agreement.screen"
import { Button } from "@/components/ui/button";

type Props = {
  setSelectedTab: React.Dispatch<React.SetStateAction<ScreenTabs>>
  agreementMembers: string[];
}

export const AgreementMembersList = ({setSelectedTab, agreementMembers}: Props) => {
  return <div className={'container mx-auto space-y-4 sm:p-12 xl:p-16'}>
    <ArrowLeft 
      className="cursor-pointer"
      onClick={() => setSelectedTab(ScreenTabs.AgreementsList)} />
    {agreementMembers.map((item: any, index: number) => {
      return <div key={index} className="flex flex-1 justify-between rounded-md border border-blue-500 bg-gradiant-to-r from-blue-500 to-red-500 p-4 shadow">
        <div className="flex flex-1 items-center ml-2 gap-4">
          <div>{item}</div>
        </div>
        <div>
            <Button className="bg-red-500 hover:bg-red-500">Remove Member</Button>
        </div>
      </div>
    })}
  </div>
}