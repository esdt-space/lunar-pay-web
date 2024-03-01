import { useNavigate } from "react-router-dom";

import { Card, CardContent, CardHeader } from "@/components/ui/card";

type Props = {
  title: string;
  description: string;
  extraDescription: string;
  navigationRoute: string;
}

export const CreateDonationCard = (props: Props) => {
  const { title, description, extraDescription, navigationRoute } = props;

  const navigate = useNavigate()

  return (
    <Card onClick={() => navigate(navigationRoute)} className="w-full space-y-4 cursor-pointer p-4">
      <CardHeader className='font-bold'>{title}</CardHeader>
      <CardContent className='flex flex-col space-y-4'>
        <div>{description}</div>
        <div>{extraDescription}</div>
      </CardContent>
    </Card>
  )
}
