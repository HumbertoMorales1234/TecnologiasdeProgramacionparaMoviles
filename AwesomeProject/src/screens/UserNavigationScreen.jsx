import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'

import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { HomeScreen } from './UserNavigation/HomeScreen'
import { THEME } from '../theme/Colors'
import { OrdersScreen } from './UserNavigation/OrdersScreen';
import { WishlistScreen } from './UserNavigation/WishlistScreen';
import { CartScreen } from './UserNavigation/CartScreen';
import { ProfileScreen } from './UserNavigation/ProfileScreen';

const Tab = createMaterialBottomTabNavigator()

export const UserNavigationScreen = () => {
  return (
    <NavigationContainer independent={true}>
        <Tab.Navigator 
            barStyle={{backgroundColor: THEME.COLORS.CARD}}
            activeColor={THEME.COLORS.HIGHLIGHT}
            inactiveColor={THEME.COLORS.UNUSED} screenOptions={{tabBarColor: THEME.COLORS.CARD, }}
            initialRouteName='Home'
            >
            <Tab.Screen name='Home' component={HomeScreen} options={{tabBarIcon: ({color}) => (<AntDesign name="home" color={color} size={26} />),}}/>
            <Tab.Screen name='Wishlist' component={WishlistScreen} options={{tabBarIcon: ({color}) => (<MaterialCommunityIcons name="heart-multiple" color={color} size={26} />),}}/>
            <Tab.Screen name='Cart' component={CartScreen} options={{tabBarIcon: ({color}) => (<AntDesign name="shoppingcart" color={color} size={26} />),}}/>
            <Tab.Screen name='Orders' component={OrdersScreen} options={{tabBarIcon: ({color}) => (<FontAwesome5 name="list-alt" color={color} size={22} />),}}/>
            <Tab.Screen name='Profile' component={ProfileScreen} options={{tabBarIcon: ({color}) => (<AntDesign name="user" color={color} size={26} />),}}/>
        </Tab.Navigator>
    </NavigationContainer>
  )
}
