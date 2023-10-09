import {cn} from "@/theme/utils";
import {RoutesConfig} from "@/navigation";
import {Link} from "react-router-dom";

import easysetupImg from "@/assets/media/easysetup.png";
import cryptoImg from "@/assets/media/crypto.jpeg";
import trustImg from "@/assets/media/trust.jpg";
import userfriendlyUI from "@/assets/media/userfriendlyui.jpg";

export function Donations(){

    return (
        <div className={'payroll-page flex flex-col gap-24 lg:gap-48 pb-24 lg:pb-48'}>
            <div className={cn([
                "relative container  isolate lg:mx-auto mt-48 lg:mt-40 gap-12 items-center",
            ])}>
                <div className="flex flex-col w-full text-center pr-40 pl-40">

                    <h1 className="text-5xl font-bold mb-10 text-gray-800 leading-tight items-center">
                        <span className={'font-black'}>Support and Empower with Lunar Pay Donations</span>.
                    </h1>

                    <p className="text-lg mb-10 leading-loose">
                        Welcome to Lunar Pay Donations, the ultimate solution for seamlessly accepting and managing cryptocurrency donations. Whether you're a content creator, a nonprofit organization, or an individual with a cause, Lunar Pay Donations empowers you to receive support in the digital age.
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
                            <span className={'font-black'}>Why Choose Lunar Pay Donations?</span>
                        </h2>

                        <section  className={`py-8 'bg-white`}>
                            <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-center">
                                <div className="md:w-1/2 p-4 order-2 md:order-1">
                                    <img src={easysetupImg} alt={`Easy Donation Setup`} className="max-w-full mx-auto md:max-w-md rounded-lg" />
                                </div>
                                <div className="md:w-1/2 p-20 order-1 md:order-2 bg-gradient-to-r from-white to-transparent rounded-lg" style={{minHeight:'300px'}}>
                                    <p className="text-xl font-semibold text-gray-900 mb-4">Easy Donation Setup</p>
                                    <p className="text-gray-700 text-lg">With Lunar Pay, setting up your donation platform is as easy as a few clicks. Say goodbye to complicated processes and hello to hassle-free donations.
                                    </p>
                                </div>
                            </div>
                        </section>
                        <section  className={`py-8 'bg-white`}>
                            <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-center">
                                <div className="md:w-1/2 p-4 order-1 md:order-2">
                                    <img src={cryptoImg} alt={`Crypto Convenience`} className="max-w-full mx-auto md:max-w-md rounded-lg" />
                                </div>
                                <div className="md:w-1/2 p-20 order-2 md:order-1 bg-gradient-to-l from-white to-transparent rounded-lg" style={{minHeight:'300px'}}>
                                    <p className="text-xl font-semibold text-gray-900 mb-4">Crypto Convenience</p>
                                    <p className="text-gray-700 text-lg">Harness the power of cryptocurrency to make giving and receiving donations faster, more secure, and accessible to a global audience.
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
                                    <p className="text-xl font-semibold text-gray-900 mb-4">Transparency and Trust</p>
                                    <p className="text-gray-700 text-lg">Build trust with your supporters through transparency. Our platform ensures every donation is recorded on the blockchain, providing an immutable and verifiable record.
                                    </p>
                                </div>
                            </div>
                        </section>
                        <section  className={`py-8 'bg-white`}>
                            <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-center">
                                <div className="md:w-1/2 p-4 order-1 md:order-2">
                                    <img src={userfriendlyUI} alt={`User-Friendly Interface`} className="max-w-full mx-auto md:max-w-md rounded-lg" />
                                </div>
                                <div className="md:w-1/2 p-20 order-2 md:order-1 bg-gradient-to-l from-white to-transparent rounded-lg" style={{minHeight:'300px'}}>
                                    <p className="text-xl font-semibold text-gray-900 mb-4">Enhanced Supporter Engagement</p>
                                    <p className="text-gray-700 text-lg">Engage with your donors like never before. Lunar Pay's Donations platform offers features that allow you to communicate, reward, and express gratitude to your supporters.
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
                            Features of Lunar Pay Donations
                        </h2>
                        <div className={'flex mt-20'}>
                            <ul className="mt-4">
                                <li className="flex items-center mb-4 p-5">
                                    <div className="rounded-full bg-gradient-to-br from-primary to-secondary text-white font-semibold w-10 h-10 flex items-center justify-center mr-4"></div>
                                    <div>
                                        <h2 className="text-xl font-semibold text-gray-900 text-left">Customizable Donation Pages</h2>
                                        <p className="text-gray-700 text-left">
                                            Design your donation pages to match your brand, cause, or campaign, creating a unique and engaging giving experience.
                                        </p>
                                    </div>
                                </li>
                                <li className="flex items-center mb-4 p-5">
                                    <div className="rounded-full bg-gradient-to-br from-primary to-secondary text-white font-semibold w-10 h-10 flex items-center justify-center mr-4"></div>
                                    <div>
                                        <h2 className="text-xl font-semibold text-gray-900 text-left">Real-time Donation Tracking</h2>
                                        <p className="text-gray-700 text-left">
                                            Stay updated with real-time insights into your fundraising progress, enabling you to adjust your strategy and reach your goals effectively.
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
                                            Easily integrate Lunar Pay Donations into your website, social media, or blog with our developer-friendly tools and plugins.
                                        </p>
                                    </div>
                                </li>
                                <li className="flex items-center mb-4 p-5">
                                    <div className="rounded-full bg-gradient-to-br from-primary to-secondary text-white font-semibold w-10 h-10 flex items-center justify-center mr-4"></div>
                                    <div>
                                        <h2 className="text-xl font-semibold text-gray-900 text-left">Donor Analytics</h2>
                                        <p className="text-gray-700 text-left">
                                            Understand your donors better with in-depth analytics, helping you tailor your communication and engagement strategies.
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
                            <h4 className="text-xl font-semibold leading-none text-slate-300">Who Benefits from Lunar Pay Donations?</h4>
                        </div>

                    </div>

                    <div>
                        <ul className="grid grid-cols-3 gap-12 mt-16">
                            <li>
                                <h3 className="text-md leading-none font-bold">Content Creators</h3>
                                <p className="mt-1 text-sm leading-normal text-slate-300/80">
                                    Monetize your content and engage with your audience while receiving support from crypto enthusiasts.
                                </p>
                            </li>
                            <li>
                                <h3 className="text-md leading-none font-bold">Nonprofit Organizations</h3>
                                <p className="mt-1 text-sm leading-normal text-slate-300/80">
                                    Streamline your fundraising efforts, increase transparency, and reach a global donor base.
                                </p>
                            </li>
                            <li>
                                <h3 className="text-md leading-none font-bold">Individuals with Causes</h3>
                                <p className="mt-1 text-sm leading-normal text-slate-300/80">
                                    Rally support for your personal projects, initiatives, or charitable endeavors with ease.
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

                    <h4 className="text-4xl font-bold text-gray-900 mb-1 pt-10">Join the Lunar Pay Donations Community</h4>
                    <p className={'p-10'}>
                        Ready to embark on your donation journey with Lunar Pay? Sign up now to start accepting cryptocurrency donations and make a meaningful impact on your cause or content.
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