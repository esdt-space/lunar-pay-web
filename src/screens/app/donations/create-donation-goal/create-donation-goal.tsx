import { useState } from "react"

import { ContainedScreen } from "@/components/prefab/contained-screen"
import { Card } from "@/components/ui/card"
import { DonationTypeSelector } from "../components"
import { Token } from "@/core/tokens"
import { useAccountTokensAvailableToDeposit } from "@/features/account-tokens/hooks"
import { TokenSelectorWithAmount } from "@/core/tokens/components"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const donationTypes = [
  {label: 'oneTimeDonation', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'},
  {label: 'recurringDonations', description: 'Coming soon'}
]
const userTypes = [
  {label: 'contentCreator', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'},
  {label: 'charity', description: 'Coming soon'}
]

export const CreateDonationGoalScreen = () => {
  const [beneficiaryName, setBeneficiaryName] = useState('');
  const [backgroundImageUrl, setBackgroundImageUrl] = useState('');
  const [selectedDonationType, setSelectedDonationType] = useState('oneTimeDonation');
  const [selectedUserType, setSelectedUserType] = useState('contentCreator');
  const [selectedToken, setSelectedToken] = useState<Token | undefined>(undefined);
  const [amount, setAmount] = useState('')

  const tokens = useAccountTokensAvailableToDeposit();
  
  return (
    <ContainedScreen>
      <Card className='p-6 space-y-8'>
        <div className="text-xl font-semibold">New Donation</div>
        <DonationTypeSelector 
          optionsList={donationTypes}
          selectedOption={selectedDonationType}
          setSelectedOption={setSelectedDonationType}
        />
        <div className={'flex-1'}>
          <TokenSelectorWithAmount
            tokens={tokens}
            token={selectedToken}
            onTokenChange={(token) => setSelectedToken(token)}
            amount={amount}
            onAmountChange={(amount) => setAmount(amount)}
            hasMaxButton={false}
            showBalances={false}
            isAmountToReceive={true}
          />
        </div>
        <DonationTypeSelector 
          label={'Page Layout'}
          optionsList={userTypes}
          selectedOption={selectedUserType}
          setSelectedOption={setSelectedUserType}
        />
        <div>
          <div className="font-bold">
            Beneficiary Name
          </div>
          <Input
            value={beneficiaryName}
            placeholder="John Doe"
            onChange={(e) => setBeneficiaryName(e.target.value)}
          />
        </div>
        <div>
          <div className="font-bold">
            Background Image
          </div>
          <Input 
            value={backgroundImageUrl}
            placeholder="https://example.com/image.jpg"
            onChange={(e) => setBackgroundImageUrl(e.target.value)}
          />
        </div>
        <Button className='w-full'>Create New Donation</Button>
      </Card>
    </ContainedScreen>
  )
}
