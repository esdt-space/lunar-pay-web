import { ReactNode } from "react";
import { Link } from "react-router-dom";

import { cn } from "@/theme/utils.ts";
import { RoutesConfig } from "@/navigation";
import { CheckoutOrder } from "@/features/checkout/models";
import { GetWalletCard } from "@/features/auth/components";

import { AppIcon } from "@/components/shared/app-icon.tsx";

import { OrderInformation } from "./order-information.tsx";

type Params = {
  order: CheckoutOrder;
  payComponent: ReactNode;
}

export function Template({order, payComponent}: Params) {
  return (
    <div className={'flex justify-center p-0 sm:p-8 md:p-12 lg:p-20 w-full h-full'}>
      <div className={cn([
        "flex flex-1 flex-col bg-white overflow-hidden max-w-[1400px]",
        "md:shadow-lg sm:rounded-lg overflow-hidden"
      ])}>
        <div className={'flex h-3 bg-gradient-to-l from-primary to-secondary'} />

        <div className={cn([
          'flex flex-1',
          'max-md:flex-col overflow-hidden',
        ])}>
          <div className={'flex flex-col md:flex-1 md:justify-between space-y-8'}>
            <OrderInformation order={order} />

            <Link
              to={RoutesConfig.home}
              className={'max-md:hidden flex self-center items-center gap-2 p-8 text-sm font-medium'}
            >
              Powered by <AppIcon />
            </Link>
          </div>

          <div className={cn([
            "md:bg-muted/20 border-l border-muted",
            "flex flex-col flex-1 justify-between p-4 md:p-8 gap-8 overflow-auto"
          ])}>
            {payComponent}
            <GetWalletCard />
          </div>

          <Link className={'md:hidden flex self-center items-center gap-2 py-4 px-8'} to={RoutesConfig.home}>
            Powered by <AppIcon/>
          </Link>
        </div>
      </div>
    </div>
  )
}