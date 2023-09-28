import { useMemo, useState } from "react";

import { EsdtToken } from "@/features/tokens";
import { useAccountEsdtTokensList } from "@/features/account-tokens/hooks";
import { DashboarAssetsWidget } from "./components/assets.widget";
import { DashboardLunarBalanceWidget } from "./components/lunar-balance.widget";
import { DepositWithdrawWidget} from "./components/deposit-withdraw.widget.tsx";
import { DashboarCollectAllWidget } from "./components/collect-all.widget";
import { DashboardLatestTransactionsWidget } from "./components/latest-transactions.widget";

export function DashboardScreen() {
  const accountTokens = useAccountEsdtTokensList();
  const [selectedAccountToken, setSelectedAccountToken] = useState<EsdtToken | undefined>(undefined);
  const [selectedVaultToken, setSelectedVaultToken] = useState<EsdtToken | undefined>(undefined);

  const [selectedAccountAmount, setSelectedAccountAmount] = useState<string>("");
  const [selectedVaultAmount, setSelectedVaultAmount] = useState<string>("");

  const [assetSearchValue, setAssetSearchValue] = useState('');

  //TODO: Get actual tokens from the vault SC
  const vaultTokens = useAccountEsdtTokensList();
  const filteredVaultTokens = useMemo(() => {
    if(assetSearchValue.length === 0) return vaultTokens;

    return vaultTokens.filter(item =>
      item.name.includes(assetSearchValue) || item.identifier.includes(assetSearchValue)
    );
  }, [vaultTokens, assetSearchValue]);

  return (
    <div className={'container mx-auto p-4 sm:p-12 xl:p-16'}>
      <div className={'flex flex-1 flex-col lg:flex-row gap-4 md:gap-8'}>
        <DashboardLunarBalanceWidget vaultTokens={vaultTokens} />

        <DashboarAssetsWidget 
          assetSearchValue={assetSearchValue} 
          setAssetSearchValue={setAssetSearchValue} 
          filteredVaultTokens={filteredVaultTokens} />

        <DepositWithdrawWidget
          selectedAccountToken={selectedAccountToken} 
          selectedVaultToken={selectedVaultToken}
          accountTokens={accountTokens}
          vaultTokens={vaultTokens}
          selectedAccountAmount={selectedAccountAmount}
          selectedVaultAmount={selectedVaultAmount}
          setSelectedAccountToken={setSelectedAccountToken}
          setSelectedVaultToken={setSelectedVaultToken}
          setSelectedAccountAmount={setSelectedAccountAmount}
          setSelectedVaultAmount={setSelectedVaultAmount}
        />
      </div>

      <div className={'flex flex-1 flex-col lg:flex-row gap-4 md:gap-8 mt-10'}>
        <DashboarCollectAllWidget />

        <DashboardLatestTransactionsWidget />
      </div>
    </div>
  )
}
