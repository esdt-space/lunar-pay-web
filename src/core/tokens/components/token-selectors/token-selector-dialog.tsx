import { useMemo, useState, useRef } from 'react'
import { useDebounce } from '@multiversx/sdk-dapp/hooks'
import { useVirtualizer } from '@tanstack/react-virtual'

import { Input } from '@/components/ui/input'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'

import { Token, TokensList } from '@/core/tokens'
import { TokenItem } from "@/core/tokens/components";

type Props = {
  isOpen: boolean
  value?: Token
  tokens: TokensList
  closeDialogHandler: () => void
  selectTokenHandler: (value: Token) => void
  showBalances?: boolean
}

export function TokenSelectorDialog(props: Props) {
  const [filterValue, setFilterValue] = useState('')
  const {isOpen, tokens, closeDialogHandler, selectTokenHandler, showBalances = false} = props
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
      <DialogContent className="flex flex-col sm:max-w-[500px] max-sm:h-full">
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
                      className={'flex rounded-md hover:bg-muted p-2 cursor-pointer'}
                    >
                      <TokenItem token={token} showBalances={showBalances} />
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