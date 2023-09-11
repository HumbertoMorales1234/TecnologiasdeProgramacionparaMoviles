import React from 'react';
import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import WelcomeScreen from './src/screens/WelcomeScreen';
import SignInScreen from './src/screens/SignInScreen';
import SignUpScreen from './src/screens/SignUpScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen}  options={{headerShown:false}} />
        <Stack.Screen name="SignInScreen"  component={SignInScreen}   options={{headerShown:false}} />
        <Stack.Screen name="SignUpScreen"  component={SignUpScreen}   options={{headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
