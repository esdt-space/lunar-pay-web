import { Card } from "@/components/ui/card";

type Option = {
  label: string;
  description: string;
}

type Props = {
  label?: string;
  optionsList: Option[];
  selectedOption: string;
  setSelectedOption: React.Dispatch<React.SetStateAction<string>>;
}

export const DonationTypeSelector = (props: Props) => {
  const { label, optionsList, selectedOption, setSelectedOption } = props;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value)
  }

  return (
    <div>
      <div className="font-bold">
        {label}
      </div>
      <div className="flex space-x-4">
        {optionsList.map((option) => {
          const optionIsDisabled = option.label === 'recurringDonations' || option.label === 'charity'
          const disabledStyle = !optionIsDisabled ? 'border-black' : ''

          return (
            <Card className="flex flex-col flex-1 space-y-2 p-6">
              <div className="flex items-center">
                <div>
                  <input
                    type="radio"
                    value={option.label}
                    checked={selectedOption === option.label}
                    onChange={handleChange}
                    className="sr-only"
                    disabled={optionIsDisabled}
                  />
                  <div className={`w-5 h-5 rounded-full border mr-2 flex items-center justify-center ${disabledStyle}`}>
                    {selectedOption === option.label && (
                      <div className="w-3 h-3 rounded-full bg-black"></div>
                    )}
                  </div>
                </div>
                <div>
                  {displayLabel(option.label)}
                </div>
              </div>
              <div className="text-sm text-muted-foreground">
                {option.description}
              </div>
            </Card>
          )
        })}
      </div>
    </div>
  )
}

const displayLabel = (input: string) => {
  switch(input) {
    case 'oneTimeDonation': {
      return 'One Time Donation'
    }
    case 'recurringDonations': {
      return 'Recurring Donations'
    }
    case 'contentCreator': {
      return 'Content Creator'
    }
    case 'charity': {
      return 'Charity'
    }
    default: {
      return ''
    }
  }
}
