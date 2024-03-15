import { ContainedScreen } from "@/components/prefab/contained-screen"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { useActionsForEventQuery } from "@/features/donations/hooks/queries/use-actions-for-event-query"
import { UsersActionsTable } from "./components"

export const ActionsPerformedRankingScreen = () => {
  const { data: actionsResponse } = useActionsForEventQuery();
  const usersActions = actionsResponse ? actionsResponse.data : []

  return (
    <ContainedScreen className='h-full'>
      <Card className='mt-16 space-y-4'>
        <CardHeader className='text-xl font-bold text-center'>
          Users ranked by Actions
        </CardHeader>
        <CardContent className={'p-0'}>
          <UsersActionsTable actionsList={usersActions} />
        </CardContent>
      </Card>
    </ContainedScreen>
  )
}
