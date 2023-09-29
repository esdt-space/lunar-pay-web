import { useMemo, useState, useRef } from 'react'
import { FormatAmount } from "@multiversx/sdk-dapp/UI"
import { useDebounce } from '@multiversx/sdk-dapp/hooks'
import { useVirtualizer } from '@tanstack/react-virtual'

import { Input } from '@/components/ui/input'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'

import { EsdtToken } from '@/features/tokens'
import { TokenLogo } from '@/features/tokens/components'

type Props = {
  isOpen: boolean
  value?: EsdtToken
  tokens: EsdtToken[]
  closeDialogHandler: () => void
  selectTokenHandler: (token: EsdtToken) => void
  showBalances?: boolean
}

export function TokenSelectorDialog(props: Props) {
  const [filterValue, setFilterValue] = useState('')
  const { isOpen, tokens, closeDialogHandler, selectTokenHandler, showBalances = false } = props
  const parentRef = useRef<HTMLDivElement>(null)

  const debouncedFilterValue = useDebounce(filterValue, 300)

  const tokensShown = useMemo(() => {
    if (debouncedFilterValue.length === 0) {
      return tokens
    }

    const normalizedFilterValue = debouncedFilterValue.toLowerCase()

    return tokens.filter((item) => {
      const normalizedTokenName = item.name.toLowerCase()
      const normalizedTokenIdentifier = item.identifier.toLowerCase()

      return normalizedTokenName.includes(normalizedFilterValue) || normalizedTokenIdentifier.includes(normalizedFilterValue)
    })
  }, [tokens, debouncedFilterValue])

  const virtualizer = useVirtualizer({
    count: tokensShown.length ?? 1,
    estimateSize: () => 40,
    getScrollElement: () => parentRef.current,
  })

  const items = virtualizer.getVirtualItems()

  return (
    <Dialog open={isOpen} onOpenChange={closeDialogHandler}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Select Token</DialogTitle>
        </DialogHeader>
        <div className={'space-y-4'}>
          <Input placeholder={'Search'} value={filterValue} onChange={(e) => setFilterValue(e.target.value)} />

          <div className="h-72 w-full p-y-4 overflow-y-auto" ref={parentRef}>
            <div
              style={{
                height: virtualizer.getTotalSize(),
                position: 'relative',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  transform: `translateY(${items[0]?.start ?? 0}px)`,
                }}
              >
                {items.map((row) => {
                  const token = tokensShown[row.index]

                  return (
                    <div
                      key={row.key}
                      data-index={row.index}
                      ref={virtualizer.measureElement}
                      onClick={() => selectTokenHandler(token)}
                      className={'flex justify-between gap-2 rounded-md hover:bg-slate-50/20 p-2 cursor-pointer'}
                    >
                      <div className={'flex gap-2'}>
                        <TokenLogo className={'h-6 w-6'} token={token}/>
                        {token.name}
                      </div>

                      {showBalances && (
                        <div className={'justify-self-end'}>
                          <FormatAmount
                            digits={5}
                            value={token.balance}
                            token={token.identifier}
                            decimals={token.decimals}
                          />
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
