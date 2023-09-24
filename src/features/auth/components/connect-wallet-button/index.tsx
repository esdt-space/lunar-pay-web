import { Wallet } from 'lucide-react'
import { useLocation, useNavigate } from 'react-router-dom'

import { RoutesConfig } from '@/navigation'
import { Button } from '@/components/ui/button'

export function ConnectWalletButton() {
  const location = useLocation()
  const navigate = useNavigate()

  const buttonClickHandler = () => {
    navigate(RoutesConfig.auth, {
      state: {
        backgroundLocation: location,
      },
    })
  }

  return (
    <Button onClick={buttonClickHandler} variant={'outline'} size={'sm'}>
      <Wallet className="mr-2 h-4 w-4" /> Connect Wallet
    </Button>
  )
}
