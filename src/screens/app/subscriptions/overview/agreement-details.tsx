import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Dot } from "lucide-react";

export type AgreementBasicDetails = {
  name: string;
  frequency: string;
  tokenIdentifier: string;
  price: number | undefined
  benefits: string[];
}

type Props = {
  currentAgreement: AgreementBasicDetails;
}

export const AgreementDetails = ({currentAgreement}: Props) => {
  return <div className="flex justify-between space-x-4">
    <div className="flex flex-col w-6/12">
      <div className="flex">
        <div className="flex">
          {currentAgreement.frequency}
          <Dot />
        </div>
        <div>
          {currentAgreement.price} {currentAgreement.tokenIdentifier}
        </div>
      </div>
      <div className="flex space-x-2 items-center">
        <div>Total Amount</div>
        <Button>Claim</Button>
      </div>
    </div>
    <div className="flex w-6/12">
      <div>
        <Separator orientation="vertical" />
      </div>
      <div className="ml-6">
        {currentAgreement.benefits.map((item, index) => {
          return <div key={index} className="flex"><Dot /> {item}</div>
        })}
      </div>
    </div>
  </div>
}