import { useState } from "react"

import { ContainedScreen } from "@/components/prefab/contained-screen"
import { Card } from "@/components/ui/card"
import { DonationTypeSelector } from "../components"

const donationTypes = [
  {label: 'oneTimeDonation', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'},
  {label: 'recurringDonations', description: 'Coming soon'}
]
const userTypes = [
  {label: 'contentCreator', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'},
  {label: 'charity', description: 'Coming soon'}
]

export const CreateDonationGoalScreen = () => {
  const [selectedDonationType, setSelectedDonationType] = useState('oneTimeDonation')
  const [selectedUserType, setSelectedUserType] = useState('contentCreator')
  
  return (
    <ContainedScreen>
      <Card className='p-6'>
        <div className="text-xl font-semibold">New Donation</div>
        <DonationTypeSelector 
          optionsList={donationTypes}
          selectedOption={selectedDonationType}
          setSelectedOption={setSelectedDonationType}
        />
        <DonationTypeSelector 
          optionsList={userTypes}
          selectedOption={selectedUserType}
          setSelectedOption={setSelectedUserType}
        />
      </Card>
    </ContainedScreen>
  )
}
