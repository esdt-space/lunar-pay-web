import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { logout } from "@multiversx/sdk-dapp/utils";
import { useGetAccount } from "@multiversx/sdk-dapp/hooks";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

import { AppIcon } from "@/components/shared/app-icon.tsx";

import { cn } from "@/theme/utils";
import { RoutesConfig } from "@/navigation";
import { useIsAuthenticated } from "@/features/auth";
import { useWindowSize } from "./useWindowSize";
import { useGetPaymentAgreementsMutation } from "@/features/payment-agreements/hooks";
import { CopyIconComponent, HeaderLink, LogoutMenu } from "./components";

export function AppPageHeader() {
  const { address } = useGetAccount()
  const isAuthenticated = useIsAuthenticated()

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const { mutate: fetchAgreements } = useGetPaymentAgreementsMutation();

  const signOutHandler = () => logout(RoutesConfig.home)

  const windowInnerWidth = useWindowSize()

  useEffect(() => {
    if(windowInnerWidth >= 1024) {
      setIsMobileMenuOpen(false)
    }
  }, [windowInnerWidth])

  return (
    <header>
      <nav id="navbar" className="fixed inset-x-0 z-20 w-full border-b border-gray-100 bg-white/80 backdrop-blur">
        <div className="mx-auto px-4 sm:px-12 xl:max-w-6xl xl:px-0">
          <div className="relative flex flex-wrap items-center justify-between gap-6 lg:gap-0 lg:py-4">
            <div className="relative z-20 flex w-full justify-between md:px-0 lg:w-max items-center">
              <Link to={RoutesConfig.dashboard}>
                <AppIcon />
              </Link>

              <button aria-label="humburger" id="hamburger" className="relative -mr-6 p-6 lg:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                <div aria-hidden="true" className="m-auto h-0.5 w-5 rounded bg-sky-900 transition duration-300"></div>
                <div aria-hidden="true" className="m-auto mt-2 h-0.5 w-5 rounded bg-sky-900 transition duration-300"></div>
              </button>
            </div>
            <div id="layer" aria-hidden="true" className="fixed inset-0 z-10 h-screen w-screen origin-bottom scale-y-0 bg-white/70 backdrop-blur-2xl transition duration-500 lg:hidden"></div>
            <div
              id="navlinks"
              className={cn([
                "absolute top-full left-0 z-20 w-full origin-top-right",
                "flex-col flex-wrap justify-end gap-6 rounded-3xl",
                "border border-gray-100 bg-white p-8 shadow-2xl shadow-slate-400/50",
                "transition-all duration-300 sm:transition-none",
                "lg:visible lg:relative lg:flex lg:w-auto lg:translate-y-0",
                "lg:scale-100 lg:flex-row lg:items-center lg:gap-0 lg:border-none",
                "lg:bg-transparent lg:p-0 lg:opacity-100 lg:shadow-none",
                "lg:peer-checked:translate-y-0",
                isMobileMenuOpen ? "visible opacity-100 translate-y-0 scale-100" : "invisible opacity-0 translate-y-1 scale-90"
              ])}
            >
              <div onClick={() => setIsMobileMenuOpen(false)} className="text-gray-600 dark:text-gray-300 lg:pr-4">
                <ul className="space-y-6 text-base font-medium tracking-wide lg:flex lg:space-y-0 lg:text-sm">
                  {/* <HeaderLink text={'Admin'} location={RoutesConfig.admin} /> */}
                  <div onClick={() => fetchAgreements()}>
                    <HeaderLink 
                      text={'Agreements'} 
                      location={RoutesConfig.paymentAgreements}
                    />
                  </div>
                  <HeaderLink text={'Token Operations'} location={RoutesConfig.tokensOperations} />
                  {isMobileMenuOpen && <HeaderLink text={'Logout'} location={""}/>}
                  {isMobileMenuOpen && 
                    <div className={"flex w-full items-center sm:flex-row md:w-max mt-6 md:ml-4 space-x-4"}>
                      <span className="text-xs max-w-[80px] truncate">
                        {address}
                      </span>
                      <CopyIconComponent address={address} />
                    </div>}
                </ul>
              </div>

              <div>
                {!isMobileMenuOpen && 
                  <Popover>
                    <PopoverTrigger asChild >
                      <div className={"flex w-full items-center sm:flex-row md:w-max border p-2 rounded-full"}>
                        <span className="text-xs max-w-[80px] truncate">
                          {isAuthenticated ? 
                            <div
                              className="cursor-pointer"
                            >
                              {address}
                            </div> : 'Get started'}
                        </span>
                      </div>
                    </PopoverTrigger>
                    <PopoverContent className="w-full p-8">
                      <div className="flex justify-center">
                        <LogoutMenu address={address} logoutFn={signOutHandler} />
                      </div>
                    </PopoverContent>
                  </Popover>}
              </div>

            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}