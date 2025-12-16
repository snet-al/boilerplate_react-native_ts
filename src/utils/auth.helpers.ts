import AsyncStorage from '@react-native-async-storage/async-storage'

import {store} from '@/store/redux'
import {deleteUser, setCredentials} from '@/store/redux/slices/auth'
import {User} from '@/types/user'
import {AUTH_TOKEN_KEY, AUTH_USER_INFO_KEY} from './constants'

export const persistSession = async (user: User, token: string) => {
  await AsyncStorage.multiSet([
    [AUTH_TOKEN_KEY, token],
    [AUTH_USER_INFO_KEY, JSON.stringify(user)],
  ])
}

export const login = async (user: User, token: string) => {
  await persistSession(user, token)
  store.dispatch(setCredentials({user, accessToken: token}))
}

export const logout = async () => {
  await AsyncStorage.multiRemove([AUTH_TOKEN_KEY, AUTH_USER_INFO_KEY])
  store.dispatch(deleteUser())
}

export const isLoggedIn = () => {
  return Boolean(store.getState().auth.accessToken)
}

export const getToken = () => {
  return store.getState().auth.accessToken
}
