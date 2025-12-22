import React from 'react'
import {Text, View} from 'react-native'

import {styles} from './AccountDetailsPage.styles'

export const AccountDetailsPage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Account Details</Text>
      <Text style={styles.description}>Build your account-specific UI here.</Text>
    </View>
  )
}
