import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { usePaymentAgreementsCreatedQuery } from "@/features/payment-agreements/hooks"
import { PaymentAgreement } from "@/features/payment-agreements/models"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export const ListMembersAgreementScreen = () => {
  const { data: agreements } = usePaymentAgreementsCreatedQuery()
  const { id } = useParams()

  const [currentAgreement, setCurrentAgreement] = useState<PaymentAgreement | undefined>(undefined)

  useEffect(() => {
    const selectedAgreement = agreements?.find((item) => item.id === id)

    setCurrentAgreement(selectedAgreement)
  }, [id])
 
  return <div className="container mx-auto">
    <Card className="mt-6">
      <CardHeader>
        <CardTitle>{currentAgreement?.name}</CardTitle>
      </CardHeader>
      <CardContent>
        {currentAgreement?.name}
      </CardContent>
    </Card>
  </div>
}