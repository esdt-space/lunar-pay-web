import { useState } from 'react'

import { EsdtToken } from '@/features/tokens'
import { TokenLogo } from '@/features/tokens/components'

import { Select } from '@/components/ui/select'

import TokenSelectorDialog from './token-selector-dialog'
import { Input } from '@/components/ui/input'
import { cn, formatTokenBalance } from '@/theme/utils'
import { checkIsValidAmount } from '@/utils'

type Props = {
  tokens: EsdtToken[]
  value?: EsdtToken
  amount?: string
  onChange: (token: EsdtToken) => void
  onChangeAmount: (amount: string) => void
}

export function DisplayAmountTokenSelector(props: Props) {
  const { tokens = [], value, amount, onChange, onChangeAmount } = props

  const [isOpen, setIsOpen] = useState(false)
  const [amountExceedsAssets, setAmountEsceedsAssets] = useState(false)

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

  const changeAmountHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if(value !== undefined) {
      let isValid = checkIsValidAmount(value, parseInt(e.target.value))
      setAmountEsceedsAssets(isValid)
    }

    onChangeAmount(e.target.value)
  }
  
  const invalidAmountStyle = amountExceedsAssets ? "border-red-500" : ""

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
      {amountExceedsAssets && <p className={'text-red-500 text-xs ml-2 -mt-4'}>The amount you added exceeds your assets</p>}

      <TokenSelectorDialog
        value={value}
        tokens={tokens}
        isOpen={isOpen}
        closeDialogHandler={closeDialogHandler}
        selectTokenHandler={selectTokenHandler}
      />
    </Select>
  )
}
