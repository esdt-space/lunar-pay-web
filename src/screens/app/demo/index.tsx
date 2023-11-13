import { Button } from "@/components/ui/button"
import { Card, CardContent, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

const goToSignAgreement = () => {
  window.open('https://localhost:5173/agreement/654a75fa8b9e99716e97a2ea', '_blank')
}

export const DemoPage = () => {
  return <div className={'container mx-auto p-4 sm:p-12 xl:p-16'}>
    <div className="text-2xl">Welcome to Provider's Name</div>
    <Separator className="mt-2 mb-2" />
    <div className="text-lg">Start your membership today</div>
    <div>Many Benefits</div>
    <div>Cancel anytime</div>

    <div className="flex justify-between mt-4 space-x-4">
      <div className="flex-1">
        <Card className="p-4">
          <CardTitle>Monthly</CardTitle>
          <CardContent className="mt-4">
            <div className="flex justify-between">
              <div>
                1 EGLD
              </div>
              <div>
                <Button onClick={goToSignAgreement}>Choose</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="flex-1">
        <Card className="p-4">
          <CardTitle>Per Year</CardTitle>
          <CardContent className="mt-4">
            <div className="flex justify-between">
              <div>
                10 EGLD
              </div>
              <div>
                <Button>Choose</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  </div>
}