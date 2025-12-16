import React, {useState} from 'react'
import {Alert, KeyboardAvoidingView, Platform, Text, View} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

import {Button, Input} from '../../components'
import {useAppDispatch} from '../../store/redux'
import {setCredentials} from '../../store/redux/slices/auth'
import {LoginUserInput, User} from '../../types/user'
import {AUTH_TOKEN_KEY, AUTH_USER_INFO_KEY} from '../../utils/constants'
import {styles} from './Login.styles'

export const LoginScreen = () => {
  const dispatch = useAppDispatch()
  const [values, setValues] = useState<LoginUserInput>({username: '', password: ''})
  const [error, setError] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (field: keyof LoginUserInput) => (value: string) => {
    setValues(prev => ({...prev, [field]: value}))
  }

  const handleSubmit = async () => {
    setError(null)
    setIsSubmitting(true)

    try {
      // const response = await AuthService.login(values)
      // const token = response?.data?.access_token
      // const user = response?.data?.user

      const token = '1234567890'
      const user: User = {
        id: 1,
        firstName: 'John',
        secondName: 'Doe',
        email: 'john.doe@example.com',
        phone: '1234567890',
        permissions: [],
      }

      if (token && user) {
        await AsyncStorage.multiSet([
          [AUTH_TOKEN_KEY, token],
          [AUTH_USER_INFO_KEY, JSON.stringify(user)],
        ])
        dispatch(setCredentials({user, accessToken: token}))
        Alert.alert('Success', 'You are now signed in.')
      } else {
        throw new Error('Invalid login response.')
      }
    } catch (loginError) {
      const message =
        loginError instanceof Error ? loginError.message : 'Unable to login, please try again.'
      setError(message)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined} style={styles.wrapper}>
      <View style={styles.card}>
        <Text style={styles.title}>Welcome back</Text>
        <Text style={styles.subtitle}>Sign in to continue.</Text>

        <View style={styles.form}>
          <Input
            label="Username"
            autoCapitalize="none"
            autoCorrect={false}
            value={values.username}
            onChangeText={handleChange('username')}
            placeholder="janedoe"
          />

          <Input
            label="Password"
            secureTextEntry
            value={values.password}
            onChangeText={handleChange('password')}
            placeholder="••••••••"
          />

          {error && <Text style={styles.error}>{error}</Text>}

          <Button title={isSubmitting ? 'Signing in…' : 'Sign in'} loading={isSubmitting} onPress={handleSubmit} />
        </View>
      </View>
    </KeyboardAvoidingView>
  )
}
