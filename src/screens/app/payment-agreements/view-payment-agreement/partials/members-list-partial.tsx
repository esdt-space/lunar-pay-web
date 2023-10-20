import { Card, CardContent } from "@/components/ui/card.tsx";

type Props = {
  members: unknown[];
}

export function MembersListPartial(_props: Props) {
  return (
    <Card>
      <CardContent className="p-0">
      </CardContent>
    </Card>
  )
}