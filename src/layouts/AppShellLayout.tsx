import React from 'react'
import {ScrollView, View} from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context'

import {SideMenu, SideMenuItem} from '@/components'
import {styles} from './AppShellLayout.styles'

export type AppShellLayoutProps = {
  children: React.ReactNode
  menuItems: SideMenuItem[]
  menuTitle?: string
}

export const AppShellLayout: React.FC<AppShellLayoutProps> = ({children, menuItems, menuTitle}) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.header}>
          <SideMenu title={menuTitle} items={menuItems} />
        </View>
        <ScrollView contentContainerStyle={styles.content}>{children}</ScrollView>
      </View>
    </SafeAreaView>
  )
}

export default AppShellLayout
