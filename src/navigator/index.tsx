import React from 'react'
import {ActivityIndicator, View} from 'react-native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import {SideMenuItem} from '@/components'
import {useAuthBootstrap} from '@/hooks'
import {AppShellLayout} from '@/layouts'
import {PrivateGuard, PublicGuard} from '@/guards'
import {CreateAccountScreen, DashboardScreen, LoginScreen} from '@/screens'
import {styles} from './Navigator.styles'

export type AppStackParamList = {
  Dashboard: undefined
  CreateAccount: undefined
  Login: undefined
}

const Stack = createNativeStackNavigator<AppStackParamList>()

const menuItems: SideMenuItem[] = [
  {label: 'Dashboard', path: 'Dashboard'},
  {label: 'Create Account', path: 'CreateAccount'},
]

const DashboardRoute = () => (
  <PrivateGuard>
    <AppShellLayout menuItems={menuItems}>
      <DashboardScreen />
    </AppShellLayout>
  </PrivateGuard>
)

const CreateAccountRoute = () => (
  <PrivateGuard>
    <AppShellLayout menuItems={menuItems}>
      <CreateAccountScreen />
    </AppShellLayout>
  </PrivateGuard>
)

const LoginRoute = () => (
  <PublicGuard>
    <LoginScreen />
  </PublicGuard>
)

export const Navigator = () => {
  const {isReady, isAuthenticated} = useAuthBootstrap()

  if (!isReady) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="#2563eb" />
      </View>
    )
  }

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {isAuthenticated ? (
        <>
          <Stack.Screen name="Dashboard" component={DashboardRoute} />
          <Stack.Screen name="CreateAccount" component={CreateAccountRoute} />
        </>
      ) : (
        <Stack.Screen name="Login" component={LoginRoute} />
      )}
    </Stack.Navigator>
  )
}

export default Navigator
