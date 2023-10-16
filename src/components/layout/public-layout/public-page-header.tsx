import { useState } from "react";
import { Link } from "react-router-dom";

import { AppIcon } from "@/components/shared/app-icon.tsx";

import { cn } from "@/theme/utils.ts";
import { RoutesConfig } from "@/navigation";

type NavItemProps = {
  text: string;
  location: string;
};

function NavItem(props: NavItemProps) {
  return (
    <li>
      <Link to={props.location} className='block transition hover:text-primary md:px-4'>
        {props.text}
      </Link>
    </li>
  );
}

export function PublicPageHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header>
      <nav id="navbar" className="fixed inset-x-0 z-20 w-full border-b border-gray-100 bg-white/80 backdrop-blur">
        <div className="container mx-auto px-4 sm:px-12">
          <div className={cn("relative flex flex-wrap items-center justify-between gap-6", "lg:gap-0 lg:py-4")}>
            <div className={cn("relative z-20 flex w-full justify-between", "md:px-0 lg:w-max items-center")}>
              <Link to={RoutesConfig.home}>
                <AppIcon />
              </Link>

              <button aria-label="hamburger" id="hamburger" className="relative -mr-6 p-6 lg:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                <div aria-hidden="true" className="m-auto h-0.5 w-5 rounded bg-sky-900 transition duration-300"></div>
                <div aria-hidden="true" className="m-auto mt-2 h-0.5 w-5 rounded bg-sky-900 transition duration-300"></div>
              </button>
            </div>
            <div id="layer" className="fixed inset-0 z-10 h-screen w-screen origin-bottom scale-y-0 bg-white/70 backdrop-blur-2xl transition duration-500 lg:hidden"></div>
            <div id="navlinks" className={cn([
              "absolute top-full left-0 z-20 w-full origin-top-right",
              "flex-col flex-wrap justify-end gap-6 rounded-3xl",
              "border border-gray-100 bg-white p-8 shadow-2xl shadow-slate-400/50",
              "transition-all duration-300 sm:transition-none",
              "lg:visible lg:relative lg:flex lg:w-auto lg:translate-y-0",
              "lg:scale-100 lg:flex-row lg:items-center lg:gap-0 lg:border-none",
              "lg:bg-transparent lg:p-0 lg:opacity-100 lg:shadow-none",
              "lg:peer-checked:translate-y-0",
              isMobileMenuOpen ? "visible opacity-100 translate-y-0 scale-100" : "invisible opacity-0 translate-y-1 scale-90"
            ])}>
              <div className="text-gray-600 lg:pr-4">
                <ul className={cn("space-y-6 text-base font-medium tracking-wide", "lg:flex lg:space-y-0 lg:text-sm")}>
                  <NavItem text="Solutions" location="/pages/solution" />
                  {/*<NavItem text="Customers" location="/pages/customers" />*/}
                  {/*<NavItem text="Pricing" location="/pages/pricing" />*/}
                  <NavItem text="About" location="/pages/about" />
                </ul>
              </div>

              <div className={cn(
                "mt-12 -ml-1 flex w-full flex-col space-y-2",
                "sm:flex-row md:w-max lg:mt-0 lg:mr-6 lg:space-y-0 lg:border-l lg:pl-6"
              )}>
                <Link to={RoutesConfig.dashboard} className={cn(
                  "relative ml-auto flex h-9 w-full items-center justify-center",
                  "before:absolute before:inset-0 before:rounded-full before:bg-primary",
                  "before:transition-transform before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:px-4 lg:before:border lg:before:border-gray-200 lg:before:bg-gray-100"
                )}>
                  <span className="relative text-sm font-semibold text-white lg:text-primary max-w-[100px] truncate">
                    Launch app
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}