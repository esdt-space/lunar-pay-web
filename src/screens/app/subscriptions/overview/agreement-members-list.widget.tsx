import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PaginationButtonsOld, usePagination } from "@/components/shared/pagination";
import { AgreementBasicDetails, MembersList } from ".";
import { AgreementDetails } from ".";
import { Button } from "@/components/ui/button";
import { useLocation } from "react-router-dom";

export type MembersSection = {
  agreementDetails: AgreementBasicDetails;
  membersList: string[];
}

export const SubscriptionMembersList = () => {
  const location = useLocation()
  const currentSub = location.state.currentSubscription

  const { data: membersList, ...rest} =
    usePagination(currentSub.agreementType.senders, 5);
    
  return <div className="container mx-auto mt-8 space-y-4">
    <Card className="p-6">
      <CardHeader className="p-6">
        <div className="flex justify-between">
          <div>
            <CardTitle>{currentSub.ownerName}</CardTitle>
          </div>
          <div>
            <Button className="bg-red-500 text-white hover:bg-red-500 hover:text-white">Cancel Subscription</Button>
          </div>
        </div>
      </CardHeader>

      <CardContent>
        <AgreementDetails currentAgreement={currentSub} />
      </CardContent>
      <Button className="w-full">Edit Subscription</Button>
    </Card>

    <Card className="p-6">
      <CardContent className="space-y-4">
        <MembersList membersList={currentSub.agreementType.senders}/>
        <PaginationButtonsOld {...{...rest}} />
      </CardContent>
    </Card>
  </div>
}