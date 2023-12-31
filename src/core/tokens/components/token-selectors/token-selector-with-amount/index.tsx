import { ChangeEvent, useEffect, useState } from 'react'

import { cn, formatTokenBalance } from '@/theme/utils'

import { Input } from '@/components/ui/input'

import { Token, TokensList } from '@/core/tokens'
import { EsdtTokenSelector } from '@/core/tokens/components'
import { getTokenErrorForValue } from "@/core/tokens/validation";
import { tokenErrorToText } from "@/core/tokens/utils";
import { TokenValueError } from "@/core/tokens/enums/token-value-error.enum.ts";

type Props = {
  tokens: TokensList
  token?: Token
  amount?: string
  onTokenChange: (token: Token) => void
  onAmountChange: (amount: string) => void
  hasMaxButton?: boolean
  showBalances?: boolean
  isAmountToReceive?: boolean
}

export function TokenSelectorWithAmount(props: Props) {
  const { tokens = [], token, amount, hasMaxButton = true, showBalances = true, isAmountToReceive = false } = props
  const [tokenError, setTokenError] = useState<null | TokenValueError>(null)

  const maxAmountButtonClickHandler = () => {
    if(!token) return;

    props.onAmountChange(formatTokenBalance(token.balance, token.decimals).toString())
  }

  const changeAmountHandler = (e: ChangeEvent<HTMLInputElement>) => {
    props.onAmountChange(e.target.value.replace(',', '.'))
  }

  useEffect(() => {
    if (!token || !amount) {
      setTokenError(null);
      return ;
    }

    const error = getTokenErrorForValue(token, amount, isAmountToReceive);
    
    if(!showBalances && ![null, TokenValueError.InvalidFormat, TokenValueError.ZeroValue].includes(error)) return;

    setTokenError(error);
  }, [token, amount, showBalances]);
  
  const invalidAmountStyle = tokenError ? "border-red-500" : ""

  return (
    <div className={'flex flex-col gap-1'}>
      <div className={
        cn([
          'flex flex-1 items-center justify-between border rounded-md',
          invalidAmountStyle
        ])
      }>
        <div className={'flex flex-1 items-center flex-nowrap'}>
          <div>
            <Input
              type={"number"}
              value={amount}
              placeholder='Enter Amount'
              onChange={changeAmountHandler}
              disabled={token === undefined}
              className={'border-none text-xs'}
              style={{boxShadow: 'none'}}
            />
          </div>

          {hasMaxButton && token !== undefined && (
            <div className={'text-xs justify-end cursor-pointer'} onClick={maxAmountButtonClickHandler}>
              <p className="font-bold">MAX</p>
            </div>
          )}
        </div>

        <div className={'justify-end !border-none'}>
          <EsdtTokenSelector
            value={token}
            tokens={tokens}
            onChange={props.onTokenChange}
            triggerClassname={'border-none text-xs'}
            showBalances={showBalances}
          />
        </div>
      </div>
      {tokenError && (
        <p className={'text-red-500 text-xs ml-2'}>
          {tokenErrorToText(tokenError)}
        </p>
      )}
    </div>
  )
}
