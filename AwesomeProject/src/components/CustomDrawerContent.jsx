import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer'
import React from 'react'
import { useAppContext } from '../hooks/useAppContext'

export const CustomDrawerContent = (props) => {
    const [,,,handleLogOut] =useAppContext()

  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem label="Log Out" onPress={() => handleLogOut()} />
    </DrawerContentScrollView>
  )
}
