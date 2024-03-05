import { useNavigate, useParams } from "react-router-dom"
import { useGetAccount } from "@multiversx/sdk-dapp/hooks"

import { ContainedScreen } from "@/components/prefab/contained-screen"
import { Card, CardContent } from "@/components/ui/card"
import { useCreatedDonation } from "@/features/donations/hooks"
import { RoutesConfig } from "@/navigation"

export const ViewDonationScreen = () => {
  const { address } = useGetAccount()
  const { id } = useParams()
  const navigate = useNavigate()

  const { data: donation } = useCreatedDonation(id);

  if(!donation) return;

  if(donation && donation.owner !== address) {
    navigate(RoutesConfig.dashboard, { replace: true });
  }

  return (
    <ContainedScreen>
      <Card className="p-6">
        <CardContent>
          View Donation Screen
        </CardContent>
      </Card>
    </ContainedScreen>
  )
}
