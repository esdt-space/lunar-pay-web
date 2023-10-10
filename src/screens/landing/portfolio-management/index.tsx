import {cn} from "@/theme/utils";
import {RoutesConfig} from "@/navigation";
import {Link} from "react-router-dom";

import transfersImg from "@/assets/media/transfers.png";
import analyticsImg from "@/assets/media/analytics.jpeg";
import trustImg from "@/assets/media/trust.jpg";

export function PortfolioManagement(){

    return (
        <div className={'payroll-page flex flex-col gap-24 lg:gap-48 pb-24 lg:pb-48'}>
            <div className={cn([
                "relative container  isolate lg:mx-auto mt-48 lg:mt-40 gap-12 items-center",
            ])}>
                <div className="flex flex-col w-full text-center pr-40 pl-40">

                    <h1 className="text-5xl font-bold mb-10 text-gray-800 leading-tight items-center">
                        <span className={'font-black'}>Elevate Your Investments with Lunar Pay Portfolio Management.</span>
                    </h1>

                    <p className="text-lg mb-10 leading-loose">
                        Streamline token transfers to multiple recipients in a single transaction, unlocking unparalleled cost efficiency and precision. Dive deeper into the world of investment by entrusting Lunar Pay Portfolio Management with the power to optimize your portfolio.
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
                            <span className={'font-black'}>Why Choose Lunar Pay Portfolio Management?</span>
                        </h2>

                        <section  className={`py-8 'bg-white`}>
                            <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-center">
                                <div className="md:w-1/2 p-4 order-2 md:order-1">
                                    <img src={transfersImg} alt={`Easy Donation Setup`} className="max-w-full mx-auto md:max-w-md rounded-lg" />
                                </div>
                                <div className="md:w-1/2 p-20 order-1 md:order-2 bg-gradient-to-r from-white to-transparent rounded-lg" style={{minHeight:'300px'}}>
                                    <p className="text-xl font-semibold text-gray-900 mb-4">Efficient Token Transfers</p>
                                    <p className="text-gray-700 text-lg">Say goodbye to time-consuming and costly individual transactions. Lunar Pay Portfolio Management empowers you to send tokens to multiple recipients in one swift operation, saving you time and transaction fees.
                                    </p>
                                </div>
                            </div>
                        </section>
                        <section  className={`py-8 'bg-white`}>
                            <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-center">
                                <div className="md:w-1/2 p-4 order-1 md:order-2">
                                    <img src={analyticsImg} alt={`Crypto Convenience`} className="max-w-full mx-auto md:max-w-md rounded-lg" />
                                </div>
                                <div className="md:w-1/2 p-20 order-2 md:order-1 bg-gradient-to-l from-white to-transparent rounded-lg" style={{minHeight:'300px'}}>
                                    <p className="text-xl font-semibold text-gray-900 mb-4">Real-Time Portfolio Insights</p>
                                    <p className="text-gray-700 text-lg">Stay ahead of the curve with real-time tracking and reporting. Lunar Pay provides you with a comprehensive view of your portfolio's performance, allowing you to make data-driven investment choices.
                                    </p>
                                </div>
                            </div>
                        </section>
                        <section  className={`py-8 'bg-white`}>
                            <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-center">
                                <div className="md:w-1/2 p-4 order-2 md:order-1">
                                    <img src={trustImg} alt={`Transparency and Trust`} className="max-w-full mx-auto md:max-w-md rounded-lg" style={{maxHeight:'200px'}} />
                                </div>
                                <div className="md:w-1/2 p-20 order-1 md:order-2 bg-gradient-to-r from-white to-transparent rounded-lg" style={{minHeight:'300px'}}>
                                    <p className="text-xl font-semibold text-gray-900 mb-4">Security and Trust</p>
                                    <p className="text-gray-700 text-lg">Rest easy knowing that your assets are secure. Lunar Pay prioritizes the highest security standards, ensuring your investments are protected against threats.
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
                            Features of Lunar Pay Portfolio Management
                        </h2>
                        <div className={'flex mt-20'}>
                            <ul className="mt-4">
                                <li className="flex items-center mb-4 p-5">
                                    <div className="rounded-full bg-gradient-to-br from-primary to-secondary text-white font-semibold w-10 h-10 flex items-center justify-center mr-4"></div>
                                    <div>
                                        <h2 className="text-xl font-semibold text-gray-900 text-left">Multi-Recipient Transfers</h2>
                                        <p className="text-gray-700 text-left">
                                            Effortlessly distribute tokens to multiple recipients with just one transaction, reducing costs and simplifying asset management.
                                        </p>
                                    </div>
                                </li>
                                <li className="flex items-center mb-4 p-5">
                                    <div className="rounded-full bg-gradient-to-br from-primary to-secondary text-white font-semibold w-10 h-10 flex items-center justify-center mr-4"></div>
                                    <div>
                                        <h2 className="text-xl font-semibold text-gray-900 text-left">Comprehensive Analytics</h2>
                                        <p className="text-gray-700 text-left">
                                            Gain valuable insights into your portfolio's performance, enabling you to make informed decisions and optimize your investments.
                                        </p>
                                    </div>
                                </li>
                            </ul>
                            <ul className="mt-4">
                                <li className="flex items-center mb-4 p-5">
                                    <div className="rounded-full bg-gradient-to-br from-primary to-secondary text-white font-semibold w-10 h-10 flex items-center justify-center mr-4"></div>
                                    <div>
                                        <h2 className="text-xl font-semibold text-gray-900 text-left">Secure Wallet Integration</h2>
                                        <p className="text-gray-700 text-left">
                                            Integrate your preferred secure wallet to seamlessly manage your assets and maintain complete control.
                                        </p>
                                    </div>
                                </li>
                                <li className="flex items-center mb-4 p-5">
                                    <div className="rounded-full bg-gradient-to-br from-primary to-secondary text-white font-semibold w-10 h-10 flex items-center justify-center mr-4"></div>
                                    <div>
                                        <h2 className="text-xl font-semibold text-gray-900 text-left">User-Friendly Interface</h2>
                                        <p className="text-gray-700 text-left">
                                            Our intuitive platform is designed for both beginners and experienced investors, making portfolio management accessible to all.
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
                            <h4 className="text-xl font-semibold leading-none text-slate-300">Who Benefits from Lunar Pay Portfolio Management?</h4>
                        </div>

                    </div>

                    <div>
                        <ul className="grid grid-cols-3 gap-12 mt-16">
                            <li>
                                <h3 className="text-md leading-none font-bold">Crypto Investors:</h3>
                                <p className="mt-1 text-sm leading-normal text-slate-300/80">
                                    Optimize your cryptocurrency investments with efficient token transfers and expert guidance.
                                </p>
                            </li>
                            <li>
                                <h3 className="text-md leading-none font-bold">Financial Advisors</h3>
                                <p className="mt-1 text-sm leading-normal text-slate-300/80">
                                    Expand your portfolio management services and provide clients with cutting-edge solutions.
                                </p>
                            </li>
                            <li>
                                <h3 className="text-md leading-none font-bold">Asset Managers</h3>
                                <p className="mt-1 text-sm leading-normal text-slate-300/80">
                                    Streamline asset distribution and enhance your clients' investment experience.
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

                    <h4 className="text-4xl font-bold text-gray-900 mb-1 pt-10">Join the Lunar Pay Portfolio Management Revolution</h4>
                    <p className={'p-10'}>
                        Ready to take your investments to the next level? Start now and experience the future of portfolio management with Lunar Pay.
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