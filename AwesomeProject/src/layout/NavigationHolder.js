import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, } from 'react-native';
import { WelcomeScreen } from '../screens/WelcomeScreen';
import { LoginScreen } from '../screens/LoginScreen';
import { useAppContext } from '../hooks/useAppContext';
import { CustomDrawerContent } from '../components/CustomDrawerContent';
import { RegisterScreen } from '../screens/RegisterScreen';
import { THEME } from '../theme/Colors';
import { UserNavigationScreen } from '../screens/UserNavigationScreen';
import * as SecureStore from "expo-secure-store"
import { LoadingScreen } from '../screens/LoadingScreen';


const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

export const NavigationHolder = () => {
    const [isAuthenticated] =useAppContext()
    
  
  if(!isAuthenticated){
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        gestureEnabled: false,
        headerShown: false,
      }}>
        <Stack.Screen name='Loading' component={LoadingScreen}/>
        <Stack.Screen name='Welcome' component={WelcomeScreen}/>
        <Stack.Screen name='Login' component={LoginScreen}/>
        <Stack.Screen name='Register' component={RegisterScreen} options={{headerShown: true, title:false, headerStyle:{backgroundColor: THEME.COLORS.BACKGROUND}}} />
      </Stack.Navigator>
      
    </NavigationContainer>
  )}
  else{
    return(
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <CustomDrawerContent{...props}/>} screenOptions={{headerTitle:''}}>
          <Drawer.Screen name= 'Main' component={UserNavigationScreen}/>
      </Drawer.Navigator>
    </NavigationContainer>
  )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
