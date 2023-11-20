import { FormatAmount } from "@multiversx/sdk-dapp/UI";
import { getTokenBalanceValueInDollars } from "@/core/tokens/utils";

import { EsdtToken } from "@/core/tokens";

type TokenBalanceProps = {
  token: EsdtToken
}

export function TokenBalance(props: TokenBalanceProps) {
  const { token } = props;
  const usdValue = getTokenBalanceValueInDollars(token);

  return (
    <div className={'justify-self-end text-slate-600'}>
      <FormatAmount
        digits={5}
        token={token.name}
        value={token.balance}
        decimals={token.decimals}
        className={'font-semibold text-sm'}
      />
      {usdValue !== undefined && (
        <div className={'text-xs text-slate-500 text-right'} title={usdValue.toFormat()}>
          ${usdValue?.toFormat(5, 6)}
        </div>
      )}
    </div>
  )
}