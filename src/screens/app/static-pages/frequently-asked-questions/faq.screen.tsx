import { ContainedScreen } from "@/components/prefab/contained-screen"
import { Card } from "@/components/ui/card"
import { FrequentlyAskedQuestions } from "./faq.component"

export function FrequentlyAskedQuestionsScreen() {

  return (
    <ContainedScreen>
      <Card className="p-6">
      <FrequentlyAskedQuestions />
      </Card>
    </ContainedScreen>
  )

}