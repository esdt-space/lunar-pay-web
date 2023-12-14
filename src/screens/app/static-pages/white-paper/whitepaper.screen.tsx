import { ContainedScreen } from "@/components/prefab/contained-screen"
import { Card } from "@/components/ui/card"
import { Whitepaper } from "./components"

export function WhitepaperScreen() {
  return (
    <ContainedScreen>
      <Card className="p-6">
      <Whitepaper />
      </Card>
    </ContainedScreen>
  )
}