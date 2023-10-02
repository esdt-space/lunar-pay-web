import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { motion, Variants } from "framer-motion";
import { ArrowRight, Building2, ChevronRight, CreditCard, HeartHandshake, Wallet2 } from "lucide-react";

import { cn } from "@/theme/utils.ts";
import { RoutesConfig } from "@/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card.tsx";

type SolutionCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
  location: string;
}

const cardVariants: Variants = {
  offscreen: {
    scale: 0,
  },
  onscreen: {
    scale: 1,
    transition: {
      type: "spring",
      bounce: 0.3,
      duration: 0.8
    }
  }
};

function SolutionCard(props: SolutionCardProps) {
  return (
    <motion.div
      variants={cardVariants}
      className={cn([
        'flex col-span-full md:col-span-1 bg-white',
        'shadow hover:shadow-xl hover:shadow-blue-950/10 transition-shadow duration-300',
      ])}
    >
      <Card
        className={cn([
        'flex flex-col relative group p-2 border-none',
      ])}>
        <CardHeader className={'space-y-3 pb-2'}>
          <div className={'p-3 rounded bg-gradient-to-br from-primary/5 to-secondary/5 bg-blue-50 self-start'}>
            {props.icon}
          </div>
          <CardTitle className={'text-md font-semibold text-slate-900'}>{props.title}</CardTitle>
        </CardHeader>
        <CardContent className={'flex-1 flex flex-col justify-between text-muted-foreground font-normal text-sm leading-normal'}>
          <p>{props.description}</p>
          <div className={'mt-3 align-end'}>
            <Link className={'group flex gap-1 items-center text-slate-900 font-semibold'} to={props.location}>
              Learn more
              <ChevronRight className={'group-hover:hidden w-4 h-4'}/>
              <ArrowRight className={'hidden group-hover:block w-4 h-4'}/>
            </Link>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export function HomeFeaturesPartial() {
  return (
    <div className={cn([
      'relative flex py-8 isolate',
      'before:absolute before:inset-0',
      `before:z-[2] before:shadow-[rgb(255,255,255)_0px_150px_200px_inset,rgb(255,255,255)_0px_-200px_200px_inset]`,
      `after:absolute after:inset-0 after:z-[1] after:bg-gradient-to-br after:from-primary/20 after:to-secondary/20`,
      `after:[mask-image:url('/assets/media/patterns/waves-pattern.svg')] after:[mask-size:64px_32px] after:[mask-repeat:repeat]`,
    ])}>
      <div className={'container flex flex-col gap-12 z-[3]'}>
        <div className={'max-lg:max-w-prose'}>
          <h2 className={'text-4xl font-bold'}>Unlock Time-Saving Financial Solutions</h2>
          <div className={'text-xl text-muted-foreground mt-1'}>
            Experience the synergy of efficiency, security, and compliance with Lunar Pay.
          </div>
        </div>

        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.3 }}
          className={'grid grid-cols-2 gap-4 lg:gap-6 xl:pr-60'}
        >
            <SolutionCard
              icon={<Building2 className={'w-5 h-5 text-primary'}/>}
              location={RoutesConfig.landingPayroll}
              title={'Payroll'}
              description={'Simplify your business’s financial journey with Lunar Pay’s intelligent payroll system. We streamline the intricacies of compensation distribution, ensuring a smooth and punctual payment flow for your team.'}
            />
            <SolutionCard
              icon={<CreditCard className={'w-5 h-5 text-primary'}/>}
              location={RoutesConfig.landingSubscriptions}
              title={'Subscriptions'}
              description={'Elevate your business with Lunar Pay\'s Subscriptions offering. We allow businesses and individuals to set up and manage subscription models with ease, providing regular, dependable revenue streams.'}
            />
            <SolutionCard
              icon={<Wallet2 className={'w-5 h-5 text-primary'}/>}
              location={RoutesConfig.landingPayroll}
              title={'Portfolio Management'}
              description={'Facilitate token transfers to multiple recipients in just one transaction, ensuring cost efficiency. Delve deeper into investment by granting trusted services the ability to refine your investments.'}
            />
            <SolutionCard
              icon={<HeartHandshake className={'w-5 h-5 text-primary'}/>}
              location={RoutesConfig.landingDonations}
              title={'Donations'}
              description={'Amplify your philanthropic impact. Craft recurring donation agreements with flexibility, empowering donors to designate their recurring contribution amount.'}
            />
        </motion.div>
      </div>
    </div>
)
}