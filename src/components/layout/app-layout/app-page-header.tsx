import { Menu } from "lucide-react";
import { Link } from "react-router-dom";
import { logout } from "@multiversx/sdk-dapp/utils";
import { useEffect, useState } from "react";

import { cn } from "@/theme/utils";
import { RoutesConfig } from "@/navigation";

import { AppIcon } from "@/components/shared/app-icon.tsx";

import { useWindowSize } from "./useWindowSize";
import { UserMenu } from "./components";
import { LunarPayNavigationMenu } from "./navigation-menu";

export function AppPageHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const windowInnerWidth = useWindowSize()
  const signOutHandler = () => logout(RoutesConfig.home)

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

              <div className={'relative -mr-6 p-6 lg:hidden'}>
                <Menu className="w-6 h-6" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />
              </div>
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
              <div className="text-gray-600 dark:text-gray-300 lg:pr-4">
                <ul className="text-base font-medium tracking-wide">
                  <LunarPayNavigationMenu isMobile={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} />
                </ul>
              </div>

              {!isMobileMenuOpen && <UserMenu signOutHandler={signOutHandler} />}
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}