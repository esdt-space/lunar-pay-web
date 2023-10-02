import { ReactNode} from "react";
import { motion } from "framer-motion";
import { PencilRuler, Shield, Wallet2 } from "lucide-react";

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
            <span>Elevate your financial interactions</span>
            <span className={'opacity-30'}> by intertwining simplicity with sophistication.</span>
          </div>
        </div>

        <motion.ul
          variants={container}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.7 }}
          className="grid grid-cols-3 gap-12 mt-16"
        >
          <WhyUsItem
            icon={<Wallet2 className={'w-5 h-5'} />}
            title={'Revolutionize Your Payments'}
            description={'Dive deep into efficient transaction management with the Vault, our state-of-the-art smart contract. Lunar Pay offers a direct interface, enabling you to craft and oversee diverse payment structures with precision and ease, streamlining your financial operations for optimal results.'}
          />

          <WhyUsItem
            icon={<Shield className={'w-5 h-5'} />}
            title={'Secure and Transparent'}
            description={'Navigate with confidence in a transparent and secure environment, cultivated by Lunar Pay’s adherence to the principles of decentralization. We expose the core of our secure transaction management to you, ensuring integrity and trust in every interaction within the decentralized network.'}
          />

          <WhyUsItem
            icon={<PencilRuler className={'w-5 h-5'} />}
            title={'Tailored to Your Needs'}
            description={'In a world where your financial needs evolve, Lunar Pay adapts, providing a versatile financial ecosystem that facilitates managing various financial avenues, from subscriptions and payroll to team allowances, all unified and streamlined for your convenience and strategic financial planning.'}
          />
        </motion.ul>
      </div>
    </section>
  )
}