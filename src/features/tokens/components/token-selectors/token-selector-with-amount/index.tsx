import {ChangeEvent, useEffect, useState} from 'react'

import { cn, formatTokenBalance } from '@/theme/utils'

import { Input } from '@/components/ui/input'
import { Select } from '@/components/ui/select'

import { EsdtToken } from '@/features/tokens'
import { TokenLogo } from '@/features/tokens/components'
import { checkTokenHasEnoughBalance } from "@/utils/validation";

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
  const [amountExceeded, setAmountExceeded] = useState(false)

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
    props.onAmountChange(e.target.value)
  }

  useEffect(() => {
    if (!token || !amount) {
      setAmountExceeded(false);
      return ;
    }

    setAmountExceeded(!checkTokenHasEnoughBalance(token, amount));
  }, [token, amount]);
  
  const invalidAmountStyle = amountExceeded ? "border-red-500" : ""

  return (
    <Select value={token?.identifier}>
      <div className={cn(['flex flex-1 items-center border pl-3 pr-3 rounded-md', invalidAmountStyle])}>
        <div className='cursor-pointer mr-auto lg:w-5/12' onClick={() => setIsOpen(true)}>
          {token ? <div className={`flex gap-2 items-center`}>
            <TokenLogo className={'w-4 h-4'} token={token as EsdtToken} />
            <span className={'text-xs'}>{(token as EsdtToken).name}</span>
          </div> : <div className={'text-xs'}>Select Token</div>}
        </div>

        <div className={'ml-5 justify-end lg:w-5/12'}>
          <Input
            value={amount}
            onChange={changeAmountHandler}
            style={{
              boxShadow: 'none'
            }}
            className={'border-none text-xs' }
            type={"number"}
            placeholder='Enter Amount' />
        </div>

        {hasMaxButton && (
          <div className={'cursor-pointer justify-end lg:w-2/12'} onClick={maxAmountButtonClickHandler}>
            <p className="font-extrabold">MAX</p>
          </div>
        )}
      </div>

      {amountExceeded && <p className={'text-red-500 text-xs ml-2 -mt-4'}>The amount you added exceeds your assets</p>}

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
