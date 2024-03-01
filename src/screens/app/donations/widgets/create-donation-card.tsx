import { Card, CardContent, CardHeader } from "@/components/ui/card";

type Props = {
  title: string;
  description: string;
  extraDescription: string;
}

export const CreateDonationCard = (props: Props) => {
  const { title, description, extraDescription } = props;

  return (
    <Card className="w-full space-y-4 cursor-pointer p-4">
      <CardHeader>{title}</CardHeader>
      <CardContent className='flex flex-col space-y-4'>
        <div>{description}</div>
        <div>{extraDescription}</div>
      </CardContent>
    </Card>
  )
}
