import { PropsWithChildren } from 'react'

import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'

export enum PaymentType {
  FixedAmount = 'fixed-amount',
  BoundedAmount = 'bounded-amount',
}

type ItemLabelProps = PropsWithChildren & {
  itemId: string
}

type PaymentTypeSelectorProps = PropsWithChildren & {
  value: PaymentType
  onChange: (newValue: PaymentType) => void
}

function ItemLabel(props: ItemLabelProps) {
  return (
    <Label
      htmlFor={props.itemId}
      className="flex gap-4 rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground [&:has([data-state=checked])]:bg-card-linear"
    >
      {props.children}
    </Label>
  )
}

export function PaymentTypeSelector(props: PaymentTypeSelectorProps) {
  return (
    <RadioGroup
      value={props.value}
      className="grid grid-cols-2 gap-4"
      onValueChange={(newValue: PaymentType) => props.onChange(newValue)}
    >
      <ItemLabel itemId="fixed-amount">
        <div className='flex flex-col space-y-3'>
          <div className='flex space-x-3'>
            <RadioGroupItem className='text-black border-black' value={PaymentType.FixedAmount} id="fixed-amount" />
            <div>Fixed Amount</div>
          </div>
          <p className="text-xs text-muted-foreground">The beneficiary will be able to claim a fix amount of token on each cycle</p>
        </div>
      </ItemLabel>
      <ItemLabel itemId="bounded-amount">
        <div className='flex flex-col space-y-3'>
          <div className='flex space-x-3'>
            <RadioGroupItem className='text-black border-black' value={PaymentType.BoundedAmount} id="bounded-amount" />
            <div>Bounded Amount</div>
          </div>
          <p className="text-xs text-muted-foreground">The beneficiary will be able to claim any amount up to this value on each cycle</p>
        </div>
      </ItemLabel>
    </RadioGroup>
  )
}