import { AgreementsService } from "@/features/subscription/subscriptions.service"
import { useEffect, useState } from "react"
import { mockAgreements } from "./mock-data"

export const AgreementsOverviewScreen = () => {
  const [agreementsList, setAgreementsList] = useState<any>([])

  useEffect(() => {
    AgreementsService.fetchAgreements().then((res) => {
      console.log(res)
    })

    setAgreementsList(mockAgreements)
  }, [])

  return <div className={'container mx-auto sm:p-12 xl:p-16'}>
    {agreementsList.map((item: any, index: number) => {
      return <div key={index}>
        {item.token}
      </div>
    })}
  </div>
}