import { useState } from 'react'

import { Token, TokensList } from '@/core/tokens'
import { TokenLogo } from '@/core/tokens/components'

import { Select, SelectTrigger, SelectValue } from '@/components/ui/select'

import { TokenSelectorDialog } from '../token-selector-dialog'

type Props = {
  tokens: TokensList
  value?: Token
  onChange: (token: Token) => void
  showBalances?: boolean
  triggerClassname?: string
}

export function EsdtTokenSelector(props: Props) {
  const { tokens = [], value, onChange, showBalances } = props
  const [isOpen, setIsOpen] = useState(false)

  const closeDialogHandler = () => setIsOpen(false)
  const selectTokenHandler = (token: Token) => {
    onChange(token)
    setIsOpen(false)
  }

  return (
    <Select value={value?.identifier}>
      <SelectTrigger onClick={() => setIsOpen(true)} className={props.triggerClassname}>
        <SelectValue placeholder="Select token">
          {value && (
            <div className={`flex gap-1 items-center`}>
              <TokenLogo className={'w-4 h-4'} token={value} />
              <span className={'text-xs truncate'}>{value.name}</span>
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
        showBalances={showBalances}
      />
    </Select>
  )
}
