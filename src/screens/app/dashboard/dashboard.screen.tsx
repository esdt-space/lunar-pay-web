import { VaultAssetsWidget } from "./components/vault-assets.widget.tsx";
import { DashboardLunarBalanceWidget } from "./components/lunar-balance.widget";
import { DepositWithdrawWidget } from "./components/deposit-withdraw.widget.tsx";
import { DashboardLatestTransactionsWidget } from "./components/latest-transactions.widget";

export function DashboardScreen() {
  return (
    <div className={'container mx-auto p-4 sm:p-12 xl:p-16'}>
      <div className={'flex flex-1 flex-col lg:flex-row gap-4 md:gap-8'}>
        <DashboardLunarBalanceWidget />
        <VaultAssetsWidget />
        <DepositWithdrawWidget />
      </div>

      <div className={'flex flex-1 flex-col lg:flex-row gap-4 md:gap-8 mt-10'}>
        {/*<DashboardCollectAllWidget />*/}
        <DashboardLatestTransactionsWidget />
      </div>
    </div>
  )
}
