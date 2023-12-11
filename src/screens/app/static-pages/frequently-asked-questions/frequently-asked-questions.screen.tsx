import { ContainedScreen } from "@/components/prefab/contained-screen"
import { Card } from "@/components/ui/card"
import { FrequentlyAskedQuestions } from "./components/faq-list"

export function FrequentlyAskedQuestionsScreen() {

  return (
    <ContainedScreen>
      <Card className="p-6">
      <FrequentlyAskedQuestions />
      </Card>
    </ContainedScreen>
  )

}