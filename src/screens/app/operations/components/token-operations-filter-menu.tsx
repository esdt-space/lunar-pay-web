import { useState } from 'react';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const listOfTypes = ['all', 'deposit', 'withdraw', 'transfer', 'payment-agreement-charge'];

type Props = {
  setOperationType: (input: string) => void;
}

export const TokenOperationsFilterMenu = ({ setOperationType }: Props) => {
  const [type, setType] = useState('All')

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='outline'>Filter by type: {formatOperationType(type)}</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-56'>
        <DropdownMenuGroup>
          {listOfTypes.map((item, index) => (
            <DropdownMenuItem key={index} onClick={() => {
              setType(item)
              setOperationType(item)
            }}>
              {formatOperationType(item)}
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

const formatOperationType = (input: string) => {
  switch(input) {
    case 'all': {
      return 'All'
    }
    case 'deposit': {
      return 'Deposits'
    }
    case 'withdraw': {
      return 'Withdrawals'
    }
    case 'transfer': {
      return 'Transfers'
    }
    case 'payment-agreement-charge': {
      return 'Charges'
    }
    case 'donation': {
      return 'Donations'
    }
    case 'payment': {
      return 'Payments'
    }
    default: {
      return 'All'
    }
  }
}
