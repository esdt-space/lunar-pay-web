import { Card } from "@/components/ui/card";

export const LatestDonationsList = () => {
  const donationsList: string[] = [
    'donation item', 
    'donation item', 
    'donation item', 
    'donation item', 
    'donation item', 
    'donation item', 
    'donation item', 
    'donation item', 
    'donation item', 
  ]

  return (
    <div className="flex flex-1 w-full justify-center">
      <Card className="p-16 min-w-[400px] max-w-[401]px">
        {donationsList.map((item: string) => <div>{item}</div>)}
      </Card>
    </div>
  )
}
