import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PaymentAgreementMembersTable } from "@/features/payment-agreements/components/payment-agreements-table"
import { usePaymentAgreementsCreatedQuery } from "@/features/payment-agreements/hooks"
import { PaymentAgreement } from "@/features/payment-agreements/models"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { membersMockData } from "./members-mock-data"
import { Button } from "@/components/ui/button"
import { RoutesConfig } from "@/navigation"

export const ListMembersAgreementScreen = () => {
  const { data: agreements } = usePaymentAgreementsCreatedQuery()
  const { id } = useParams()

  const navigate = useNavigate()

  const [currentAgreement, setCurrentAgreement] = useState<PaymentAgreement | undefined>(undefined)

  useEffect(() => {
    const selectedAgreement = agreements?.find((item) => item.id === id)

    setCurrentAgreement(selectedAgreement)
  }, [id])
 
  return <div className="container mx-auto">
    <Card className="mt-6">
      <CardHeader>
        <div className="flex justify-between">
          <div>
            <CardTitle>{currentAgreement?.name}</CardTitle>
          </div>
          <div>
            <Button 
              className="w-[100px]" 
              onClick={() => navigate(`${RoutesConfig.paymentAgreements}/${id}/edit`)}
            >Edit</Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        {currentAgreement?.name}
      </CardContent>
    </Card>

    <Card className="mt-6">
      <CardContent className="p-0">
        <PaymentAgreementMembersTable membersList={membersMockData} />
      </CardContent>
    </Card>
  </div>
}