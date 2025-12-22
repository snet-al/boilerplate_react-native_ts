import React from 'react'
import {Text, View} from 'react-native'

import {styles} from './CreateAccount.styles'

export const CreateAccountScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Account</Text>
      <Text style={styles.subtitle}>Use this screen to onboard new users.</Text>
    </View>
  )
}