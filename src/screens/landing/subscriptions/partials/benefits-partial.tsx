import { ReactNode } from "react";
import { Award, Cpu } from "lucide-react";

import { cn } from "@/theme/utils.ts";

type ItemProps = {
  title: string;
  description: string;
  className?: string;
  icon?: ReactNode;
}

function Item(props: ItemProps) {
  return (
    <li className={cn(["bg-white space-y-3 p-8 rounded ring-1 ring-slate-200", props.className])}>
      {props.icon}
      <div className={'flex-1 space-y-1'}>
        <h2 className="font-semibold text-gray-900">{props.title}</h2>
        <p className="text-sm text-gray-700 max-w-md">{props.description}</p>
      </div>
    </li>
  )
}

function BigItem(props: ItemProps) {
  return (
    <li className={cn(["bg-white flex flex-col space-y-3 shadow p-8 rounded ring-1 ring-slate-200", props.className])}>
      <div className={'flex-grow bg-blue-50/50 rounded-lg min-h-[300px]'}></div>
      <div className={'flex flex-col text-center space-y-1 lg:items-center'}>
        <h2 className="font-semibold text-gray-900">{props.title}</h2>
        <p className="text-sm text-gray-700 lg:max-w-xl">{props.description}</p>
      </div>
    </li>
  )
}

export function BenefitsPartial() {
  return (
    <div className="container mx-auto p-10">
      <section>
        <h2 className="text-4xl font-bold text-gray-900 mb-4 pt-10">
          Unlock the Power of Blockchain Subscriptions
        </h2>
        <div>Craft an elite crypto subscription experience now. Boost conversions and sustain customer loyalty.</div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          <Item
            icon={<Award className={'mb-5'} />}
            className={'row-span-1'}
            title={'Experience'}
            description={'Leverage over 15 years of profound experience with the Lunar Pay team, veterans in crafting enterprise solutions within the finance and technology sectors.'}
          />

          <Item
            icon={<Cpu className={'mb-5'} />}
            className={'row-span-1 lg:order-3'}
            title={'Technology'}
            description={'Lunar Pay replaces outdated, cumbersome financial management practices. Step into a new epoch of financial management, where automation, precision, and efficiency are enhanced by the seamless capabilities of blockchain technology.'}
          />

          <BigItem
            className={'sm:col-span-2 md:row-span-2 lg:order-2'}
            title={'Flexibility'}
            description={'We understand that as your business grows, your financial strategies and requirements may shift. Lunar Pay ensures that your financial tools, subscriptions, and strategies evolve in tandem with your enterprise.'}
          />
        </ul>
      </section>
    </div>
  )
}