import { JoinLunarPayRevolution } from "@/components/shared/sections";

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

      <JoinLunarPayRevolution
        subtitle={'Ready to revolutionize your subscriptions management process?'}
        description={'Discover the power of Lunar Pay Subscriptions and take your business to new heights. With user-friendly features, dependable revenue, and the flexibility to adapt to your unique needs, we\'re here to help you succeed.'}
      />
    </div>
  );
}