import { CircleDashed } from 'lucide-react'

import { cn } from '@/theme/utils'
import { Token } from '@/core/tokens'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

type Props = {
  token: Token
  className?: string
}

export function TokenLogo(props: Props) {
  const { token, className } = props

  return (
    <Avatar className={cn('w-6 h-6', className)}>
      <AvatarImage src={token.assetImageUrl} />
      <AvatarFallback className={'bg-muted'}>
        <CircleDashed className={'text-muted-foreground/50'} />
      </AvatarFallback>
    </Avatar>
  )
}
