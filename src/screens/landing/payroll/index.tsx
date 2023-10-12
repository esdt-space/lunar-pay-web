import {cn} from "@/theme/utils";
import {RoutesConfig} from "@/navigation";
import {Link} from "react-router-dom";

import payrollImg from "@/assets/media/payroll.png";
import secureImg from "@/assets/media/secure.svg";
import multiverseX from "@/assets/media/multiversX.jpg";
import userfriendlyUI from "@/assets/media/userfriendlyui.jpg";

export function Payroll(){

    return (
        <div className={'payroll-page flex flex-col gap-24 lg:gap-48 pb-24 lg:pb-48'}>
            <div className={cn([
                "relative container  isolate lg:mx-auto mt-48 lg:mt-40 gap-12 items-center",
            ])}>
                <div className="flex flex-col w-full text-center pr-40 pl-40">

                    <h3 className="text-gray-400 font-bold mb-5">
                        Your Payroll on MultiverseX Blockchain
                    </h3>
                    <h1 className="text-5xl font-bold mb-10 text-gray-800 leading-tight items-center">
                        <span className={'font-black'}>Crypto Payroll with LunarPay</span>.
                    </h1>

                    <p className="text-lg mb-10 leading-loose">
                        Automating your payroll has never been easier with Lunar Pay. Our cutting-edge platform leverages the MultiverseX blockchain to help you create and distribute salaries and bonuses seamlessly, securely, and in full compliance. Say goodbye to manual crypto payments and hello to a more efficient and hassle-free payroll experience.
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
                    <div className={'max-lg:max-w-prose'}>

                        <h2 className="text-3xl font-bold mb-10 text-gray-800 leading-tight items-center text-center">
                            <span className={'font-black'}>Why Choose Lunar Pay for Your Crypto Payroll Needs?</span>
                        </h2>

                        <section  className={`py-8 'bg-white`}>
                            <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-center">
                                <div className="md:w-1/2 p-4 order-2 md:order-1">
                                    <img src={payrollImg} alt={`Effortless Payroll Automation`} className="max-w-full mx-auto md:max-w-md rounded-lg" />
                                </div>
                                <div className="md:w-1/2 p-20 order-1 md:order-2 bg-gradient-to-r from-white to-transparent rounded-lg" style={{minHeight:'300px'}}>
                                    <p className="text-xl font-semibold text-gray-900 mb-4">Effortless Payroll Automation</p>
                                    <p className="text-gray-700 text-lg">Lunar Pay simplifies the crypto payroll process, saving you valuable time and effort. With our platform, you can automate your crypto payroll in just a few simple steps.
                                    </p>
                                </div>
                            </div>
                        </section>
                        <section  className={`py-8 'bg-white`}>
                            <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-center">
                                <div className="md:w-1/2 p-4 order-1 md:order-2">
                                    <img src={secureImg} alt={`Secure and Compliant`} className="max-w-full mx-auto md:max-w-md rounded-lg" />
                                </div>
                                <div className="md:w-1/2 p-20 order-2 md:order-1 bg-gradient-to-l from-white to-transparent rounded-lg" style={{minHeight:'300px'}}>
                                    <p className="text-xl font-semibold text-gray-900 mb-4">Secure and Compliant</p>
                                    <p className="text-gray-700 text-lg">We prioritize the security and compliance of your crypto payments. Lunar Pay ensures that all transactions are conducted securely and in full adherence to regulatory requirements.
                                    </p>
                                </div>
                            </div>
                        </section>
                        <section  className={`py-8 'bg-white`}>
                            <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-center">
                                <div className="md:w-1/2 p-4 order-2 md:order-1">
                                    <img src={multiverseX} alt={`MultiverseX Blockchain Integration`} className="max-w-full mx-auto md:max-w-md rounded-lg" style={{maxHeight:'200px'}} />
                                </div>
                                <div className="md:w-1/2 p-20 order-1 md:order-2 bg-gradient-to-r from-white to-transparent rounded-lg" style={{minHeight:'300px'}}>
                                    <p className="text-xl font-semibold text-gray-900 mb-4">MultiverseX Blockchain Integration</p>
                                    <p className="text-gray-700 text-lg">Lunar Pay is powered by the MultiverseX blockchain, known for its speed, security, and transparency. This integration guarantees that your crypto payments are fast, tamper-proof, and fully transparent.
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
                                    <p className="text-xl font-semibold text-gray-900 mb-4">User-Friendly Interface</p>
                                    <p className="text-gray-700 text-lg">Our platform is designed with ease of use in mind. Whether you're a crypto expert or just getting started, Lunar Pay's user-friendly interface makes managing your payroll a breeze.
                                    </p>
                                </div>
                            </div>
                        </section>

                    </div>
                </div>
            </div>

            <div className="bg-gray-100 ">
                <div className="container mx-auto p-10">
                    <section className="text-center">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4 pt-10">
                            How Lunar Pay Works
                        </h2>
                        <h2 className="text-2xl font-semibold text-gray-400 mb-4 pb-10">
                            3 simple steps
                        </h2>
                        <ul className="mt-4">
                            <li className="flex items-center mb-4 p-5">
                                <div className="rounded-full bg-gradient-to-br from-primary to-secondary text-white font-semibold w-10 h-10 flex items-center justify-center mr-4">
                                    1
                                </div>
                                <div>
                                    <h2 className="text-xl font-semibold text-gray-900 text-left">Add Employees</h2>
                                    <p className="text-gray-700 text-left">You can quickly add up to 100 employees through a CSV upload or manually input each employee's information.</p>
                                </div>
                            </li>
                            <li className="flex items-center mb-4 p-5">
                                <div className="rounded-full bg-gradient-to-br from-primary to-secondary text-white font-semibold w-10 h-10 flex items-center justify-center mr-4">
                                    2
                                </div>
                                <div>
                                    <h2 className="text-xl font-semibold text-gray-900 text-left">Create Salaries</h2>
                                    <p className="text-gray-700 text-left">Set up recurring salaries and let Lunar Pay automatically generate them every month. Say goodbye to repetitive manual tasks.</p>
                                </div>
                            </li>
                            <li className="flex items-center mb-4 p-5">
                                <div className="rounded-full bg-gradient-to-br from-primary to-secondary text-white font-semibold w-10 h-10 flex items-center justify-center mr-4">
                                    3
                                </div>
                                <div>
                                    <h2 className="text-xl font-semibold text-gray-900 text-left">Pay in 1-Click</h2>
                                    <p className="text-gray-700 text-left">With a single click, you can pay hundreds of salaries every month. Lunar Pay supports 140+ cryptocurrencies, ensuring a hassle-free and diverse payment experience.</p>
                                </div>
                            </li>
                        </ul>
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
                                <h3 className="text-md leading-none font-bold">Effortless Management</h3>
                                <p className="mt-1 text-sm leading-normal text-slate-300/80">Our visual dashboard keeps your crypto payroll organized, allowing you to manage all salaries in one go. No more chaos or manual tracking.</p>
                            </li>
                            <li>
                                <h3 className="text-md leading-none font-bold">Compliance Made Easy</h3>
                                <p className="mt-1 text-sm leading-normal text-slate-300/80">Access your payroll history effortlessly and be audit-ready at all times. Lunar Pay provides one-click download and CSV export features for easy accounting and audits.</p>
                            </li>
                            <li>
                                <h3 className="text-md leading-none font-bold">Employee Self-Service</h3>
                                <p className="mt-1 text-sm leading-normal text-slate-300/80">Empower your employees with Lunar Pay's self-service portal. They can access their payroll information, view pay stubs, and make changes to their personal details, all in one convenient platform.</p>
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
                    <h4 className="text-xl font-bold text-gray-400 mb-4">Ready to revolutionize your crypto payroll process?</h4>

                    <p className={'p-10'}>
                         Join Lunar Pay and experience the future of crypto salary and bonus distribution. With our user-friendly platform and MultiverseX blockchain integration, you'll reclaim 90% of your time and ensure that your payroll is secure, compliant, and hassle-free. Request a live demo today and discover how Lunar Pay can transform your payroll experience.
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