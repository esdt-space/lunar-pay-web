import { JoinLunarPayRevolution } from "@/components/shared/sections";

import { HeroPartial } from "./partials/hero-partial.tsx";
import { FeaturesPartial} from "./partials/features-partial.tsx";
import { WhyUsPartial } from "./partials/why-us-partial.tsx";

export function Payroll(){

    return (
        <div className={'payroll-page flex flex-col gap-24 lg:gap-48 pb-24 lg:pb-48'}>
            <HeroPartial />
            <FeaturesPartial />
            <WhyUsPartial />

            <JoinLunarPayRevolution
              subtitle={'Looking to modernize your payroll system?'}
              description={'Experience the advantages of Lunar Pay Payroll. Combining user-centric design, consistent payment assurance, and adaptability tailored to your specific demands, we\'re committed to driving your success.'}
            />
        </div>
    );
}