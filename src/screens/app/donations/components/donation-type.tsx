import { DonationType } from "..";

type Props = {
  selectedDonationType: DonationType;
  selectDonationType: (donation: DonationType) => void
}

export const DonationTypeSelect = (props: Props) => {
  const { selectedDonationType, selectDonationType } = props;

  const donationTypeStyling = "flex justify-center items-center border rounded-md h-12 w-full cursor-pointer space-x-4"
  const singleDonationStyling = `${selectedDonationType === 'single' ? 'bg-gradient-to-r from-primary to-secondary text-white hover:text-slate-200' : ''}`
  const monthlyDonationStyling = `${selectedDonationType === 'monthly' ? 'bg-gradient-to-r from-primary to-secondary text-white hover:text-slate-200' : ''}`

  return (
    <div className="flex">
      <div 
        className={`${donationTypeStyling} ${singleDonationStyling}`}
        onClick={() => selectDonationType('single')}
      >
        <p className="text-center">Single</p>
      </div>
      <div 
        className={`${donationTypeStyling} ${monthlyDonationStyling}`}
        onClick={() => selectDonationType('monthly')}
      >
        <p className="text-center">Monthly</p>
      </div>
    </div>
  )
}