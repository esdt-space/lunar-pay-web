import {Link} from "react-router-dom";

import { cn} from "@/theme/utils";

import { Badge } from "@/components/ui/badge.tsx";
import { JoinLunarPayRevolution } from "@/components/shared/sections";

import donationIllustration from "@/assets/media/donation-illustration.svg";

import { FeaturesPartial } from "./partials/features-partial.tsx";
import { TargetAudiencePartial } from "./partials/target-audience-partial.tsx";

export function Donations() {
  return (
    <div className={'payroll-page flex flex-col gap-24 lg:gap-48 pb-24 lg:pb-48 bg-gray-50'}>
      <div className={cn([
        "relative container flex-col lg:flex-row flex flex-1 isolate lg:mx-auto mt-48 lg:mt-60 gap-12 lg:items-center",
      ])}>
        <div className="flex flex-col w-full max-w-[700px] lg:max-w-none lg:w-1/2">
          <Badge variant={'outline'} className={'mb-2 py-1.5 px-4 font-bold self-start text-gray-500 animate-pulse'}>
            Coming soon on MultiversX
          </Badge>

          <h1 className="text-4xl font-bold text-gray-800 leading-tight">
            <span>Support and Empower with </span>
            <span className={'font-black'}>Lunar Pay Donations</span>.
          </h1>

          <p className="mt-4 mb-12 text-gray-700">
            Welcome to Lunar Pay Donations, the ultimate solution for seamlessly accepting and managing
            recurring donations donations on MultiversX. Whether you're a content creator, a nonprofit organization, or
            an
            individual with a cause, Lunar Pay Donations empowers you to receive support in the digital age.
          </p>

          <Link
            className={'grayscale rounded-full bg-gradient-to-br from-primary to-secondary py-2.5 px-8 self-start hover:px-10 transition-all duration-300'}
            to={'#'}
          >
            <span className={'text-sm text-white font-semibold'}>Get Started</span>
          </Link>
        </div>

        <div className={cn(["w-3/2 lg:w-1/2 max-w-2xl"])}>
          <img alt={'donation-widget'} src={donationIllustration} className={'object-cover'}/>
        </div>
      </div>

      <FeaturesPartial/>
      <TargetAudiencePartial/>

      <JoinLunarPayRevolution
        subtitle={'Ready to embark on your donation journey with Lunar Pay?'}
        description={'Sign up now to start accepting cryptocurrency donations and make a meaningful impact on your cause or content.'}
      />
    </div>
  );
}