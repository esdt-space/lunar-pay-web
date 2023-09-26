import { HelpCircle } from 'lucide-react'

import { EsdtToken } from '@/features/tokens'

import { cn } from '@/theme/utils'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

type Props = {
  token: EsdtToken
  className?: string
}

export function TokenLogo(props: Props) {
  const { token, className } = props

  return (
    <Avatar className={cn('w-6 h-6', className)}>
      <AvatarImage src={token.assets.pngUrl} />
      <AvatarFallback className={'bg-slate-800'}>
        <HelpCircle />
      </AvatarFallback>
    </Avatar>
  )
}
