import { Link } from "react-router-dom";

import { cn } from "@/theme/utils.ts";
import { Badge } from "@/components/ui/badge.tsx";

import subscriptionIllustration from "@/assets/media/subscription-illustration.svg";

export function HeroPartial() {
  return (
    <div className={cn([
      "relative container flex-col lg:flex-row flex flex-1 isolate lg:mx-auto mt-48 lg:mt-60 gap-12 lg:items-center",
    ])}>
      <div className="flex flex-col w-full max-w-[700px] lg:max-w-none lg:w-1/2">
        <Badge variant={'outline'} className={'mb-2 py-1.5 px-4 font-bold self-start text-gray-500 animate-pulse'}>
          Coming soon on MultiversX
        </Badge>

        <h1 className="text-4xl font-bold text-gray-800 leading-tight">
          <span className={'font-black'}>Unlock Recurring Crypto Subscription with Lunar Pay</span>.
        </h1>

        <p className="mt-4 mb-12 text-gray-700">
          Generate subscription revenue in seconds with Lunar Pay's cutting-edge crypto subscription solution. Elevate your business, maximize conversion, and ensure long-term customer retention.
        </p>

        <Link
          className={'grayscale rounded-full bg-gradient-to-br from-primary to-secondary py-2.5 px-8 self-start hover:px-10 transition-all duration-300'}
          to={'#'}
        >
          <span className={'text-sm text-white font-semibold'}>Get Started</span>
        </Link>
      </div>

      <div className={cn(["w-3/2 lg:w-1/2 max-w-2xl"])}>
        <img alt={'donation-widget'} src={subscriptionIllustration} className={'object-cover'}/>
      </div>
    </div>
  )
}