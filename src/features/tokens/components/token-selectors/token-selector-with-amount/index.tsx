import {ChangeEvent, useEffect, useState} from 'react'

import { cn, formatTokenBalance } from '@/theme/utils'

import { Input } from '@/components/ui/input'
import { Select } from '@/components/ui/select'

import { EsdtToken } from '@/features/tokens'
import { TokenLogo } from '@/features/tokens/components'
import { TokenValueError } from "@/features/tokens/enums";
import { tokenErrorToText } from "@/features/tokens/utils";
import { getTokenErrorForValue } from "@/features/tokens/validation";

import { TokenSelectorDialog } from '../token-selector-dialog'

type Props = {
  tokens: EsdtToken[]
  token?: EsdtToken
  amount?: string
  onTokenChange: (token: EsdtToken) => void
  onAmountChange: (amount: string) => void
  hasMaxButton?: boolean
}

export function TokenSelectorWithAmount(props: Props) {
  const { tokens = [], token, amount, hasMaxButton = true } = props

  const [isOpen, setIsOpen] = useState(false)
  const [tokenError, setTokenError] = useState<null | TokenValueError>(null)

  const closeDialogHandler = () => setIsOpen(false)

  const selectTokenHandler = (token: EsdtToken) => {
    props.onTokenChange(token)
    setIsOpen(false)
  }

  const maxAmountButtonClickHandler = () => {
    if(!token) return;

    props.onAmountChange(formatTokenBalance(token.balance, token.decimals).toString())
  }

  const changeAmountHandler = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    props.onAmountChange(e.target.value.replace(',', '.'))
  }

  useEffect(() => {
    if (!token || !amount) {
      setTokenError(null);
      return ;
    }

    setTokenError(getTokenErrorForValue(token, amount));
  }, [token, amount]);
  
  const invalidAmountStyle = tokenError ? "border-red-500" : ""
  const hasTokens = tokens.length > 0;

  return (
    <Select value={token?.identifier}>
      <div className={cn(['flex flex-1 items-center border pl-3 pr-3 rounded-md', invalidAmountStyle])}>
        <div className='cursor-pointer mr-auto lg:w-5/12' onClick={() => hasTokens && setIsOpen(true)}>
          {token !== undefined && (
            <div className={`flex gap-2 items-center`}>
              <TokenLogo className={'w-4 h-4'} token={token}/>
              <span className={'text-xs'}>{(token as EsdtToken).name}</span>
            </div>
          )}

          {token === undefined && (
            <div className={cn(['text-xs', !hasTokens && "text-muted-foreground"])}>
              Select Token
            </div>
          )}
        </div>

        <div className={'ml-5 justify-end lg:w-5/12'}>
          <Input
            type={"number"}
            value={amount}
            placeholder='Enter Amount'
            onChange={changeAmountHandler}
            disabled={token === undefined}
            className={'border-none text-xs'}
            style={{ boxShadow: 'none' }}
          />
        </div>

        {hasMaxButton && (
          <div className={cn([
            'text-sm justify-end lg:w-2/12',
            token === undefined ? "text-slate-400 cursor-not-allowed" : "cursor-pointer"
          ])} onClick={maxAmountButtonClickHandler}>
            <p className="font-bold">MAX</p>
          </div>
        )}
      </div>

      {tokenError && <p className={'text-red-500 text-xs ml-2 -mt-4'}>{tokenErrorToText(tokenError)}</p>}

      <TokenSelectorDialog
        value={token}
        tokens={tokens}
        isOpen={isOpen}
        closeDialogHandler={closeDialogHandler}
        selectTokenHandler={selectTokenHandler}
        showBalances
      />
    </Select>
  )
}
