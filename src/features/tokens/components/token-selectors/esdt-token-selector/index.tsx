import { useState } from 'react'

import { EsdtToken } from '@/features/tokens'
import { TokenLogo } from '@/features/tokens/components'

import { Select, SelectTrigger, SelectValue } from '@/components/ui/select'

import TokenSelectorDialog from './token-selector-dialog'

type Props = {
  tokens: EsdtToken[]
  value?: EsdtToken
  onChange: (token: EsdtToken) => void
}

export function EsdtTokenSelector(props: Props) {
  const { tokens = [], value, onChange } = props
  const [isOpen, setIsOpen] = useState(false)

  const closeDialogHandler = () => setIsOpen(false)
  const selectTokenHandler = (token: EsdtToken) => {
    onChange(token)
    setIsOpen(false)
  }

  return (
    <Select value={value?.identifier}>
      <SelectTrigger onClick={() => setIsOpen(true)}>
        <SelectValue placeholder="Select token">
          {value && (
            <div className={`flex gap-2 items-center`}>
              <TokenLogo className={'w-4 h-4'} token={value as EsdtToken} />
              <span className={'text-xs'}>{(value as EsdtToken).name}</span>
            </div>
          )}
        </SelectValue>
      </SelectTrigger>

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
