import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { getPaymentFrequency } from "@/utils";
import { Dot } from "lucide-react";
import { Subscription } from "../components/mock-subscription";

export type AgreementBasicDetails = {
  name: string;
  frequency: string;
  tokenIdentifier: string;
  price: number | undefined
  benefits: string[];
}

type Props = {
  currentAgreement: Subscription;
}

export const AgreementDetails = ({currentAgreement}: Props) => {
  return <div className="flex justify-between space-x-4">
    <div className="flex justify-between w-6/12">
      <div className="flex items-center">
        <div className="flex">
          {currentAgreement.agreementType.amountType.amount} {currentAgreement.tokenIdentifier}
          <Dot />
        </div>
        <div>
          {getPaymentFrequency(currentAgreement.agreementType.frequency)}
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
