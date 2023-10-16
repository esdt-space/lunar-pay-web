import { useEffect, useMemo } from 'react'
import { Navigate, Outlet, useLocation, useNavigate } from 'react-router-dom'

import { RoutesConfig } from '@/navigation'
import { useIsAuthenticated } from '@/features/auth'

export function AuthenticatedRouteOutlet() {
  const location = useLocation()
  const navigate = useNavigate()
  const isLoggedIn = useIsAuthenticated()

  const redirectRoute = useMemo(() => `${RoutesConfig.auth}?redirectTo=${location.pathname}`, [])

  useEffect(() => {
    if (!isLoggedIn) {
      navigate(redirectRoute, { replace: true })
    }
  }, [isLoggedIn])

  if (!isLoggedIn) {
    return <Navigate to={redirectRoute} replace />
  }

  return <Outlet />
}
