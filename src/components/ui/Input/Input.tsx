import React from 'react'
import {Text, TextInput, TextInputProps, View} from 'react-native'

import {styles} from './Input.styles'

export type InputProps = TextInputProps & {
  label?: string
  error?: string | null
}

export const Input: React.FC<InputProps> = ({label, error, style, ...rest}) => {
  return (
    <View style={styles.wrapper}>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput style={[styles.input, style]} placeholderTextColor="#9ca3af" {...rest} />
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  )
}
