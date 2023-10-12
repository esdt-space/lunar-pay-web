import {Link} from "react-router-dom";

import {cn} from "@/theme/utils";
import {RoutesConfig} from "@/navigation";

import {Badge} from "@/components/ui/badge.tsx";

import easysetupImg from "@/assets/media/easysetup.png";
import cryptoImg from "@/assets/media/crypto.jpeg";
import trustImg from "@/assets/media/trust.jpg";
import userfriendlyUI from "@/assets/media/userfriendlyui.jpg";
import donationIllustration from "@/assets/media/donation-illustration.svg";

import {FeaturesPartial} from "./partials/features-partial.tsx";
import {TargetAudiencePartial} from "./partials/target-audience-partial.tsx";

export function Donations() {
  return (
    <div className={'payroll-page flex flex-col gap-24 lg:gap-48 pb-24 lg:pb-48'}>
      <div className={cn([
        "relative container flex-col-reverse lg:flex-row flex flex-1 isolate lg:mx-auto mt-48 lg:mt-60 gap-12 lg:items-center",
      ])}>
        <div className="flex flex-col w-full max-w-[700px] lg:max-w-none lg:w-1/2">
          <Badge variant={'outline'} className={'mb-2 py-1.5 px-4 font-bold self-start text-gray-500 animate-pulse'}>
            Coming soon on MultiversX
          </Badge>

          <h1 className="text-5xl font-bold text-gray-800 leading-tight">
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

      <div className={cn([
        'relative flex py-8 isolate',
        'before:absolute before:inset-0',
        `before:z-[2] before:shadow-[rgb(255,255,255)_0px_150px_200px_inset,rgb(255,255,255)_0px_-200px_200px_inset]`,
        `after:absolute after:inset-0 after:z-[1] after:bg-gradient-to-br after:from-primary/20 after:to-secondary/20`,
        `after:[mask-image:url('/assets/media/patterns/waves-pattern.svg')] after:[mask-size:64px_32px] after:[mask-repeat:repeat]`,
      ])}>

        <div className={'container flex flex-col gap-12 z-[3]'}>
          <div className={'max-lg:max-w-prose items-center'}>

            <h2 className="text-3xl font-bold mb-10 text-gray-800 leading-tight items-center text-center">
              <span className={'font-black'}>Why Choose Lunar Pay Donations?</span>
            </h2>

            <section className={`py-8 'bg-white`}>
              <div
                className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-center">
                <div className="md:w-1/2 p-4 order-2 md:order-1">
                  <img src={easysetupImg} alt={`Easy Donation Setup`}
                       className="max-w-full mx-auto md:max-w-md rounded-lg"/>
                </div>
                <div
                  className="md:w-1/2 p-20 order-1 md:order-2 bg-gradient-to-r from-white to-transparent rounded-lg"
                  style={{minHeight: '300px'}}>
                  <p className="text-xl font-semibold text-gray-900 mb-4">Easy Donation Setup</p>
                  <p className="text-gray-700 text-lg">With Lunar Pay, setting up your donation platform
                    is as easy as a few clicks. Say goodbye to complicated processes and hello to
                    hassle-free donations.
                  </p>
                </div>
              </div>
            </section>
            <section className={`py-8 'bg-white`}>
              <div
                className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-center">
                <div className="md:w-1/2 p-4 order-1 md:order-2">
                  <img src={cryptoImg} alt={`Crypto Convenience`}
                       className="max-w-full mx-auto md:max-w-md rounded-lg"/>
                </div>
                <div
                  className="md:w-1/2 p-20 order-2 md:order-1 bg-gradient-to-l from-white to-transparent rounded-lg"
                  style={{minHeight: '300px'}}>
                  <p className="text-xl font-semibold text-gray-900 mb-4">Crypto Convenience</p>
                  <p className="text-gray-700 text-lg">Harness the power of cryptocurrency to make
                    giving and receiving donations faster, more secure, and accessible to a global
                    audience.
                  </p>
                </div>
              </div>
            </section>
            <section className={`py-8 'bg-white`}>
              <div
                className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-center">
                <div className="md:w-1/2 p-4 order-2 md:order-1">
                  <img src={trustImg} alt={`Transparency and Trust`}
                       className="max-w-full mx-auto md:max-w-md rounded-lg"
                       style={{maxHeight: '200px'}}/>
                </div>
                <div
                  className="md:w-1/2 p-20 order-1 md:order-2 bg-gradient-to-r from-white to-transparent rounded-lg"
                  style={{minHeight: '300px'}}>
                  <p className="text-xl font-semibold text-gray-900 mb-4">Transparency and Trust</p>
                  <p className="text-gray-700 text-lg">Build trust with your supporters through transparency. Our
                    platform ensures every donation is recorded on the blockchain, providing an immutable and verifiable
                    record.
                  </p>
                </div>
              </div>
            </section>
            <section className={`py-8 'bg-white`}>
              <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-center">
                <div className="md:w-1/2 p-4 order-1 md:order-2">
                  <img src={userfriendlyUI} alt={`User-Friendly Interface`}
                       className="max-w-full mx-auto md:max-w-md rounded-lg"/>
                </div>
                <div
                  className="md:w-1/2 p-20 order-2 md:order-1 bg-gradient-to-l from-white to-transparent rounded-lg"
                  style={{minHeight: '300px'}}>
                  <p className="text-xl font-semibold text-gray-900 mb-4">Enhanced Supporter Engagement</p>
                  <p className="text-gray-700 text-lg">Engage with your donors like never before. Lunar
                    Pay's Donations platform offers features that allow you to communicate, reward,
                    and express gratitude to your supporters.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

      <TargetAudiencePartial/>

      <div className={cn([
        "relative container  isolate lg:mx-auto mt-48 lg:mt-40 gap-12 items-center text-center",
      ])}>
        <div>
          <h4 className="text-4xl font-bold text-gray-900 mb-1 pt-10">Join the Lunar Pay Donations
            Community</h4>
          <p className={'p-10'}>
            Ready to embark on your donation journey with Lunar Pay? Sign up now to start accepting
            cryptocurrency donations and make a meaningful impact on your cause or content.
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
    </div>
  );
}