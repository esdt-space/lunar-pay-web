import { ArrowLeft, Dot } from "lucide-react";
import { MembersSection, ScreenTabs } from "../agreement.screen"
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type Props = {
  setSelectedTab: React.Dispatch<React.SetStateAction<ScreenTabs>>
  agreementMembers: MembersSection;
}

export const AgreementMembersList = ({setSelectedTab, agreementMembers}: Props) => {
  return <Card className="p-6">

    <div className="flex space-x-2 cursor-pointer" onClick={() => setSelectedTab(ScreenTabs.AgreementsList)}>
      <ArrowLeft />
      <div>Back</div>
    </div>

    <CardHeader className="p-6">
      <CardTitle>{agreementMembers.agreementDetails.name}</CardTitle>
    </CardHeader>

    <CardContent className="space-y-4">
        <div className="flex flex-col space-y-4 p-4 shadow">
          <div className="flex justify-between">
            <div className="flex">
              <div className="flex">
                {agreementMembers.agreementDetails.frequency}
                <Dot />
              </div>
              <div>
                {agreementMembers.agreementDetails.price} {agreementMembers.agreementDetails.tokenIdentifier}
              </div>
            </div>
            <div className="flex space-x-2 items-center">
              <div>Total Amount</div>
              <Button>Claim</Button>
            </div>
          </div>
          <Separator />
          <div>{agreementMembers.agreementDetails.benefits.map((item, index) => {
            return <div key={index} className="flex"><Dot /> {item}</div>
          })}</div>
        </div>

        {agreementMembers.membersList.map((item: any, index: number) => {
          return <div key={index} className="flex flex-1 justify-between p-4 shadow">
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
    </CardContent>
  </Card>
}