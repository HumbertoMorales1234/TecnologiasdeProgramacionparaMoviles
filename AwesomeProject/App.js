// npm install @react-navigation/native
// npx expo install react-native-screens react-native-safe-area-context
// npm install @react-navigation/material-top-tabs react-native-tab-view
// npx expo install react-native-pager-view

import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { SendScreen } from './src/screens/SendScreen';

const Tab = createMaterialTopTabNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarShowLabel:false,
        }}
      >
        <Tab.Screen name='Send' component={SendScreen}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
