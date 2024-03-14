import { useEffect } from "react"

import { ContainedScreen } from "@/components/prefab/contained-screen"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { DonationsService } from "@/features/donations/donation.service"

export const ActionsPerformedRankingScreen = () => {
  useEffect(() => {
    DonationsService.fetchActionsForEvent()
  }, [])

  return (
    <ContainedScreen className='h-full'>
      <Card className='mt-16'>
        <CardHeader className='text-xl font-bold'>
          Actions Performed Ranking Screen
        </CardHeader>
        <CardContent>
          List
        </CardContent>
      </Card>
    </ContainedScreen>
  )
}
