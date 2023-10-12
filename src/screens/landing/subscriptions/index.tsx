import {Link} from "react-router-dom";

import {RoutesConfig} from "@/navigation";

import { HeroPartial } from "./partials/hero-partial.tsx";
import { FeaturesPartial } from "./partials/features-partial.tsx";
import { BenefitsPartial } from "./partials/benefits-partial.tsx";
import { WhyUsPartial } from "./partials/why-us-partial.tsx";

export function Subscriptions() {

  return (
    <div className={'payroll-page flex flex-col gap-24 lg:gap-48 pb-24 lg:pb-48 bg-gray-50'}>
      <HeroPartial/>
      <BenefitsPartial/>
      <FeaturesPartial/>
      <WhyUsPartial/>

      <div className={"flex flex-col container lg:mx-auto items-center text-center"}>
          <h4 className="text-4xl font-bold text-gray-900 mb-1 pt-10">Join the Lunar Pay Revolution</h4>
          <h5 className="text-xl font-medium text-gray-400 mb-4">Ready to revolutionize your subscriptions management process?</h5>

          <p className={'my-8 max-w-4xl'}>
            Discover the power of Lunar Pay Subscriptions and take your business to new heights. With user-friendly
            features, dependable revenue, and the flexibility to adapt to your unique needs, we're here to help you
            succeed.
          </p>

          <div className={'items-center text-center'}>
            <Link
              className={'rounded-full bg-gradient-to-br from-primary to-secondary py-2.5 px-8 self-start hover:px-10 transition-all duration-300 items-center'}
              to={RoutesConfig.dashboard}
            >
              <span className={'text-sm text-white font-semibold'}>Get Started</span>
            </Link>
          </div>
      </div>
    </div>
  );
}