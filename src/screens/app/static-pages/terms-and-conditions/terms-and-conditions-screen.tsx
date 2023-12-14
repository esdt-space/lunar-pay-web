import { ContainedScreen } from "@/components/prefab/contained-screen"
import { Card } from "@/components/ui/card"
import { TermsAndConditions } from "./components"

export function TermsAndConditionsScreen() {
  return (
    <ContainedScreen>
      <Card className="p-6">
      <TermsAndConditions />
      </Card>
    </ContainedScreen>
  )
}