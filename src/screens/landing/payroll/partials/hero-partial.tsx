import { cn } from "@/theme/utils.ts";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge.tsx";

import payrollIllustration from "@/assets/media/payroll-illustration.svg";

export function HeroPartial() {
  return (
    <div className={cn([
      "relative container flex-col lg:flex-row flex flex-1 isolate lg:mx-auto mt-48 lg:mt-60 gap-12 lg:items-center",
    ])}>
      <div className="flex flex-col w-full max-w-[700px] lg:max-w-none lg:w-1/2">
        <Badge variant={'outline'} className={'mb-2 py-1.5 px-4 font-bold self-start text-gray-500 animate-pulse'}>
          Coming soon on MultiversX
        </Badge>

        <h1 className="text-4xl font-bold text-gray-800 leading-tight max-w-md">
          <span className={'font-black'}>Digital Payroll, Simplified with LunarPay.</span>
        </h1>

        <p className="mt-4 mb-12 text-gray-700">
          Automating your payroll has never been easier with Lunar Pay. Our cutting-edge platform leverages the
          MultiversX blockchain to help you create and distribute salaries and bonuses seamlessly, securely, and in
          full compliance. Say goodbye to manual crypto payments and hello to a more efficient and hassle-free payroll
          experience.
        </p>

        <Link
          className={'grayscale rounded-full bg-gradient-to-br from-primary to-secondary py-2.5 px-8 self-start hover:px-10 transition-all duration-300'}
          to={'#'}
        >
          <span className={'text-sm text-white font-semibold'}>Get Started</span>
        </Link>
      </div>

      <div className={cn(["w-3/2 lg:w-1/2"])}>
        <img alt={'donation-widget'} src={payrollIllustration} className={'object-cover hover:scale-[1.1] duration-2000'}/>
      </div>
    </div>
  )
}