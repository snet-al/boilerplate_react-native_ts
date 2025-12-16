import React, {useState} from 'react'
import {NativeSyntheticEvent, TextInput, TextInputSubmitEditingEventData, View} from 'react-native'

import {styles} from './Search.styles'

export type SearchProps = {
  placeholder?: string
  onSearch?: (value: string) => void
}

export const Search: React.FC<SearchProps> = ({placeholder = 'Search...', onSearch}) => {
  const [value, setValue] = useState('')

  const handleSubmit = (event: NativeSyntheticEvent<TextInputSubmitEditingEventData>) => {
    const nextValue = event.nativeEvent.text
    onSearch?.(nextValue)
  }

  return (
    <View style={styles.wrapper}>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={setValue}
        placeholder={placeholder}
        placeholderTextColor="#9ca3af"
        onSubmitEditing={handleSubmit}
        returnKeyType="search"
      />
    </View>
  )
}
