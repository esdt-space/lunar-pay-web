import { JoinLunarPayRevolution } from "@/components/shared/sections";

import { HeroPartial } from "./partials/hero-partial.tsx";
import { FeaturesPartial } from "./partials/features-partial.tsx";

export function PortfolioManagement() {

  return (
    <div className={'payroll-page flex flex-col gap-24 lg:gap-48 pb-24 lg:pb-48 bg-gray-50'}>
      <HeroPartial />
      <FeaturesPartial />

      <JoinLunarPayRevolution
        description={'Revolutionize the way you manage and monitor transactions. Begin your journey with Lunar Pay and embrace a new standard in portfolio management.'}
      />
    </div>
  );
}