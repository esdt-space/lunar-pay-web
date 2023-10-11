import { ReactNode} from "react";
import { motion } from "framer-motion";
import { Bot, DollarSign, LineChart } from "lucide-react";

import { cn } from "@/theme/utils.ts";

type WhyUsItemProps = {
  title: string;
  description: string;
  icon: ReactNode;
}

const itemVariants = {
  offscreen: { opacity: 0 },
  onscreen: { opacity: 1 }
}

const container = {
  offscreen: { opacity: 0 },
  onscreen: {
    opacity: 1,
    transition: {
      duration: 0.8,
      staggerChildren: 0.4,
    }
  }
}

function WhyUsItem(props: WhyUsItemProps) {
  return (
    <motion.li variants={itemVariants} className={cn([
      "col-span-full lg:col-span-1",
      "flex flex-col gap-2",
    ])}>
      <div className={'p-2.5 bg-white bg-opacity-5 rounded self-start'}>{props.icon}</div>
      <h3 className="text-md leading-none font-bold">{props.title}</h3>
      <p className="mt-1 text-sm leading-normal text-slate-300/80">{props.description}</p>
    </motion.li>
  )
}

export function WhyUsPartial() {
  return (
    <section className={cn([
      "container bg-blue-950 text-white",
      "2xl:rounded-2xl box-border"
    ])}>
      <div className="py-20 lg:px-6">
        <div>
          <div className={'flex gap-2 items-center'}>
            <div className={'w-2 bg-gradient-to-bl from-primary to-secondary rounded'}>&nbsp;</div>
            <h4 className="text-xl font-semibold leading-none text-slate-300">Why Choose Lunar Pay?</h4>
          </div>

          <div className="text-3xl text-white font-semibold tracking-tight max-w-xl mt-3">
            <span>Amplify Your Earnings </span>
            <span className={'opacity-30'}>with intuitive and robust subscription solutions.</span>
          </div>
        </div>

        <motion.ul
          variants={container}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.6 }}
          className="grid grid-cols-3 gap-12 mt-16"
        >
          <WhyUsItem
            icon={<Bot className={'w-5 h-5'} />}
            title={'Automated and Reliable Billing'}
            description={'Dedicate your time and resources where they’re needed most. Lunar Pay autonomously manages billing, assuring that your customers are consistently charged, punctually, every cycle.'}
          />

          <WhyUsItem
            icon={<DollarSign className={'w-5 h-5'} />}
            title={'Stable and Predictable Revenue Streams'}
            description={'Bid farewell to the unpredictability of revenue flows. Enjoy the stability of regular, recurring revenue with Lunar Pay Subscriptions, enabling you to strategize and develop your business with assurance.'}
          />

          <WhyUsItem
            icon={<LineChart className={'w-5 h-5'} />}
            title={'In-depth Customer Insights'}
            description={'Deepen your understanding of your subscribers. Lunar Pay’s analytic tools furnish you with vital data on user behaviors and preferences, empowering you to refine and enhance your subscription offerings.'}
          />
        </motion.ul>
      </div>
    </section>
  )
}