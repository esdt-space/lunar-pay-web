import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useLocation } from "react-router-dom"

export const ListMembersAgreementScreen = () => {
  const location = useLocation()
  const currentAgreement = location.state.selectedAgreement
 
  return <div className="container mx-auto">
    <Card className="mt-6">
      <CardHeader>
        <CardTitle>{currentAgreement.name}</CardTitle>
      </CardHeader>
      <CardContent>
        {currentAgreement.name}
      </CardContent>
    </Card>
  </div>
}