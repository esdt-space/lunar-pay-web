import { Card, CardContent, CardHeader } from "@/components/ui/card";

type Props = {
  title: string;
  subtitle: string;
  description: string;
}

export const DonationDashboardCard = (props: Props) => {
  const { title, subtitle, description } = props;

  return (
    <Card className='w-full md:h-64 max-sm:h-full bg-gradient-to-r from-primary to-secondary text-white p-6'>
      <CardHeader className='text-2xl'>{title}</CardHeader>
      <CardContent className='flex flex-col space-y-4'>
        <div>{subtitle}</div>
        <div>{description}</div>
      </CardContent>
    </Card>
  )
}
