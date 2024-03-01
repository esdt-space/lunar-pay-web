import { ContainedScreen } from "@/components/prefab/contained-screen";
import { CreateDonationCard, DonationDashboardCard } from "./widgets";

export const DonationDashboardScreen = () => {
  return (
    <ContainedScreen className='flex flex-col space-y-12'>
      <DonationDashboardCard
        title='Receive Donations'
        subtitle='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'
        description='It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using'
      />
      <div className='flex flex-1 justify-between md:space-x-8 max-md:flex-col max-md:space-y-8'>
        <CreateDonationCard 
          title='Create Widget'
          description='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'
          extraDescription='It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout'
        />
        <CreateDonationCard 
          title='Create Goal'
          description='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'
          extraDescription='It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout'
        />
        <CreateDonationCard 
          title='Create Widget'
          description='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'
          extraDescription='It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout'
        />
      </div>
    </ContainedScreen>
  )
}
