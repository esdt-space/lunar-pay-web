import { useState } from "react"
import { useNavigate } from "react-router-dom"
import BigNumber from "bignumber.js"
import { BigUIntValue } from "@multiversx/sdk-core/out"

import { ContainedScreen } from "@/components/prefab/contained-screen"
import { Card, CardContent } from "@/components/ui/card"
import { DonationTypeSelector } from "../components"
import { Token } from "@/core/tokens"
import { useAccountTokensAvailableToDeposit } from "@/features/account-tokens/hooks"
import { TokenSelectorWithAmount } from "@/core/tokens/components"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { createDonationMutation } from "@/features/donations/hooks/mutations"
import { RoutesConfig } from "@/navigation"

const donationTypes = [
  {label: 'one-time-donation', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'},
  {label: 'recurring-donations', description: 'Coming soon'}
];

const userTypes = [
  {label: 'content-creator', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'},
  {label: 'charity', description: 'Coming soon'}
];

export const CreateOneTimeDonationScreen = () => {
  const [beneficiaryName, setBeneficiaryName] = useState('');
  const [backgroundImageUrl, setBackgroundImageUrl] = useState('');
  const [selectedDonationType, setSelectedDonationType] = useState('one-time-donation');
  const [selectedUserType, setSelectedUserType] = useState('content-creator');
  const [selectedToken, setSelectedToken] = useState<Token | undefined>(undefined);
  const [amount, setAmount] = useState('')

  const navigate = useNavigate()
  const tokens = useAccountTokensAvailableToDeposit();
  const { mutate: createNewDonation } = createDonationMutation();

  const createDonation = () => {
    if(selectedToken === undefined) {
      return
    }

    const fixedAmount = new BigUIntValue(
      new BigNumber(amount).multipliedBy(Math.pow(10, selectedToken.decimals))
    )

    const dto = {
      beneficiaryName: beneficiaryName,
      backgroundImageUrl: backgroundImageUrl,
      donationType: selectedDonationType,
      donationTarget: selectedUserType,
      tokenIdentifier: selectedToken.identifier,
      fixedAmount: fixedAmount.toString()
    }

    return createNewDonation(dto, { onSuccess: () => navigate(RoutesConfig.donations)})
  }

  const amountIsMissing = amount === '' || selectedToken === undefined
  
  return (
    <ContainedScreen>
      <Card>
        <CardContent className='p-6 space-y-8'>
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
          <Button 
            onClick={createDonation} 
            className='w-full'
            disabled={amountIsMissing}
          >Create New Donation</Button>
        </CardContent>
      </Card>
    </ContainedScreen>
  )
}
