import React from 'react'
import {ActivityIndicator, Text, TouchableOpacity, TouchableOpacityProps} from 'react-native'

import {styles} from './Button.styles'

export type ButtonProps = TouchableOpacityProps & {
  title: string
  loading?: boolean
}

export const Button: React.FC<ButtonProps> = ({title, loading, disabled, style, ...rest}) => {
  const isDisabled = disabled || loading

  return (
    <TouchableOpacity
      accessibilityRole="button"
      style={[styles.button, isDisabled && styles.disabledButton, style]}
      disabled={isDisabled}
      {...rest}
    >
      {loading ? <ActivityIndicator color="#fff" /> : <Text style={styles.label}>{title}</Text>}
    </TouchableOpacity>
  )
}
