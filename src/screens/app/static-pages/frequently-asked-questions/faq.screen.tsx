import { ContainedScreen } from "@/components/prefab/contained-screen"
import { Card } from "@/components/ui/card"
import { FAQ } from "./faq.component"

export function FrequentlyAskedQuestionsScreen() {

  return (
    <ContainedScreen>
      <Card>
      <FAQ />
      </Card>
    </ContainedScreen>
  )

}