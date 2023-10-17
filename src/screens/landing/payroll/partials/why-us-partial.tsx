import { ReactNode} from "react";
import { motion } from "framer-motion";
import { Bot, Shield, User } from "lucide-react";

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

          <div className="text-3xl text-white font-semibold tracking-tight max-w-md mt-3">
            <span>Optimize payroll operations </span>
            <span className={'opacity-30'}>with intuitive and robust solutions.</span>
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
            title={'Effortless Payroll Automation'}
            description={'Lunar Pay simplifies the crypto payroll process, saving you valuable time and effort. Automate your payments swiftly and conveniently.'}
          />

          <WhyUsItem
            icon={<Shield className={'w-5 h-5'} />}
            title={'Upheld Security and Compliance'}
            description={'Your transactions\' safety is our priority. With Lunar Pay, ensure that every payment is not only secure but also adheres to all regulatory standards.'}
          />

          <WhyUsItem
            icon={<User className={'w-5 h-5'} />}
            title={'Accessible to Everyone'}
            description={'Lunar Pay is crafted for ease, ensuring a seamless experience for both seasoned crypto enthusiasts and those new to the digital currency realm.'}
          />
        </motion.ul>
      </div>
    </section>
  )
}