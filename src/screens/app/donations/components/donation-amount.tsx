import { CheckCircle2 } from "lucide-react";
import { PredeterminedAmount } from ".."

type Props = {
  selectedPredeterminedAmount: PredeterminedAmount;
  selectPredeterminedAmount: (amount: PredeterminedAmount) => void;
}

export const DonationAmountSelect = (props: Props) => {
  const { selectedPredeterminedAmount, selectPredeterminedAmount} = props;

  const donationAmountStyling = "flex justify-center items-center border rounded-md h-12 w-full cursor-pointer space-x-4"

  return (
    <div className="flex space-x-4">
      <div className={`${donationAmountStyling}`} onClick={() => selectPredeterminedAmount('5')}>
        <p className="text-center">5 EGLD</p>{selectedPredeterminedAmount === '5' && <CheckCircle2 />}
      </div>
      <div className={`${donationAmountStyling}`} onClick={() => selectPredeterminedAmount('10')}>
        <p className="text-center">10 EGLD</p>{selectedPredeterminedAmount === '10' && <CheckCircle2 />}
      </div>
      <div className={`${donationAmountStyling}`} onClick={() => selectPredeterminedAmount('20')}>
        <p className="text-center">20 EGLD</p>{selectedPredeterminedAmount === '20' && <CheckCircle2 />}
      </div>
    </div>
  )
}