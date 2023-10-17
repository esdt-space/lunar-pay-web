import { ArrowLeft } from "lucide-react";
import { MembersSection, ScreenTabs } from "../agreement.screen"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PaginationButtons, usePagination } from "@/components/shared/pagination";
import { MembersList } from ".";
import { AgreementDetails } from ".";
import { Button } from "@/components/ui/button";

type Props = {
  setSelectedTab: React.Dispatch<React.SetStateAction<ScreenTabs>>
  agreementMembers: MembersSection;
}

export const AgreementMembersList = ({setSelectedTab, agreementMembers}: Props) => {
  const { data: membersList, ...rest} =
    usePagination(agreementMembers.membersList, 5);
  
  const handleGoBack = () => {
    setSelectedTab(ScreenTabs.AgreementsList)
  }
    
  return <div className="space-y-4">
    <Card className="p-6">
      <div className="flex space-x-2 cursor-pointer w-[100px]" onClick={handleGoBack}>
        <ArrowLeft />
        <div>Back</div>
      </div>

      <CardHeader className="p-6">
        <div className="flex justify-between">
          <div>
            <CardTitle>{agreementMembers.agreementDetails.name}</CardTitle>
          </div>
          <div>
            <Button className="bg-red-500 text-white hover:bg-red-500 hover:text-white">Cancel Subscription</Button>
          </div>
        </div>
      </CardHeader>

      <CardContent>
        <AgreementDetails currentAgreement={agreementMembers.agreementDetails} />
      </CardContent>
      <Button className="w-full">Edit Subscription</Button>
    </Card>

    <Card className="p-6">
      <CardContent className="space-y-4">
        <MembersList membersList={membersList}/>
        <PaginationButtons {...{...rest}} />
      </CardContent>
    </Card>
  </div>
}