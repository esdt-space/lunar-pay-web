import { Token } from "@/core/tokens";

import { TokenLogo } from "./token-logo.tsx";
import { TokenBalance } from "./token-balance.tsx";

type TokenBalanceProps = {
  token: Token
  showBalances?: boolean
}

export function TokenItem(props: TokenBalanceProps) {
  const { token, showBalances } = props;

  return (
    <div className={'flex flex-1 justify-between gap-2'}>
      <div className={'flex gap-2 items-center'}>
        <TokenLogo className={'h-8 w-8'} token={token}/>

        <div className={'flex flex-col'}>
          <div className={'text-sm font-semibold'}>{token.name}</div>
          <div className={'text-xs text-muted-foreground'}>{token.identifier}</div>
        </div>
      </div>

      {showBalances && (<TokenBalance token={token}/>)}
    </div>
  )
}