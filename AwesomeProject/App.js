// npm install @react-navigation/native
// npx expo install react-native-screens react-native-safe-area-context
// npm install @react-navigation/material-top-tabs react-native-tab-view
// npx expo install react-native-pager-view

import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { SendScreen } from './src/screens/SendScreen';
import { AppContextProvider } from './src/context/AppContext';
import { BalanceScreen } from './src/screens/BalanceScreen';
import { MyCardsScreen } from './src/screens/MyCardsScreen';

const Tab = createMaterialTopTabNavigator()

export default function App() {

  return (
    <AppContextProvider>
      <NavigationContainer>
        <Tab.Navigator tabBar={() => null} initialRouteName='MyCards' backBehavior='initialRoute'>
          <Tab.Screen name='MyCards' component={MyCardsScreen}/>
          <Tab.Screen name='Balance' component={BalanceScreen}/>
          <Tab.Screen name='Send' component={SendScreen}/>
        </Tab.Navigator>
      </NavigationContainer>
    </AppContextProvider>
  );
}
