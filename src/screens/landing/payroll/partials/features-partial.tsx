import { ReactNode } from "react";
import { CalendarRange, TimerReset } from "lucide-react";

import { cn } from "@/theme/utils.ts";
import payrollContractIllustration from '@/assets/media/payroll-contract-illustration.svg';

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
      <div className={'flex-grow bg-blue-50/30 ring-1 ring-blue-50 rounded-lg h-[300px] flex justify-center overflow-hidden'}>
        <img src={payrollContractIllustration} alt={'payroll contract illustration'}
             className={'rotate-12 scale-125 hover:scale-150 duration-2000'}/>
      </div>
      <div className={'flex flex-col text-center space-y-1 lg:items-center'}>
        <h2 className="font-semibold text-gray-900">{props.title}</h2>
        <p className="text-sm text-gray-700 lg:max-w-xl">{props.description}</p>
      </div>
    </li>
  )
}

export function FeaturesPartial() {
  return (
    <div className="container mx-auto p-10">
      <section>
        <h2 className="text-4xl font-bold text-gray-900 mb-4 pt-10">
          Lunar Pay Payroll Services
        </h2>
        <div>Embrace the future of financial management with innovation at its core.</div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          <Item
            icon={<TimerReset className={'mb-5'} />}
            className={'row-span-1'}
            title={'Automated Salary Payments'}
            description={'Lunar Pay redefines payroll. Businesses can establish payroll agreements, allowing employees to claim their wages seamlessly, eliminating delays and manual processing.'}
          />

          <Item
            icon={<CalendarRange className={'mb-5'} />}
            className={'row-span-1 lg:order-3'}
            title={'Tailored Budget Allocations'}
            description={'Set specific financial limits for departments, teams, or particular tasks. Define allowances on a yearly, monthly, or custom-period basis. This structured approach ensures resources are utilized efficiently, with the flexibility for users to draw from predefined funds as tasks and roles demand.'}
          />

          <BigItem
            className={'sm:col-span-2 md:row-span-2 lg:order-2'}
            title={'Contract-to-Payment Seamless Conversion'}
            description={'Go beyond traditional agreements. Draft contracts and send them directly to partners via Lunar Pay. Once approved, these can be instantly converted into actionable payment agreements, bridging the gap between intent and execution.'}
          />
        </ul>
      </section>
    </div>
  )
}