import { cn } from "@/theme/utils.ts";
import { Link } from "react-router-dom";
import { RoutesConfig } from "@/navigation";

export function HeroPartial() {
  return (
    <div className={cn([
      "relative container  isolate lg:mx-auto mt-48 lg:mt-40 gap-12 items-center",
    ])}>
      <div className="flex flex-col w-full text-center pr-40 pl-40">
        <h1 className="text-5xl font-bold mb-10 text-gray-800 leading-tight items-center">
          <span className={'font-black'}>Digital Payroll, Simplified with LunarPay.</span>
        </h1>

        <p className="text-lg mb-10 leading-loose">
          Automating your payroll has never been easier with Lunar Pay. Our cutting-edge platform leverages the
          MultiversX blockchain to help you create and distribute salaries and bonuses seamlessly, securely, and in
          full compliance. Say goodbye to manual crypto payments and hello to a more efficient and hassle-free payroll
          experience.
        </p>

        <div className={'items-center text-center'}>
          <Link
            className={'rounded-full bg-gradient-to-br from-primary to-secondary py-2.5 px-8 self-start hover:px-10 transition-all duration-300'}
            to={RoutesConfig.dashboard}
          >
            <span className={'text-sm text-white font-semibold'}>Get Started</span>
          </Link>
        </div>
      </div>
    </div>
  )
}