import React, {useEffect} from 'react'
import {useNavigation} from '@react-navigation/native'

import {useAppSelector} from '@/store/redux'

interface PublicGuardProps {
  children: React.ReactNode
  redirectTo?: string
}

export const PublicGuard: React.FC<PublicGuardProps> = ({children, redirectTo = 'Dashboard'}) => {
  const navigation = useNavigation()
  const accessToken = useAppSelector(state => state.auth.accessToken)

  useEffect(() => {
    if (accessToken) {
      navigation.reset({index: 0, routes: [{name: redirectTo as never}]})
    }
  }, [accessToken, navigation, redirectTo])

  if (accessToken) {
    return null
  }

  return <>{children}</>
}

export default PublicGuard
