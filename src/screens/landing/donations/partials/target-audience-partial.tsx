import { cn } from "@/theme/utils.ts";
import { motion } from "framer-motion";

type ItemProps = {
  title: string;
  description: string;
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
      staggerChildren: 0.3,
    }
  }
}

function Item(props: ItemProps) {
  return (
    <motion.li variants={itemVariants} className={cn([
      "col-span-full lg:col-span-1",
      "flex flex-col gap-1",
    ])}>
      <h3 className="text-md leading-none font-bold">{props.title}</h3>
      <p className="mt-1 text-sm leading-normal text-slate-300/80">{props.description}</p>
    </motion.li>
  )
}

export function TargetAudiencePartial() {
  return (
    <section className={cn([
      "container bg-blue-950 text-white",
      "2xl:rounded-2xl box-border"
    ])}>

      <div className="py-20 lg:px-6">
        <div>
          <div className={'flex gap-2 items-center'}>
            <div className={'w-2 bg-gradient-to-bl from-primary to-secondary rounded'}>&nbsp;</div>
            <h4 className="text-xl font-semibold leading-none text-slate-300">Who Benefits from Lunar Pay
              Donations?</h4>
          </div>
        </div>

        <div>
          <motion.ul
            variants={container}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-12 mt-16"
          >
            <Item
              title={'Content Creators'}
              description={'Monetize your content and engage with your audience while receiving support from crypto enthusiasts.'}
            />
            <Item
              title={'Nonprofit Organizations'}
              description={'Streamline your fundraising efforts, increase transparency, and reach a global donor base.'}
            />
            <Item
              title={'Individuals with Causes'}
              description={'Rally support for your personal projects, initiatives, or charitable endeavors with ease.'}
            />
          </motion.ul>
        </div>
      </div>
    </section>
  )
}