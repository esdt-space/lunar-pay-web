import { useNavigate } from "react-router-dom";

import { RoutesConfig } from "@/navigation";
import { ContainedScreen } from "@/components/prefab/contained-screen";

export const DonationsListScreen = () => {
  const navigate = useNavigate();

  const donationsList = [];

  if (donationsList.length === 0) {
    navigate(RoutesConfig.createDonationIndex)
  }

  return (
    <ContainedScreen>
      Donations List
    </ContainedScreen>
  )
}
