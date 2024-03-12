import { ContainedScreen } from "@/components/prefab/contained-screen";
import { CreateDonationCard, DonationDashboardCard } from "./widgets";
import { RoutesConfig } from "@/navigation";

export const DonationDashboardScreen = () => {
  return (
    <ContainedScreen className='flex flex-col space-y-12'>
      <DonationDashboardCard
        title='Receive Donations'
        subtitle='Enhance Your Impact: Efficient Donation Tracking'
        description={'Lunar Pay allows you to effortlessly manage and track recurring donations within the MultiversX blockchain. It\'s designed for creators, nonprofits, and individuals, streamlining the donation process for both donors and recipients, ensuring financial support flows smoothly and securely.'}
      />
      <div className='flex flex-1 justify-between md:space-x-8 max-md:flex-col max-md:space-y-8'>
        <CreateDonationCard 
          title='Create Widget'
          description='Innovate Giving: Customizable Widget Creation'
          extraDescription='Create a personalized donation widget for integration into your own application. This feature offers flexibility and control, enabling you to customize appearance and functionality, making it easier for your audience to contribute directly from your platform, enhancing user engagement and support for your cause.'
          navigationRoute={''}
        />
        <CreateDonationCard 
          title='Create Donation'
          description='Kickstart Your Impact: Easy Donation Setup'
          extraDescription='Initiate your contribution journey. This streamlined process allows you to define the parameters of your donation, tailor it to the cause you care most about, and establish a recurring support mechanism, ensuring your generosity makes a continuous difference.'
          navigationRoute={RoutesConfig.createOneTimeDonation}
        />
      </div>
    </ContainedScreen>
  )
}
