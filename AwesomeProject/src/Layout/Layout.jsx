import React from 'react'
import { AcountScreen } from '../screens/AcountScreen'
import { DetailsScreen } from '../screens/DetailsScreen'
import { LoginScreen } from '../screens/LoginScreen'
import { useAuthContext } from '../hooks/useAuthContext'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';

export const stack = createStackNavigator()

export const Layout = () =>{
    const {user} = useAuthContext()

    return(
        <NavigationContainer>
        <stack.Navigator>
            {!user ?(
                <stack.Screen name='Login' component={LoginScreen}/>
            ):(
                <>
                <stack.Screen name='Home' component={AcountScreen}/>
                <stack.Screen name='Details' component={DetailsScreen}/>
                </>
            )}
        </stack.Navigator>
      </NavigationContainer>
    )
  }