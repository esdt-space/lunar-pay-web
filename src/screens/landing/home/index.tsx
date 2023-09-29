import Spline from '@splinetool/react-spline';

import { cn } from "@/theme/utils.ts";
import { Button } from "@/components/ui/button.tsx";
import { Badge } from "@/components/ui/badge.tsx";

import { HomeFeaturesPartial } from "./partials/features.tsx";

export function HomeScreen() {
  return (
    <div className={'flex flex-col gap-48 pb-48'}>
      <div className={cn([
        "container flex flex-1 isolate lg:mx-auto mt-48 lg:mt-40 gap-12 items-center",
      ])}>
          <div className="w-full max-w-[540px] lg:max-w-none lg:w-1/2">
            <Badge variant={'outline'} className={'mb-2 p-2 px-4 text-primary font-semibold'}>
              Live on MultiversX DEVNET
            </Badge>

            <h2 className="text-4xl font-bold text-gray-800 max-w-[400px] leading-tight">
              <span className={'font-black'}>Payments</span> made simple for <span className={'font-black'}>WEB3 businesses</span>.
            </h2>
            <p className="mt-8 text-gray-600">
              Lunar Pay is reshaping the financial landscape of WEB3. We offer individuals, businesses, investors, and teams enhanced flexibility and streamlined access to tokens.
            </p>
            <p className="mb-12 mt-4 text-gray-600">
              Introducing the Vault — a groundbreaking smart contract designed to act as your personalized funding wallet. With the Vault, you can now establish and manage payment agreements tailored to your needs, setting the stage for a multitude of financial utilities in the WEB3 space.
            </p>

            <Button size={'lg'}>GET STARTED</Button>
          </div>

          <div className={cn([
            "-right-[25%] -top-[10%] md:-right-6 sm:top-auto",
            "absolute lg:static md:w-5/12 lg:w-1/2 -z-10 pointer-events-none opacity-50 sm:opacity-100",
          ])}>
            <Spline className='w-full' scene="https://prod.spline.design/jarUpvCPzoBGEUIe/scene.splinecode"/>
          </div>
      </div>

      <HomeFeaturesPartial />
    </div>
  )
}