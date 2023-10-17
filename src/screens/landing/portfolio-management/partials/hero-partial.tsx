import { Link } from "react-router-dom";

import { cn} from "@/theme/utils.ts";
import { Badge } from "@/components/ui/badge.tsx";

import transferIllustration from "@/assets/media/portfolio-management-illustration.svg";

export function HeroPartial() {
  return (
    <div className={cn([
      "relative container flex-col-reverse lg:flex-row flex flex-1 isolate lg:mx-auto mt-48 lg:mt-60 gap-12 lg:items-center justify-between",
    ])}>
      <div className="flex flex-col w-full max-w-[700px] lg:max-w-none lg:w-1/2">
        <Badge variant={'outline'} className={'mb-2 py-1.5 px-4 font-bold self-start text-gray-500 animate-pulse'}>
          Coming soon on MultiversX
        </Badge>

        <h1 className="text-4xl font-bold text-gray-800 leading-tight max-w-[600px]">
          <span className={'font-bold'}>Beyond Portfolio Management: </span>
          <span className={'font-black'}>Insights at Every Transaction</span>.
        </h1>

        <p className="mt-4 mb-12 text-gray-700">
          Efficiently transfer tokens to multiple recipients and gain a clear view of your spendings and anticipated earnings. With Lunar Pay, transform your transactions with deep insights and forward-looking financial projections.
        </p>

        <Link
          className={'grayscale rounded-full bg-gradient-to-br from-primary to-secondary py-2.5 px-8 self-start hover:px-10 transition-all duration-300'}
          to={'#'}
        >
          <span className={'text-sm text-white font-semibold'}>Get Started</span>
        </Link>
      </div>

      <div className={cn(["max-lg:hidden w-3/2 lg:w-1/2"])}>
        <img alt={'transfer illustration'} src={transferIllustration} className={'object-cover'}/>
      </div>
    </div>
  )
}