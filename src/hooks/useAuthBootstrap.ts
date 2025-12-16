import {useEffect, useState} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

import {useAppDispatch, useAppSelector} from '@/store/redux'
import {setCredentials} from '@/store/redux/slices/auth'
import {AUTH_TOKEN_KEY, AUTH_USER_INFO_KEY} from '@/utils/constants'
import {User} from '@/types/user'

export const useAuthBootstrap = () => {
  const dispatch = useAppDispatch()
  const accessToken = useAppSelector(state => state.auth.accessToken)
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    const bootstrap = async () => {
      try {
        const [token, userString] = await Promise.all([
          AsyncStorage.getItem(AUTH_TOKEN_KEY),
          AsyncStorage.getItem(AUTH_USER_INFO_KEY),
        ])

        if (token && userString && !accessToken) {
          const user: User = JSON.parse(userString)
          dispatch(setCredentials({user, accessToken: token}))
        }
      } catch (error) {
        console.warn('Unable to bootstrap auth state', error)
      } finally {
        setIsReady(true)
      }
    }

    bootstrap()
  }, [accessToken, dispatch])

  return {
    isReady,
    isAuthenticated: Boolean(accessToken),
  }
}
