import {cn} from "@/theme/utils";
import {RoutesConfig} from "@/navigation";
import {Link} from "react-router-dom";

import scaling from "@/assets/media/scaling.jpg";

export function Subscriptions(){

    return (
        <div className={'payroll-page flex flex-col gap-24 lg:gap-48 pb-24 lg:pb-48'}>
            <div className={cn([
                "relative container  isolate lg:mx-auto mt-48 lg:mt-40 gap-12 items-center",
            ])}>
                <div className="flex flex-col w-full text-center pr-40 pl-40">

                    <h1 className="text-5xl font-bold mb-10 text-gray-800 leading-tight items-center">
                        <span className={'font-black'}>Unlock Crypto Subscription Revenue with Lunar Pay</span>.
                    </h1>

                    <p className="text-lg mb-10 leading-loose">
                        Generate subscription revenue in seconds with Lunar Pay's cutting-edge crypto subscription solution. Elevate your business, maximize conversion, and ensure long-term customer retention.
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
                            <span className={'font-black'}>Real-Time Revenue Growth</span>
                        </h2>
                        <p className={'max-w-3xl text-center m-auto'}>
                            Watch your revenue surge in real-time. Lunar Pay's Subscriptions flow seamlessly into your wallet, reducing transaction costs and providing immediate capital availability.
                        </p>
                        <section  className={`py-8 'bg-white`}>
                            <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-center">
                                <div className="md:w-1/2 p-4 order-2 md:order-1">
                                    <img src={scaling} alt={`Made for Scaling`} className="max-w-full mx-auto md:max-w-md rounded-lg" />
                                </div>
                                <div className="md:w-1/2 p-20 order-1 md:order-2 bg-gradient-to-r from-white to-transparent rounded-lg" style={{minHeight:'300px'}}>
                                    <p className="text-xl font-semibold text-gray-900 mb-4">Developed for Scaling</p>
                                    <p className="text-gray-700 text-lg">Grow your business with frictionless subscriptions. In just three clicks, users can subscribe to your Web3 product or service with money streams that flow in perpetuity, mitigating non-payment risk and reducing churn.
                                    </p>
                                </div>
                            </div>
                        </section>

                    </div>
                </div>
            </div>

            <div className="bg-gray-100 ">
                <div className="container mx-auto p-10 pb-40">
                    <section className="text-center">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4 pt-10">
                            Made for Your Needs
                        </h2>
                        <div className={'flex mt-20'}>
                            <ul className="mt-4">
                                <li className="flex items-center mb-4 p-5">
                                    <div className="rounded-full bg-gradient-to-br from-primary to-secondary text-white font-semibold w-10 h-10 flex items-center justify-center mr-4"></div>
                                    <div>
                                        <h2 className="text-xl font-semibold text-gray-900 text-left">Streamlined Experience</h2>
                                        <p className="text-gray-700 text-left">
                                            Enable customers to subscribe with crypto in as few as three clicks.
                                        </p>
                                    </div>
                                </li>
                                <li className="flex items-center mb-4 p-5">
                                    <div className="rounded-full bg-gradient-to-br from-primary to-secondary text-white font-semibold w-10 h-10 flex items-center justify-center mr-4"></div>
                                    <div>
                                        <h2 className="text-xl font-semibold text-gray-900 text-left">Highly Customizable Design</h2>
                                        <p className="text-gray-700 text-left">
                                            Match your checkout to your brand colors, typography, and more.
                                        </p>
                                    </div>
                                </li>
                            </ul>
                            <ul className="mt-4">
                                <li className="flex items-center mb-4 p-5">
                                    <div className="rounded-full bg-gradient-to-br from-primary to-secondary text-white font-semibold w-10 h-10 flex items-center justify-center mr-4"></div>
                                    <div>
                                        <h2 className="text-xl font-semibold text-gray-900 text-left">Easy Integration</h2>
                                        <p className="text-gray-700 text-left">
                                             Implement your Subscription Checkout with just a few lines of code.
                                        </p>
                                    </div>
                                </li>
                                <li className="flex items-center mb-4 p-5">
                                    <div className="rounded-full bg-gradient-to-br from-primary to-secondary text-white font-semibold w-10 h-10 flex items-center justify-center mr-4"></div>
                                    <div>
                                        <h2 className="text-xl font-semibold text-gray-900 text-left">Simple Accounting</h2>
                                        <p className="text-gray-700 text-left">
                                            Easily retrieve and export granular stream data as .csv.
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </section>
                </div>
            </div>


            <section className={cn([
                "container bg-blue-950 text-white",
                "2xl:rounded-2xl box-border"
            ])}>
                <div className="py-20 lg:px-6">
                    <div>
                        <div className={'flex gap-2 items-center'}>
                            <div className={'w-2 bg-gradient-to-bl from-primary to-secondary rounded'}>&nbsp;</div>
                            <h4 className="text-xl font-semibold leading-none text-slate-300">Why Choose Lunar Pay?</h4>
                        </div>

                        <div className="text-3xl text-white font-semibold tracking-tight max-w-xl mt-3">
                            <span>More Features, </span>
                            <span className={'opacity-30'}> More Benefits</span>
                        </div>
                    </div>

                    <div>
                        <ul className="grid grid-cols-3 gap-12 mt-16">
                            <li>
                                <h3 className="text-md leading-none font-bold">Automated Billing</h3>
                                <p className="mt-1 text-sm leading-normal text-slate-300/80">
                                    Save time and resources. Lunar Pay takes care of billing automatically, ensuring your customers are charged on time, every time.
                                </p>
                            </li>
                            <li>
                                <h3 className="text-md leading-none font-bold">Dependable Revenue Streams</h3>
                                <p className="mt-1 text-sm leading-normal text-slate-300/80">
                                    Say goodbye to unpredictable income. With Lunar Pay Subscriptions, you'll enjoy steady, recurring revenue, helping you plan and grow your business with confidence.
                                </p>
                            </li>
                            <li>
                                <h3 className="text-md leading-none font-bold">Customer Insights</h3>
                                <p className="mt-1 text-sm leading-normal text-slate-300/80">
                                    Understand your subscribers better. Our analytics tools provide valuable data on user behavior, allowing you to make informed decisions to enhance your subscription offerings.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>


            <div className={cn([
                "relative container  isolate lg:mx-auto mt-48 lg:mt-40 gap-12 items-center text-center",
            ])}>
                <div>

                    <h4 className="text-4xl font-bold text-gray-900 mb-1 pt-10">Join the Lunar Pay Revolution</h4>
                    <h4 className="text-xl font-bold text-gray-400 mb-4">Ready to revolutionize your subscription process?</h4>

                    <p className={'p-10'}>
                        Discover the power of Lunar Pay Subscriptions and take your business to new heights. With user-friendly features, dependable revenue, and the flexibility to adapt to your unique needs, we're here to help you succeed.
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