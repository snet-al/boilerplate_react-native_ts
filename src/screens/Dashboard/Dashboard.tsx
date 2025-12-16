import React from 'react'
import {Alert, Text, TouchableOpacity, View} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

import {useAppDispatch} from '@/store/redux'
import {deleteUser} from '@/store/redux/slices/auth'
import {AUTH_TOKEN_KEY, AUTH_USER_INFO_KEY} from '@/utils/constants'
import {styles} from './Dashboard.styles'

export const DashboardScreen = () => {
  const dispatch = useAppDispatch()

  const handleLogout = async () => {
    try {
      await AsyncStorage.multiRemove([AUTH_TOKEN_KEY, AUTH_USER_INFO_KEY])
      dispatch(deleteUser())
      Alert.alert('Logged Out', 'You have been logged out successfully.')
    } catch (error) {
      console.error('Logout error:', error)
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dashboard</Text>
      <Text style={styles.subtitle}>Ship your mobile experience faster.</Text>
      
      <TouchableOpacity onPress={handleLogout} style={styles.logoutButton}>
        <Text style={styles.logoutButtonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  )
}
