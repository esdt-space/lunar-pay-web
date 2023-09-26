import { useState } from 'react'

import { EsdtToken } from '@/features/tokens'
import { TokenLogo } from '@/features/tokens/components'

import { Select } from '@/components/ui/select'

import TokenSelectorDialog from './token-selector-dialog'
import { Input } from '@/components/ui/input'

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

  const closeDialogHandler = () => setIsOpen(false)
  const selectTokenHandler = (token: EsdtToken) => {
    onChange(token)
    setIsOpen(false)
  }

  return (
    <Select value={value?.identifier}>
      <div className='flex flex-1 items-center border pl-3 pr-3 rounded-md'>
          <div className='cursor-pointer mr-auto w-8/12' onClick={() => setIsOpen(true)}>
            {value ? <div className={`flex gap-2 items-center`}>
              <TokenLogo className={'w-4 h-4'} token={value as EsdtToken} />
              <span className={'text-xs'}>{(value as EsdtToken).name}</span>
            </div> : <div className={'text-xs'}>Select Token</div>}
          </div>

          <div>
            <Input  
              value={amount}
              onChange={(e) => onChangeAmount(e.target.value)}
              style={{
                boxShadow: 'none'
              }}
              className='border-none focus:outline-none focus:ring-0 focus:border-none active:border-none hover:border-none placeholder:border-none disabled:border-none' 
              type={"number"} 
              placeholder='Enter Amount' />
          </div>

          <div className='cursor-pointer justify-end'>
            <p className="font-extrabold">MAX</p>
          </div>
      </div>

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
