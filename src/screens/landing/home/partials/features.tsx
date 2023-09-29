import { ReactNode } from "react";
import { Building2, CreditCard, Star, Wallet2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card.tsx";

type FeatureCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
}

function FeatureCard(props: FeatureCardProps) {
  return (
    <Card className={'p-2 shadow hover:shadow-lg border-none bg-slate-100/20'}>
      <CardHeader className={'space-y-3'}>
        <div className={'p-3 rounded-full bg-primary/10 shadow self-start'}>{props.icon}</div>
        <CardTitle>
          {props.title}
        </CardTitle>
      </CardHeader>
      <CardContent className={'text-muted-foreground font-normal text-sm leading-normal'}>
        {props.description}
      </CardContent>
    </Card>
  )
}

export function HomeFeaturesPartial() {
  return (
    <div className={'container flex flex-col lg:flex-row'}>
      <div className={'flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6'}>
        <FeatureCard
          icon={<Building2 className={'w-5 h-5 text-primary'} />}
          title={'Payroll'}
          description={'Nobis minus voluptatibus pariatur dignissimos libero quaerat iure expedita at? Asperiores nemo possimus nesciunt dicta veniam aspernatur quam mollitia.'}
        />
        <FeatureCard
          icon={<CreditCard className={'w-5 h-5 text-primary'} />}
          title={'Subscriptions'}
          description={'Nobis minus voluptatibus pariatur dignissimos libero quaerat iure expedita at? Asperiores nemo possimus nesciunt dicta veniam aspernatur quam mollitia.'}
        />
        <FeatureCard
          icon={<Wallet2 className={'w-5 h-5 text-primary'} />}
          title={'Portfolio Management'}
          description={'Nobis minus voluptatibus pariatur dignissimos libero quaerat iure expedita at? Asperiores nemo possimus nesciunt dicta veniam aspernatur quam mollitia.'}
        />
        <FeatureCard
          icon={<Star className={'w-5 h-5 text-primary'} />}
          title={'Team Allowances'}
          description={'Nobis minus voluptatibus pariatur dignissimos libero quaerat iure expedita at? Asperiores nemo possimus nesciunt dicta veniam aspernatur quam mollitia.'}
        />
      </div>

      <div className={'flex-1'}>

      </div>
    </div>
  )
}