import Spline from '@splinetool/react-spline';

import { cn } from "@/theme/utils.ts";
import { Button } from "@/components/ui/button.tsx";
import {Badge} from "@/components/ui/badge.tsx";

export function HomeScreen() {
  return (
    <div className={'flex min-h-screen'}>
      <div className={cn([
        "isolate flex lg:mx-auto mt-24 gap-12 items-center",
        "px-4 sm:px-12 xl:max-w-6xl xl:px-0"
      ])}>
          <div className="w-full max-w-[540px] lg:max-w-none lg:w-1/2">
            <Badge variant={'outline'} className={'mb-2 p-2 px-4 text-primary font-semibold'}>
              Live on MultiversX DEVNET
            </Badge>

            <h2 className="text-4xl font-bold text-gray-800 max-w-[400px] leading-tight">
              <span className={'font-black'}>Payments</span> made simple for <span className={'font-black'}>WEB3 businesses</span>.
            </h2>
            <p className="mt-8 text-gray-600">
              Lunar Pay is helping to create a future where money move more freely; giving individuals, businesses, investors and teams more flexibility and easier access to tokens.
            </p>
            <p className="mb-12 mt-4 text-gray-600">Nobis minus voluptatibus pariatur dignissimos libero quaerat iure expedita at? Asperiores nemo possimus nesciunt dicta veniam aspernatur quam mollitia.</p>

            <Button size={'lg'}>GET STARTED</Button>
          </div>

          <div className={cn([
            "-right-[25%] -top-[10%] md:-right-6 sm:top-auto",
            "absolute lg:static md:w-5/12 lg:w-1/2 -z-10 pointer-events-none opacity-50 sm:opacity-100",
          ])}>
            <Spline className='w-full' scene="https://prod.spline.design/jarUpvCPzoBGEUIe/scene.splinecode"/>
          </div>
      </div>
    </div>
  )
}