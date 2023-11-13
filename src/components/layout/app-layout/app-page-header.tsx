import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { logout } from "@multiversx/sdk-dapp/utils";
import { useGetAccount } from "@multiversx/sdk-dapp/hooks";

import { AppIcon } from "@/components/shared/app-icon.tsx";

import { cn } from "@/theme/utils";
import { RoutesConfig } from "@/navigation";
import { useIsAuthenticated } from "@/features/auth";
import { formatAddress } from "@/utils/address";
import { Copy } from "lucide-react";
import { useWindowSize } from "./useWindowSize";

type LogoutMenuProps = {
  address: string;
  logoutFn: () => void;
}

type HeaderLinkProps = {
  text: string;
  location: string;
}

function HeaderLink(props: HeaderLinkProps) {
  return (
    <li>
      <Link to={props.location} className={'block transition hover:text-primary md:px-4'}>
        {props.text}
      </Link>
    </li>
  )
}

const CopyIcon = ({address}: {address: string}) => {
  const copyButtonHandler = () => {
    return navigator.clipboard.writeText(address)
  };

  return (
    <span
      onClick={copyButtonHandler}
      className={'ml-1 px-1 py-1 cursor-pointer'}
    >
      <Copy className={'w-4 h-4'} />
    </span>
  )
}

const LogoutMenu = (props: LogoutMenuProps) => {
  const {address, logoutFn} = props

  return (
    <div className="absolute right-0 top-16 border border-gray-100 bg-white p-8 shadow-2xl shadow-slate-400/50">
      <ul className="space-y-6 text-base font-medium flex flex-col">
        <div className="flex space-x-4">
          <span className="text-sm font-semibold">{formatAddress(address)}</span>
          <CopyIcon address={address} />
        </div>
        <div onClick={logoutFn} className="mx-auto">
          <HeaderLink text={'Logout'} location={""} />
        </div>
      </ul>
    </div>
  )
}

export function AppPageHeader() {
  const { address } = useGetAccount()
  const isAuthenticated = useIsAuthenticated()

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isLogoutMenuOpen, setIsLogoutMenuOpen] = useState(false)

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
                  <HeaderLink text={'Admin'} location={RoutesConfig.admin} />
                  <HeaderLink text={'Agreements'} location={RoutesConfig.paymentAgreements} />
                  <HeaderLink text={'Token Operations'} location={RoutesConfig.tokensOperations} />
                  {isMobileMenuOpen && <HeaderLink text={'Logout'} location={""}/>}
                </ul>
              </div>

              <div className={cn(["flex w-full items-center sm:flex-row md:w-max", isMobileMenuOpen ? "mt-6 space-x-4" : "border p-2 rounded-full"])}>
                <span className="text-xs max-w-[80px] truncate">
                  {isAuthenticated ? 
                    <div
                      className="cursor-pointer"
                      onClick={() => setIsLogoutMenuOpen(!isLogoutMenuOpen)}
                    >
                      {address}
                    </div> : 'Get started'}
                </span>
                {isMobileMenuOpen && <CopyIcon address={address} />}
              </div>

            </div>
            {isLogoutMenuOpen && <LogoutMenu address={address} logoutFn={signOutHandler} />}
          </div>
        </div>
      </nav>
    </header>
  )
}