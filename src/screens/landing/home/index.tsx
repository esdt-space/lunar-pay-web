import { Link } from "react-router-dom";
import Spline from '@splinetool/react-spline';

import { cn } from "@/theme/utils.ts";
import { RoutesConfig } from "@/navigation";

import { Badge } from "@/components/ui/badge.tsx";

import { WhyUsPartial } from "./partials/why-us-partial.tsx";
import { HomeFeaturesPartial } from "./partials/features.tsx";
import { StartTodayPartial } from "./partials/start-today-partial.tsx";

export function HomeScreen() {
  return (
    <div className={'flex flex-col gap-24 lg:gap-48 pb-24 lg:pb-48'}>
      <div className={cn([
        "relative container flex flex-1 isolate lg:mx-auto mt-48 lg:mt-40 gap-12 items-center",
      ])}>
          <div className="flex flex-col w-full max-w-[540px] lg:max-w-none lg:w-1/2">
            <Badge variant={'outline'} className={'mb-2 py-1.5 px-4 font-bold self-start text-gray-600'}>
              Live on MultiversX DEVNET
            </Badge>

            <h2 className="text-4xl font-bold text-gray-800 max-w-[400px] leading-tight">
              <span className={'font-black'}>Payments</span> made simple for <span className={'font-black'}>WEB3 businesses</span>.
            </h2>
            <p className="mt-8 text-gray-700">
              Lunar Pay is reshaping the financial landscape of WEB3. We offer individuals, businesses, investors, and teams enhanced flexibility and streamlined access to tokens.
            </p>
            <p className="mb-12 mt-4 text-gray-700">
              Introducing the Vault — a groundbreaking smart contract designed to act as your personalized funding wallet. With the Vault, you can now establish and manage payment agreements tailored to your needs, setting the stage for a multitude of financial utilities in the WEB3 space.
            </p>

            <Link
              className={'rounded-full bg-gradient-to-br from-primary to-secondary py-2.5 px-8 self-start hover:px-10 transition-all duration-300'}
              to={RoutesConfig.dashboard}
            >
              <span className={'text-sm text-white font-semibold'}>Launch App</span>
            </Link>
          </div>

          <div className={cn([
            "-right-[220px] -top-[340px] h-[600px] md:-right-6 sm:top-auto",
            "absolute lg:static md:w-5/12 lg:w-1/2 -z-10 pointer-events-none opacity-50 sm:opacity-100",
          ])}>
            <Spline className='w-full' scene="https://prod.spline.design/jarUpvCPzoBGEUIe/scene.splinecode"/>
          </div>
      </div>

      <WhyUsPartial />
      <HomeFeaturesPartial />
      <StartTodayPartial />
    </div>
  )
}