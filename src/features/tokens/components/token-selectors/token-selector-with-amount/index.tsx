import { ChangeEvent, useState } from 'react'

import { cn, formatTokenBalance } from '@/theme/utils'

import { Input } from '@/components/ui/input'
import { Select } from '@/components/ui/select'

import { EsdtToken } from '@/features/tokens'
import { TokenLogo } from '@/features/tokens/components'
import { checkTokenHasEnoughBalance } from "@/utils/validation";

import { TokenSelectorDialog } from '../token-selector-dialog'

type Props = {
  tokens: EsdtToken[]
  value?: EsdtToken
  amount?: string
  onChange: (token: EsdtToken) => void
  onChangeAmount: (amount: string) => void
  showBalances?: boolean
}

export function TokenSelectorWithAmount(props: Props) {
  const { tokens = [], value, amount, onChange, onChangeAmount, showBalances } = props

  const [isOpen, setIsOpen] = useState(false)
  const [amountExceeded, setAmountExceeded] = useState(false)

  const closeDialogHandler = () => setIsOpen(false)

  const selectTokenHandler = (token: EsdtToken) => {
    onChange(token)
    setIsOpen(false)
  }

  const getBalanceNumber = () => {
    if(value) {
      return onChangeAmount(formatTokenBalance(value.balance, value.decimals).toString())
    }
  }

  const changeAmountHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if(value !== undefined) {
      setAmountExceeded(checkTokenHasEnoughBalance(value, e.target.value));
    }

    onChangeAmount(e.target.value)
  }
  
  const invalidAmountStyle = amountExceeded ? "border-red-500" : ""

  return (
    <Select value={value?.identifier}>
      <div className={cn(['flex flex-1 items-center border pl-3 pr-3 rounded-md', invalidAmountStyle])}>
          <div className='cursor-pointer mr-auto lg:w-5/12' onClick={() => setIsOpen(true)}>
            {value ? <div className={`flex gap-2 items-center`}>
              <TokenLogo className={'w-4 h-4'} token={value as EsdtToken} />
              <span className={'text-xs'}>{(value as EsdtToken).name}</span>
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

          <div className={'cursor-pointer justify-end lg:w-2/12'} onClick={getBalanceNumber}>
            <p className="font-extrabold">MAX</p>
          </div>
      </div>

      {amountExceeded && <p className={'text-red-500 text-xs ml-2 -mt-4'}>The amount you added exceeds your assets</p>}

      <TokenSelectorDialog
        value={value}
        tokens={tokens}
        isOpen={isOpen}
        closeDialogHandler={closeDialogHandler}
        selectTokenHandler={selectTokenHandler}
        showBalances={showBalances}
      />
    </Select>
  )
}
