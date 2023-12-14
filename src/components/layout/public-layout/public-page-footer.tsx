import {Link} from "react-router-dom";

import { RoutesConfig } from "@/navigation";
import { AppIcon } from "@/components/shared/app-icon.tsx";

// type FooterLinkProps = {
//   text: string;
//   location: string;
// }
//
// function FooterLink(props: FooterLinkProps) {
//   return (
//     <li>
//       <Link to={props.location} className={'text-sm duration-100 hover:text-primary'}>
//         {props.text}
//       </Link>
//     </li>
//   )
// }

export function PublicPageFooter() {
  return (
    <footer className="border-t border-gray-100 py-8">
      <div>
        <div className="m-auto space-y-8 px-4 text-gray-600 sm:px-12 xl:max-w-6xl xl:px-0">
          <div className="grid grid-cols-12 gap-6 md:gap-0">
            <div className="col-span-12 md:col-span-4">
              <div className="flex h-full items-center justify-between gap-6 border-b border-white py-6 max-sm:flex-col md:items-start md:justify-between md:space-y-6 md:border-none md:py-0">
                <Link to={RoutesConfig.home}>
                  <AppIcon />
                </Link>
              </div>
            </div>
            <div className="col-span-12 md:col-span-4"></div>
            <div className="col-span-12 md:col-span-4">
              <div className="flex h-full items-center justify-between gap-6 border-b border-white py-6 max-md:flex-col md:items-start md:justify-between md:space-y-6 md:border-none md:py-0">
                <div className="flex flex-col space-y-1">
                  <Link to={RoutesConfig.frequentlyAskedQuestions}>FAQ</Link>
                  <Link to={RoutesConfig.termsAndConditions}>Terms&Conditions</Link>
                  <Link to={RoutesConfig.whitepaper}>Whitepaper</Link>
                  <Link to={RoutesConfig.contactUs}>Contact Us</Link>
                </div>
              </div>
            </div>
            {/*<div className="col-span-12 md:col-span-8">*/}
            {/*  <div className="grid grid-cols-2 gap-6 pb-16">*/}
            {/*    <div>*/}
            {/*      <h2 className="text-base font-medium text-gray-800 dark:text-gray-200">Products</h2>*/}
            {/*      <ul className="mt-4 list-inside space-y-4">*/}
            {/*        <FooterLink text={'About'} location={RoutesConfig.home} />*/}
            {/*        <FooterLink text={'Customers'} location={RoutesConfig.home} />*/}
            {/*        <FooterLink text={'Enterprise'} location={RoutesConfig.home} />*/}
            {/*        <FooterLink text={'Partners'} location={RoutesConfig.home} />*/}
            {/*        <FooterLink text={'Jobs'} location={RoutesConfig.home} />*/}
            {/*      </ul>*/}
            {/*    </div>*/}
            {/*    <div>*/}
            {/*      <h2 className="text-base font-medium text-gray-800">Resources</h2>*/}
            {/*      <ul className="mt-4 list-inside space-y-4">*/}
            {/*        <FooterLink text={'About'} location={RoutesConfig.home} />*/}
            {/*        <FooterLink text={'Customers'} location={RoutesConfig.home} />*/}
            {/*        <FooterLink text={'Enterprise'} location={RoutesConfig.home} />*/}
            {/*        <FooterLink text={'Partners'} location={RoutesConfig.home} />*/}
            {/*        <FooterLink text={'Jobs'} location={RoutesConfig.home} />*/}
            {/*      </ul>*/}
            {/*    </div>*/}
            {/*  </div>*/}
            {/*</div>*/}
          </div>
          <div className="text-sm">
            All right reserved © Lunar Pay 2023 - Present
          </div>
        </div>
      </div>
    </footer>
  )
}