import React, {useState} from 'react'
import {useNavigation} from '@react-navigation/native'
import {Modal, Text, TouchableOpacity, View} from 'react-native'

import {styles} from './SideMenu.styles'

export type SideMenuItem = {
  label: string
  icon?: React.ReactNode
  path?: string
  onPress?: () => void
}

export type SideMenuProps = {
  title?: string
  items: SideMenuItem[]
}

export const SideMenu: React.FC<SideMenuProps> = ({title = 'Navigation', items}) => {
  const navigation = useNavigation()
  const [isOpen, setIsOpen] = useState(false)

  const handlePress = (item: SideMenuItem) => {
    if (item.onPress) {
      item.onPress()
    } else if (item.path) {
      navigation.navigate(item.path as never)
    }
    setIsOpen(false)
  }

  return (
    <>
      <TouchableOpacity style={styles.hamburger} onPress={() => setIsOpen(true)}>
        <View style={styles.hamburgerLine} />
        <View style={styles.hamburgerLine} />
        <View style={styles.hamburgerLine} />
      </TouchableOpacity>

      <Modal visible={isOpen} transparent animationType="fade" onRequestClose={() => setIsOpen(false)}>
        <TouchableOpacity style={styles.overlay} activeOpacity={1} onPress={() => setIsOpen(false)}>
          <View style={styles.menuContainer}>
            <View style={styles.menuHeader}>
              <Text style={styles.title}>{title}</Text>
              <TouchableOpacity onPress={() => setIsOpen(false)} style={styles.closeButton}>
                <Text style={styles.closeButtonText}>✕</Text>
              </TouchableOpacity>
            </View>

            {items.map(item => (
              <TouchableOpacity key={item.label} style={styles.item} onPress={() => handlePress(item)}>
                {item.icon && <View style={styles.icon}>{item.icon}</View>}
                <Text style={styles.label}>{item.label}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </TouchableOpacity>
      </Modal>
    </>
  )
}

export default SideMenu
